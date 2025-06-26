require("dotenv").config();

const test = {
    blocks: {
        // Khởi động
        default: {
            type: "text",
            payload: {
                text: "👋 Xin chào {{name || 'bạn'}}! Chào mừng bạn đến với TARACO.",
            },
            next: "ask_name",
        },

        // Hỏi tên người dùng
        ask_name: {
            type: "input",
            payload: {
                question: "📛 Bạn tên là gì?",
                variable: "name_temp",
                validate: "^[a-zA-ZÀ-ỹ\\s]{2,}$",
                error: "❌ Tên không hợp lệ. Vui lòng nhập lại.",
            },
            next: "confirm_name",
        },

        // Xác nhận tên và rẽ nhánh
        confirm_name: {
            type: "text",
            payload: {
                text: "📌 Xác nhận: Tên bạn là {{name_temp}} phải không?",
                quick_replies: [
                    { title: "Đúng", next: "set_name" },
                    { title: "Sai", next: "ask_name" },
                ],
            },
        },

        // Gán tên vào biến `name`, sau đó phân nhánh nếu là admin
        set_name: {
            type: "set_variable",
            payload: {
                variable: "name",
                value: "{{name_temp}}",
            },
            next: "branch_name",
        },

        branch_name: {
            type: "text",
            payload: {
                text: "✅ Đang kiểm tra vai trò...",
            },
            conditions: {
                admin: "admin_welcome",
            },
            next: "user_welcome",
        },

        // Rẽ nhánh admin
        admin_welcome: {
            type: "text",
            payload: {
                text: "🎉 Chào {{name}} - Admin quyền lực!",
            },
            next: "menu1",
        },

        // Người dùng bình thường
        user_welcome: {
            type: "text",
            payload: {
                text: "😊 Rất vui được gặp bạn, {{name}}!",
            },
            next: "menu1",
        },

        // Menu chính
        menu1: {
            type: "button",
            payload: {
                text: "--- MENU CHÍNH ---",
                buttons: [
                    { title: "Xem lời chào", next: "textNode" },
                    { title: "Xem ảnh", next: "imageNode" },
                    { title: "Xem sản phẩm", next: "genericNode" },
                ],
            },
        },

        // Văn bản
        textNode: {
            type: "text",
            payload: {
                text: "😊 Đây là một tin nhắn text bình thường!",
                quick_replies: [{ title: "Về Menu", next: "menu1" }],
            },
        },

        // Ảnh đơn
        imageNode: {
            type: "image",
            payload: {
                url: "https://www.w3schools.com/w3images/lights.jpg",
            },
            next: "menu1",
        },

        // Generic Template (carousel)
        genericNode: {
            type: "generic",
            payload: {
                elements: [
                    {
                        title: "👞 Giày Da TARACO GM-1012",
                        image_url:
                            "https://www.w3schools.com/w3images/jeans.jpg",
                        subtitle:
                            "Chất liệu da bò tự nhiên, kiểu dáng lịch lãm.",
                        buttons: [
                            {
                                type: "postback",
                                title: "Chọn GM-1012",
                                payload: "chon_gm1012",
                            },
                        ],
                    },
                    {
                        title: "👞 Giày Lười TARACO GM-1014",
                        image_url:
                            "https://www.w3schools.com/w3images/team2.jpg",
                        subtitle: "Thiết kế cổ điển, đế cao su chống trượt.",
                        buttons: [
                            {
                                type: "postback",
                                title: "Chọn GM-1014",
                                payload: "chon_gm1014",
                            },
                        ],
                    },
                ],
            },
        },

        // Trường hợp không hiểu
        not_understand: {
            type: "text",
            payload: {
                text: "❌ Bot không hiểu bạn đang nói gì. Hãy thử lại nhé!",
            },
            next: "menu1",
        },
    },
};

module.exports = test;
