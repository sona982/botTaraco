const flow = require("../json/sample");
const {
    sendTextMessage,
    sendQuickReplies,
    sendImageMessage,
    sendVideoMessage,
    sendAudioMessage,
    sendButtonTemplate,
    sendGenericTemplate,
    sendListTemplate,
    sendMediaTemplate,
} = require("../services/facebookService");
const { setUserState } = require("./userStateStore");
const { replaceVariables } = require("../utils/replaceVariables");
const { getUserContext, setUserContext } = require("./userContextStore");

const handlers = {
    text: async (senderId, payload, blockName) => {
        let { text, quick_replies } = payload;
        text = replaceVariables(text, senderId);
        if (quick_replies?.length > 0) {
            await sendQuickReplies(senderId, text, quick_replies);
        } else {
            await sendTextMessage(senderId, text);
        }
    },
    image: async (senderId, payload, blockName) => {
        if (payload.url) await sendImageMessage(senderId, payload.url);
    },
    video: async (senderId, payload, blockName) => {
        if (payload.url) await sendVideoMessage(senderId, payload.url);
    },
    audio: async (senderId, payload, blockName) => {
        if (payload.url) await sendAudioMessage(senderId, payload.url);
    },
    button: async (senderId, payload, blockName) => {
        const { text, buttons } = payload;
        if (text && buttons?.length > 0) {
            await sendButtonTemplate(senderId, text, buttons);
        }
    },
    generic: async (senderId, payload, blockName) => {
        if (payload.elements?.length > 0) {
            await sendGenericTemplate(senderId, payload.elements);
        }
    },
    list: async (senderId, payload, blockName) => {
        if (payload.elements?.length > 0) {
            await sendListTemplate(
                senderId,
                payload.elements,
                payload.buttons || []
            );
        }
    },
    media: async (senderId, payload, blockName) => {
        if (payload.url) {
            await sendMediaTemplate(
                senderId,
                payload.url,
                payload.media_type || "image",
                payload.button
            );
        }
    },
    input: async (senderId, payload, blockName, next) => {
        const { question, variable, validate, error } = payload;

        // Nếu người dùng chưa trả lời → hỏi
        const context = getUserContext(senderId);

        // Nếu chưa có _expecting hoặc _expecting không trùng block
        if (!context._expecting || context._expecting !== blockName) {
            setUserContext(senderId, "_expecting", blockName);
            await sendTextMessage(senderId, question);
            return;
        }
        // Người dùng vừa trả lời câu hỏi này
        const message = context._lastMessage || ""; // <-- bạn cần lưu messageText vào đây mỗi lần user trả lời
        const pattern = new RegExp(validate || ".*");

        if (!pattern.test(message)) {
            await sendTextMessage(senderId, error || "❌ Dữ liệu không hợp lệ");
            setUserContext(senderId, "_lastMessage", "");
            return;
            //  await handleBlock(senderId, blockName);
        }

        // Lưu thông tin vào context
        setUserContext(senderId, variable, message);
        setUserContext(senderId, "_expecting", null);

        // Tiếp tục luồng
        if (next) {
            setTimeout(() => handleBlock(senderId, next), 500);
        }
    },
};

async function handleBlock(senderId, blockName) {
    const block = flow.blocks[blockName];
    if (!block) return;

    setUserState(senderId, blockName);

    const { type, payload, next } = block;
    const handler = handlers[type];

    if (handler) {
        await handler(senderId, payload, blockName, next);
    }

    if (next && type !== "input") {
        setTimeout(() => handleBlock(senderId, next), 1000);
    }
}

module.exports = { handleBlock };
