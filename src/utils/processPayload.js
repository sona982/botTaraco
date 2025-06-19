const { handleBlock } = require("../store/botCore");
const { setUserContext } = require("../store/userContextStore");
const flow = require("../json/sample");

async function processPayload(senderId, messageText) {
  // Tìm button tương ứng trong tất cả các block
  for (const [blockName, block] of Object.entries(flow.blocks)) {
    if (block.type === "button") {
      const buttons = block.payload.buttons || [];
      const btn = buttons.find(
        (b) => b.payload === messageText || b.title === messageText
      );
      if (btn) {
        if (btn.value) {
          setUserContext(senderId, "selected_shoe", btn.value);
        }
        if (btn.next) {
          await handleBlock(senderId, btn.next);
          return true; // Đã xử lý
        }
      }
    }
  }
  return false; // Không tìm thấy payload tương ứng
}

module.exports = { processPayload };
