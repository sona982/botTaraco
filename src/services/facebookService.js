// facebookApi.js

require("dotenv").config(); // Load biến môi trường
const axios = require("axios");

const GRAPH_URL = "https://graph.facebook.com/v17.0/me/messages";

// Hàm gửi message bất kỳ
async function sendMessage(payload) {
  try {
    await axios.post(
      `${GRAPH_URL}?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
      payload
    );
    console.log("✅ Đã gửi");
  } catch (err) {
    console.error("❌ Lỗi gửi tin:", err?.response?.data || err.message);
  }
}

// Hàm helper để hiển thị typing indicator
async function showTyping(recipientId, duration = 1000) {
  try {
    // Đánh dấu tin nhắn đã xem
    await sendMessage({
      recipient: { id: recipientId },
      sender_action: "mark_seen",
    });

    // Hiển thị typing indicator
    await sendMessage({
      recipient: { id: recipientId },
      sender_action: "typing_on",
    });

    // Chờ một khoảng thời gian
    await new Promise((resolve) => setTimeout(resolve, duration));

    // Ẩn typing indicator
    await sendMessage({
      recipient: { id: recipientId },
      sender_action: "typing_off",
    });
  } catch (err) {
    console.error(
      "❌ Lỗi hiển thị typing:",
      err?.response?.data || err.message
    );
  }
}

// Gửi tin nhắn văn bản
async function sendTextMessage(recipientId, text) {
  await showTyping(recipientId, 800);
  return sendMessage({
    recipient: { id: recipientId },
    message: { text },
  });
}

// Gửi quick replies
async function sendQuickReplies(recipientId, text, replies = []) {
  await showTyping(recipientId, 1000);
  return sendMessage({
    recipient: { id: recipientId },
    message: {
      text,
      quick_replies: replies.map((r) => ({
        content_type: "text",
        title: r.title,
        payload: r.payload || r.next || r.title,
      })),
    },
  });
}

// Gửi template generic (carousel)
async function sendGenericTemplate(recipientId, elements = []) {
  await showTyping(recipientId, 1200);
  return sendMessage({
    recipient: { id: recipientId },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements,
        },
      },
    },
  });
}

// Gửi ảnh
async function sendImageMessage(recipientId, imageUrl) {
  await showTyping(recipientId, 1000);
  return sendMessage({
    recipient: { id: recipientId },
    message: {
      attachment: {
        type: "image",
        payload: {
          url: imageUrl,
          is_reusable: true,
        },
      },
    },
  });
}

// Gửi video
async function sendVideoMessage(recipientId, videoUrl) {
  await showTyping(recipientId, 1200);
  return sendMessage({
    recipient: { id: recipientId },
    message: {
      attachment: {
        type: "video",
        payload: {
          url: videoUrl,
          is_reusable: true,
        },
      },
    },
  });
}

// Gửi audio
async function sendAudioMessage(recipientId, audioUrl) {
  await showTyping(recipientId, 1000);
  return sendMessage({
    recipient: { id: recipientId },
    message: {
      attachment: {
        type: "audio",
        payload: {
          url: audioUrl,
          is_reusable: true,
        },
      },
    },
  });
}

// Gửi button template
async function sendButtonTemplate(recipientId, text, buttons = []) {
  await showTyping(recipientId, 1000);
  return sendMessage({
    recipient: { id: recipientId },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text,
          buttons: buttons.map((btn) => ({
            type: "postback",
            title: btn.title,
            payload: btn.payload || btn.next || btn.title,
          })),
        },
      },
    },
  });
}

async function sendListTemplate(recipientId, elements = [], buttons = []) {
  await showTyping(recipientId, 1200);
  return sendMessage({
    recipient: { id: recipientId },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "list",
          top_element_style: "compact", // hoặc "large"
          elements,
          buttons: buttons.map((btn) => ({
            type: "postback",
            title: btn.title,
            payload: btn.payload || btn.next || btn.title,
          })),
        },
      },
    },
  });
}

async function sendMediaTemplate(
  recipientId,
  mediaUrl,
  mediaType = "image",
  button
) {
  await showTyping(recipientId, 1200);
  return sendMessage({
    recipient: { id: recipientId },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "media",
          elements: [
            {
              media_type: mediaType, // "image" or "video"
              url: mediaUrl,
              buttons: button
                ? [
                    {
                      type: "postback",
                      title: button.title,
                      payload: button.payload || button.next || button.title,
                    },
                  ]
                : [],
            },
          ],
        },
      },
    },
  });
}

async function getUserProfile(senderId) {
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  try {
    const response = await axios.get(`https://graph.facebook.com/${senderId}`, {
      params: {
        access_token: PAGE_ACCESS_TOKEN,
        fields: "first_name,last_name,profile_pic",
      },
    });

    return response.data; // { first_name, last_name, profile_pic }
  } catch (err) {
    console.error(
      "❌ Lỗi lấy thông tin người dùng:",
      err?.response?.data || err.message
    );
    return {};
  }
}

module.exports = {
  sendTextMessage,
  sendQuickReplies,
  sendGenericTemplate,
  sendImageMessage,
  sendVideoMessage,
  sendAudioMessage,
  sendButtonTemplate,
  sendGenericTemplate,
  sendListTemplate,
  sendMediaTemplate,
  getUserProfile,
};
