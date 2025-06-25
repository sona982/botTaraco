require("dotenv").config();

const sample = {
  blocks: {
    greeting: {
      type: "text",
      payload: {
        text: "👋 Chào mừng bạn đến với taraco.vn! Nếu bạn muốn gặp trợ lý ảo để được chăm sóc tự động, vui lòng gõ (hi)",
      },
    },

    hi: {
      type: "button",
      payload: {
        text: "👋 Tôi là trợ lý ảo của Taraco - Cửa hàng giày da cao cấp! Bạn muốn làm gì? (Website: taraco.vn)",
        buttons: [
          { title: "🛍️ Xem sản phẩm", next: "choose_category" },
          { title: "🖼️ Xem tin tức TARACO", next: "news_info" },
          { title: "🏬 Thông tin cửa hàng", next: "store_info" },
          { title: "🛡️ Chính sách bảo hành", next: "warranty_info" },
        ],
      },
    },

    Hi: { $ref: "hi" }, // alias cho "Hi"

    choose_category: {
      type: "button",
      payload: {
        text: "Vui lòng chọn loại giày bạn muốn xem:",
        buttons: [
          { title: "Giày Tây", next: "show_giay_tay" },
          { title: "Giày Mọi", next: "show_giay_moi" },
          { title: "Giày Sapo", next: "show_giay_sapo" },
        ],
      },
    },

    news_info: {
      type: "button",
      payload: {
        text: "📰 Tin tức mới nhất từ Taraco:",
        buttons: [
          { title: "🎁 Khuyến mãi", next: "news_1" },
          { title: "📸 Hoạt động Taraco", next: "news_2" },
          { title: "🎥 Hình ảnh & video", next: "news_3" },
        ],
      },
    },

    news_1: {
      type: "text",
      payload: {
        text: "🎁 Khuyến mãi: Mua 1 tặng 1 áp dụng từ 01-10 đến 10-10 tại tất cả chi nhánh Taraco.",
      },
      next: "greeting",
    },

    news_2: {
      type: "text",
      payload: {
        text: "📸 Taraco vừa khai trương showroom mới tại Quận 7 - HCM. Mời bạn ghé thăm!",
      },
      next: "greeting",
    },

    news_3: {
      type: "image",
      payload: {
        url: `${process.env.IMAGE_URL}/src/access/imgs/showroom-taraco.jpg`,
      },
      next: "greeting",
    },

    store_info: {
      type: "text",
      payload: {
        text: "📍 Địa chỉ: 60 ĐƯỜNG SỐ 3, KHU DÂN CƯ T30, XÃ BÌNH HƯNG, BÌNH CHÁNH, TP.HCM\n🌐 Website: https://taraco.vn\n📞 Hotline: 0357 66 3979",
      },
      next: "greeting",
    },

    warranty_info: {
      type: "text",
      payload: {
        text: "🛡️ Bảo hành 12 tháng với sản phẩm lỗi do nhà sản xuất. Bảo dưỡng miễn phí. Đổi hàng trong 7 ngày nếu chưa qua sử dụng.",
      },
      next: "greeting",
    },

    show_giay_tay: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Tây GT1001",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/giay-da-nam-henry-11.jpg`,
            subtitle: "Da bò Ý, size 39-44. Giá: 1.500.000đ",
            buttons: [{ type: "postback", title: "Chọn GT1001", payload: "chon_GT1001" }],
          },
          {
            title: "Giày Tây GT1002",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/giay-da-nam-henry-11.jpg`,
            subtitle: "Da bò Ý, size 39-44. Giá: 1.600.000đ",
            buttons: [{ type: "postback", title: "Chọn GT1002", payload: "chon_GT1002" }],
          },
        ],
      },
    },

    show_giay_moi: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Mọi GM1025",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt1001.png`,
            subtitle: "Da bò, size 37-44. Giá: 1.200.000đ",
            buttons: [{ type: "postback", title: "Chọn GM1025", payload: "chon_GM1025" }],
          },
        ],
      },
    },

    show_giay_sapo: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Sapo SP1013",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/giay-da-nam-henry-11.jpg`,
            subtitle: "Da bò, size 39-44. Giá: 1.300.000đ",
            buttons: [{ type: "postback", title: "Chọn SP1013", payload: "chon_SP1013" }],
          },
        ],
      },
    },

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

    ask_name: {
      type: "input",
      payload: {
        question: "📛 Vui lòng nhập tên của bạn:",
        variable: "name",
        validate: "^[a-zA-ZÀ-ỹ\\s]{2,}$",
        error: "❌ Tên không hợp lệ, vui lòng nhập lại!",
      },
      next: "ask_phone",
    },

    ask_phone: {
      type: "input",
      payload: {
        question: "📞 Vui lòng nhập số điện thoại của bạn:",
        variable: "phone",
        validate: "^\\d{9,11}$",
        error: "❌ Số điện thoại không hợp lệ, vui lòng nhập lại!",
      },
      next: "ask_address",
    },

    ask_address: {
      type: "input",
      payload: {
        question: "🏠 Vui lòng nhập địa chỉ nhận hàng:",
        variable: "address",
        validate: ".{5,}",
        error: "❌ Địa chỉ quá ngắn, vui lòng nhập lại!",
      },
      next: "ask_size",
    },

    ask_size: {
      type: "input",
      payload: {
        question: "👞 Bạn muốn đặt size bao nhiêu? (VD: 40, 41...)",
        variable: "size",
        validate: "^\\d{2}$",
        error: "❌ Vui lòng nhập size hợp lệ (ví dụ: 40)!",
      },
      next: "ask_color",
    },

    ask_color: {
      type: "input",
      payload: {
        question: "🎨 Bạn muốn chọn màu gì? (VD: Đen, Nâu...)",
        variable: "color",
        validate: "^[a-zA-ZÀ-ỹ\\s]{2,}$",
        error: "❌ Màu không hợp lệ, vui lòng nhập lại!",
      },
      next: "show_order_summary",
    },

    show_order_summary: {
      type: "text",
      payload: {
        text:
          "🧾 PHIẾU MUA HÀNG\n" +
          "Khách hàng: {{name}}\n" +
          "SĐT: {{phone}}\n" +
          "Địa chỉ: {{address}}\n" +
          "Sản phẩm: {{product}}\n" +
          "Size: {{size}}\n" +
          "Màu: {{color}}\n\n" +
          "🎁 Chính sách: Bảo hành 12 tháng, đổi hàng trong 7 ngày nếu chưa qua sử dụng.\n" +
          "🌐 Website: taraco.vn",
      },
      next: "confirm_order",
    },

    confirm_order: {
      type: "button",
      payload: {
        text: "📦 Bạn vui lòng kiểm tra lại thông tin. Nếu đúng, bấm 'Xác nhận'. Nếu sai, bấm 'Nhập lại'.",
        buttons: [
          { title: "✅ Xác nhận", next: "thank_you" },
          { title: "🔄 Nhập lại", next: "ask_name" },
        ],
      },
    },

    thank_you: {
      type: "text",
      payload: {
        text: "🙏 Cảm ơn bạn đã đặt hàng tại Taraco! Chúng tôi sẽ liên hệ xác nhận và giao hàng sớm nhất.",
      },
      next: "greeting",
    },
  },
};

module.exports = sample;
