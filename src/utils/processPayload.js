const { handleBlock } = require("../store/botCore");
const { setUserContext } = require("../store/userContextStore");
const flow = require("../json/sample");

async function processPayload(senderId, messageText) {
    // 1. Check button trong block 'button'
    for (const [blockName, block] of Object.entries(flow.blocks)) {
        if (block.type === "button") {
            const buttons = block.payload.buttons || [];
            const btn = buttons.find(
                (b) => b.payload === messageText || b.title === messageText
            );
            if (btn) {
                if (btn.value) {
                    setUserContext(senderId, btn.variable, btn.value);
                }
                if (btn.next) {
                    await handleBlock(senderId, btn.next);
                    return true;
                }
            }
        }
    }

    // 2. Check button trong block 'generic' (trong từng element)
    for (const [blockName, block] of Object.entries(flow.blocks)) {
        if (block.type === "generic") {
            const elements = block.payload.elements || [];
            for (const el of elements) {
                const buttons = el.buttons || [];
                const btn = buttons.find(
                    (b) => b.payload === messageText || b.title === messageText
                );
                if (btn) {
                    // Nếu là chọn sản phẩm, lưu lại tên sản phẩm
                    if (el.title) {
                        setUserContext(senderId, btn.variable, el.title);
                    }
                    if (btn.value) {
                        setUserContext(senderId, btn.variable, btn.value);
                    }
                    if (btn.next) {
                        await handleBlock(senderId, btn.next);
                        return true;
                    }
                }
            }
        }
    }

    return false; // Không tìm thấy payload tương ứng
}

module.exports = { processPayload };
