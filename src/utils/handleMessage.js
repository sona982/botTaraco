// utils/handleMessage.js
import { sendTextMessage, sendQuickReplies, sendGenericTemplate } from "../services/facebook.service.js";

const userStates = new Map(); // senderId -> { step, category, product }
const userOrders = new Map(); // senderId -> { name, phone, address, product }

const PRODUCTS = {
    "GIÀY TÂY": [
        {
            title: "GIÀY TÂY TARACO GT-1001",
            subtitle: "Thoải mái, phong cách hiện đại",
            image_url: "https://bizweb.dktcdn.net/thumb/large/100/422/612/products/z6308228199184-e7c303c4870ccb9d1b543edbe513e6df.jpg?v=1745924340470",
        },
        
    ],
    "GIÀY MỌI": [
        {
            title: "Túi xách da bò",
            subtitle: "Bền đẹp, thời trang",
            image_url: "https://linkanh2.jpg",
        },
    ],
    "GIÀY SAPO": [
        {
            title: "Túi xách da bò",
            subtitle: "Bền đẹp, thời trang",
            image_url: "https://linkanh2.jpg",
        },
    ],
};

const PRODUCT_CATEGORIES = Object.keys(PRODUCTS);

async function handleMessage(senderId, event) {
    const message = event.message?.text || event.postback?.payload;
    if (!message) return;

    const msg = message.toLowerCase();
    const currentState = userStates.get(senderId);
    const currentOrder = userOrders.get(senderId) || {};

    // Bắt đầu hoặc bất kỳ tin nhắn nào cũng show menu
    if (!currentState || msg === "get_started" || msg === "bắt đầu") {
        await showMainMenu(senderId);
        userStates.set(senderId, { step: "main_menu" });
        return;
    }

    // Main menu
    if (currentState.step === "main_menu") {
        if (msg.includes("xem") || msg.includes("đặt")) {
            await showProductCategories(senderId);
            userStates.set(senderId, { step: "choosing_category" });
            return;
        }

        if (msg.includes("thông tin")) {
            await sendTextMessage(
                senderId,
                "🏪 Chúng tôi là cửa hàng thời trang uy tín, chuyên cung cấp sản phẩm chất lượng với giá cả hợp lý."
            );
            await sendQuickReplies(senderId, "🤖 Bạn muốn làm gì tiếp?", [
                { content_type: "text", title: "Xem sản phẩm", payload: "XEM SẢN PHẨM" },
                { content_type: "text", title: "Đặt hàng", payload: "ĐẶT HÀNG" },
            ]);
            return;
        }
    }

    // Chọn loại sản phẩm
    if (currentState.step === "choosing_category") {
        if (!PRODUCTS[msg]) {
            await sendTextMessage(senderId, "❗ Loại sản phẩm không hợp lệ. Vui lòng chọn lại.");
            await showProductCategories(senderId);
            return;
        }

        const productCards = PRODUCTS[msg].map((p) => ({
            title: p.title,
            subtitle: p.subtitle,
            image_url: p.image_url,
            buttons: [
                {
                    type: "postback",
                    title: "Đặt hàng",
                    payload: `ORDER_${p.title}`,
                },
            ],
        }));

        await sendGenericTemplate(senderId, productCards);
        userStates.set(senderId, { step: "choosing_product", category: msg });
        return;
    }

    // Chọn sản phẩm cụ thể
    if (msg.startsWith("order_")) {
        const productTitle = msg.replace("order_", "").toLowerCase();
        const category = currentState.category;
        const product = PRODUCTS[category]?.find((p) => p.title.toLowerCase() === productTitle);

        if (product) {
            userOrders.set(senderId, { ...currentOrder, product });
            userStates.set(senderId, { step: "confirm_product", category });

            await sendQuickReplies(senderId, `🔖 Bạn vừa chọn:\n📦 ${product.title}\n📄 ${product.subtitle}`, [
                { content_type: "text", title: "✔ Xác nhận", payload: "XÁC NHẬN" },
                { content_type: "text", title: "❌ Không xác nhận", payload: "KHÔNG XÁC NHẬN" },
            ]);
            return;
        }
    }

    // Xác nhận sản phẩm
    if (currentState.step === "confirm_product") {
        if (msg.includes("xác nhận")) {
            userStates.set(senderId, { step: "name", category: currentState.category });
            await sendTextMessage(senderId, "📋 Vui lòng nhập họ tên:");
            return;
        } else {
            await showProductCategories(senderId);
            userStates.set(senderId, { step: "choosing_category" });
            return;
        }
    }

    // Nhập tên
    if (currentState.step === "name") {
        currentOrder.name = message;
        userOrders.set(senderId, currentOrder);
        userStates.set(senderId, { step: "phone", category: currentState.category });
        await sendTextMessage(senderId, "📞 Vui lòng nhập số điện thoại:");
        return;
    }

    // Nhập sđt
    if (currentState.step === "phone") {
        currentOrder.phone = message;
        userOrders.set(senderId, currentOrder);
        userStates.set(senderId, { step: "address", category: currentState.category });
        await sendTextMessage(senderId, "🏠 Vui lòng nhập địa chỉ:");
        return;
    }

    // Nhập địa chỉ và hoàn tất
    if (currentState.step === "address") {
        currentOrder.address = message;
        await sendTextMessage(
            senderId,
            `✅ Phiếu mua hàng:\n👤 Tên: ${currentOrder.name}\n📞 SĐT: ${currentOrder.phone}\n🏠 Địa chỉ: ${currentOrder.address}\n📦 Sản phẩm: ${currentOrder.product.title}\n\n💖 Cảm ơn bạn đã mua hàng!`
        );
        userStates.delete(senderId);
        userOrders.delete(senderId);
        return;
    }

    // Fallback
    // await sendTextMessage(senderId, "❓ Mình chưa hiểu ý bạn. Bạn có thể chọn lại từ menu nhé.");
}

async function showMainMenu(senderId) {
    await sendQuickReplies(senderId, "🤖 Bạn muốn làm gì tiếp theo?", [
        { content_type: "text", title: "Xem sản phẩm", payload: "XEM SẢN PHẨM" },
        { content_type: "text", title: "Thông tin cửa hàng", payload: "THÔNG TIN" },
        { content_type: "text", title: "Đặt hàng", payload: "ĐẶT HÀNG" },
    ]);
}

async function showProductCategories(senderId) {
    const quickReplies = PRODUCT_CATEGORIES.map((cat) => ({
        content_type: "text",
        title: cat,
        payload: cat.toUpperCase(),
    }));
    await sendQuickReplies(senderId, "📂 Vui lòng chọn loại sản phẩm:", quickReplies);
}

export default handleMessage;
