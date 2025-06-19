const sample = {
  blocks: {
    greeting: {
      type: "button",
      payload: {
        text: "👋 Chào mừng bạn đến với TARACO - Giày da cao cấp!",
        buttons: [
          { title: "🛍️ Xem sản phẩm", next: "choose_category" },
          { title: "🏬 Thông tin cửa hàng", next: "store_info" },
          { title: "🛡️ Chính sách bảo hành", next: "warranty_policy" },
        ],
      },
    },

    store_info: {
      type: "text",
      payload: {
        text:
          "📍 Địa chỉ: 123 Đường Da Sang, TP.HCM\n🌐 Website: https://taraco.vn\n📞 Hotline: 1900 123 456",
      },
      next: "back_to_products",
    },

    warranty_policy: {
      type: "text",
      payload: {
        text:
          "🛡️ Bảo hành 12 tháng với mọi sản phẩm lỗi do nhà sản xuất. Đổi hàng trong 7 ngày nếu chưa qua sử dụng.",
      },
      next: "back_to_products",
    },

    back_to_products: {
      type: "button",
      payload: {
        text: "Bạn muốn xem sản phẩm không?",
        buttons: [
          { title: "Xem sản phẩm", next: "choose_category" },
        ],
      },
    },

    choose_category: {
      type: "quick",
      payload: {
        text: "📦 Chọn loại giày bạn muốn xem:",
        replies: [
          { title: "👞 Giày Tây", payload: "show_gt" },
          { title: "🥿 Giày Mọi", payload: "show_gm" },
          { title: "👟 Giày Sapo", payload: "show_sp" },
        ],
      },
    },

    show_gt: {
      type: "generic",
      payload: {
        elements: [
          { title: "Giày Tây GT1001", image_url: "https://taraco.vn/images/GT1001.jpg", subtitle: "Giá: 1.500.000đ", buttons: [{ type: "postback", title: "Chọn mua", payload: "buy_GT1001" }] },
          { title: "Giày Tây GT1002", image_url: "https://taraco.vn/images/GT1002.jpg", subtitle: "Giá: 1.600.000đ", buttons: [{ type: "postback", title: "Chọn mua", payload: "buy_GT1002" }] },
          { title: "Giày Tây GT1003", image_url: "https://taraco.vn/images/GT1003.jpg", subtitle: "Giá: 1.700.000đ", buttons: [{ type: "postback", title: "Chọn mua", payload: "buy_GT1003" }] },
        ],
      },
    },

    show_gm: {
      type: "generic",
      payload: {
        elements: [
          { title: "Giày Mọi GM1025", image_url: "https://taraco.vn/images/GM1025.jpg", subtitle: "Giá: 1.300.000đ", buttons: [{ type: "postback", title: "Chọn mua", payload: "buy_GM1025" }] },
          { title: "Giày Mọi GM1026", image_url: "https://taraco.vn/images/GM1026.jpg", subtitle: "Giá: 1.350.000đ", buttons: [{ type: "postback", title: "Chọn mua", payload: "buy_GM1026" }] },
        ],
      },
    },

    show_sp: {
      type: "generic",
      payload: {
        elements: [
          { title: "Giày Sapo SP1013", image_url: "https://taraco.vn/images/SP1013.jpg", subtitle: "Giá: 1.200.000đ", buttons: [{ type: "postback", title: "Chọn mua", payload: "buy_SP1013" }] },
          { title: "Giày Sapo SP1014", image_url: "https://taraco.vn/images/SP1014.jpg", subtitle: "Giá: 1.250.000đ", buttons: [{ type: "postback", title: "Chọn mua", payload: "buy_SP1014" }] },
        ],
      },
    },

    buy_GT1001: { type: "input", payload: { question: "📛 Nhập tên của bạn:", variable: "user_name", validate: ".+", error: "❗ Vui lòng nhập tên hợp lệ!" }, next: "ask_phone" },
    buy_GT1002: { type: "input", payload: { question: "📛 Nhập tên của bạn:", variable: "user_name", validate: ".+", error: "❗ Vui lòng nhập tên hợp lệ!" }, next: "ask_phone" },
    buy_GT1003: { type: "input", payload: { question: "📛 Nhập tên của bạn:", variable: "user_name", validate: ".+", error: "❗ Vui lòng nhập tên hợp lệ!" }, next: "ask_phone" },
    buy_GM1025: { type: "input", payload: { question: "📛 Nhập tên của bạn:", variable: "user_name", validate: ".+", error: "❗ Vui lòng nhập tên hợp lệ!" }, next: "ask_phone" },
    buy_GM1026: { type: "input", payload: { question: "📛 Nhập tên của bạn:", variable: "user_name", validate: ".+", error: "❗ Vui lòng nhập tên hợp lệ!" }, next: "ask_phone" },
    buy_SP1013: { type: "input", payload: { question: "📛 Nhập tên của bạn:", variable: "user_name", validate: ".+", error: "❗ Vui lòng nhập tên hợp lệ!" }, next: "ask_phone" },
    buy_SP1014: { type: "input", payload: { question: "📛 Nhập tên của bạn:", variable: "user_name", validate: ".+", error: "❗ Vui lòng nhập tên hợp lệ!" }, next: "ask_phone" },

    ask_phone: {
      type: "input",
      payload: {
        question: "📞 Nhập số điện thoại:",
        variable: "user_phone",
        validate: "^\\d{9,11}$",
        error: "❗ Số điện thoại không hợp lệ!",
      },
      next: "ask_address",
    },

    ask_address: {
      type: "input",
      payload: {
        question: "📍 Nhập địa chỉ nhận hàng:",
        variable: "user_address",
        validate: ".+",
        error: "❗ Địa chỉ không hợp lệ!",
      },
      next: "summary",
    },

    summary: {
      type: "button",
      payload: {
        text:
          "📄 Phiếu mua hàng:\nSản phẩm: {{last_selected}}\nTên: {{user_name}}\nSĐT: {{user_phone}}\nĐịa chỉ: {{user_address}}\n\n🏬 TARACO - Giày da cao cấp\n🌐 https://taraco.vn\n📞 1900 123 456\n🛡️ Bảo hành 12 tháng\n🚛 Giao hàng toàn quốc",
        buttons: [
          { title: "✅ Xác nhận", next: "confirm_success" },
          { title: "❌ Nhập lại", next: "greeting" },
        ],
      },
    },

    confirm_success: {
      type: "text",
      payload: {
        text: "🎉 Cảm ơn bạn đã đặt hàng! Đơn hàng sẽ được xử lý ngay."
      },
      next: "greeting"
    },
  },
};

module.exports = sample;
