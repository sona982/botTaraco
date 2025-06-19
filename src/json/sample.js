const sample = {
  blocks: {
    greeting: {
      type: "button",
      payload: {
        text: "👋 Chào mừng bạn đến với Taraco - Cửa hàng giày da cao cấp! Bạn muốn xem loại giày nào? (Website: taraco.vn)",
        buttons: [
          { title: "Giày Tây", next: "show_giay_tay" },
          { title: "Giày Mọi", next: "show_giay_moi" },
          { title: "Giày Sapo", next: "show_giay_sapo" },
        ],
      },
    },
    // Giày Tây
    show_giay_tay: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Tây GT1001",
            image_url: "https://i.imgur.com/0y8Ftya.jpeg",
            subtitle: "Giày Tây GT1001 - Da bò Ý, size 39-44. Giá: 1.500.000đ",
            buttons: [{ title: "Chọn GT1001", payload: "chon_GT1001" }],
          },
          {
            title: "Giày Tây GT1002",
            image_url: "https://i.imgur.com/0y8Ftya.jpeg",
            subtitle: "Giày Tây GT1002 - Da bò Ý, size 39-44. Giá: 1.600.000đ",
            buttons: [{ title: "Chọn GT1002", payload: "chon_GT1002" }],
          },
          // ... Thêm các sản phẩm GT1003-GT1010 tương tự
        ],
      },
    },
    // Giày Mọi
    show_giay_moi: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Mọi GM1025",
            image_url: "https://i.imgur.com/0y8Ftya.jpeg",
            subtitle: "Giày Mọi GM1025 - Da bò, size 39-44. Giá: 1.200.000đ",
            buttons: [{ title: "Chọn GM1025", payload: "chon_GM1025" }],
          },
          // ... Thêm các sản phẩm GM1026-GM1030 tương tự
        ],
      },
    },
    // Giày Sapo
    show_giay_sapo: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Sapo SP1013",
            image_url: "https://i.imgur.com/0y8Ftya.jpeg",
            subtitle: "Giày Sapo SP1013 - Da bò, size 39-44. Giá: 1.300.000đ",
            buttons: [{ title: "Chọn SP1013", payload: "chon_SP1013" }],
          },
          // ... Thêm các sản phẩm SP1014-SP1024 tương tự
        ],
      },
    },
    // Chọn sản phẩm
    chon_GT1001: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1001" },
      next: "ask_name",
    },
    chon_GT1002: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1002" },
      next: "ask_name",
    },
    // ... Các block chọn sản phẩm khác tương tự, trỏ về ask_name
    chon_GM1025: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Mọi GM1025" },
      next: "ask_name",
    },
    chon_SP1013: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Sapo SP1013" },
      next: "ask_name",
    },
    // Hỏi tên
    ask_name: {
type: "input",
      payload: {
        question: "📛 Vui lòng nhập tên của bạn:",
        variable: "name",
        validate: "^[a-zA-ZÀ-ỹs]{2,}$",
        error: "❌ Tên không hợp lệ, vui lòng nhập lại!",
      },
      next: "ask_phone",
    },
    // Hỏi SĐT
    ask_phone: {
      type: "input",
      payload: {
        question: "📞 Vui lòng nhập số điện thoại của bạn:",
        variable: "phone",
        validate: "^d{9,11}$",
        error: "❌ Số điện thoại không hợp lệ, vui lòng nhập lại!",
      },
      next: "ask_address",
    },
    // Hỏi địa chỉ
    ask_address: {
      type: "input",
      payload: {
        question: "🏠 Vui lòng nhập địa chỉ nhận hàng:",
        variable: "address",
        validate: ".{5,}",
        error: "❌ Địa chỉ quá ngắn, vui lòng nhập lại!",
      },
      next: "show_order_summary",
    },
    // Hiển thị phiếu mua hàng
    show_order_summary: {
      type: "text",
      payload: {
        text: "🧾 PHIẾU MUA HÀNG\nKhách hàng: {{name}}\nSĐT: {{phone}}\nĐịa chỉ: {{address}}\nSản phẩm: {{product}}\n\nChính sách bảo hành: 12 tháng, 1 đổi 1 trong 30 ngày nếu lỗi do nhà sản xuất.\nWebsite: taraco.vn",
      },
      next: "confirm_order",
    },
    // Xác nhận đơn hàng
    confirm_order: {
      type: "button",
      payload: {
        text: "Bạn vui lòng kiểm tra lại thông tin. Nếu đúng, bấm 'Xác nhận'. Nếu sai, bấm 'Nhập lại'.",
        buttons: [
          { title: "Xác nhận", next: "thank_you" },
          { title: "Nhập lại", next: "ask_name" },
        ],
      },
    },
    // Cảm ơn
    thank_you: {
      type: "text",
      payload: {
        text: "🙏 Cảm ơn bạn đã đặt hàng tại Taraco! Đơn hàng của bạn sẽ được xử lý sớm nhất. Mọi thắc mắc vui lòng liên hệ website: taraco.vn",
      },
      next: "greeting",
    },
  },
};

module.exports = sample;
