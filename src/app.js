const express = require("express");
const bodyParser = require("body-parser");
const flow = require("./json/sample.js");
const { handleBlock } = require("./store/botCore");
const { getUserState } = require("./store/userStateStore");
const { setUserContext, getUserContext } = require("./store/userContextStore");
const env = require("dotenv");
const { getUserProfile } = require("./services/facebookService");
const { processPayload } = require("./utils/processPayload");
const path = require("path");
env.config();

const app = express();
app.use(bodyParser.json());

// Đảm bảo đường dẫn tuyệt đối
app.use(
    "/src/access/imgs",
    express.static(path.join(__dirname, "access/imgs"))
);

const PORT = 3000;

// Webhook nhận tin nhắn từ Messenger
app.post("/webhook", async (req, res) => {
    const body = req.body;

    if (body.object === "page") {
        for (const entry of body.entry) {
            const event = entry.messaging[0];

            if (event.message?.is_echo) continue;

            const senderId = event.sender.id;
            const messageText =
                event.message?.quick_reply?.payload ||
                event.message?.text ||
                event.postback?.payload;

            if (!messageText || !senderId) continue;

            // Lấy thông tin người dùng
            const profile = await getUserProfile(senderId);
            if (profile.first_name) {
                setUserContext(
                    senderId,
                    "name",
                    `${profile.first_name} ${profile.last_name}`
                );
            }

            // Nếu payload là value của button thì lưu và nhảy sang block tiếp theo
            const handled = await processPayload(senderId, messageText);
            if (handled) {
                continue;
            }

            const currentBlock = getUserState(senderId);
            const current = flow.blocks[currentBlock];

            setUserContext(senderId, "_lastMessage", messageText);
            const expecting = getUserContext(senderId)._expecting;
            if (expecting) {
                await handleBlock(senderId, expecting);
                return res.sendStatus(200);
            }

            if (current) {
                // Nếu block hiện tại có điều kiện rẽ nhánh (conditions)
                if (current?.conditions?.[messageText]) {
                    await handleBlock(
                        senderId,
                        current.conditions[messageText]
                    );
                } else if (current && flow.blocks[messageText]) {
                    await handleBlock(senderId, messageText);
                } else {
                    await handleBlock(senderId, "not_understand");
                }
            } else if (flow.blocks[messageText]) {
                // Nếu payload trùng với tên block
                await handleBlock(senderId, messageText);
            } else {
                // Trường hợp không khớp gì, lặp lại block hiện tại
                await handleBlock(senderId, "default");
            }
        }

        res.sendStatus(200);
    }
});

// Endpoint verify webhook từ Facebook (chưa cần dùng ngay)
app.get("/webhook", (req, res) => {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === process.env.VERIFY_TOKEN) {
        console.log("✅ Webhook verified!");
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
