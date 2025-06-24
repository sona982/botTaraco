require("dotenv").config();

const sample = {
  blocks: {
    greeting: {
      type: "text",
      payload: {
        text: "👋 Chào mừng bạn! Nếu bạn muốn gặp trợ lý ảo của Taraco, vui lòng gõ (hi)",
      },
    },

    hi: {
      type: "button",
      payload: {
        text: "👋 Chào mừng bạn tôi là trợ lý ảo của Taraco - Cửa hàng giày da cao cấp! Bạn muốn làm gì? (Website: taraco.vn)",
        buttons: [
          { title: "🛍️ Xem sản phẩm", next: "choose_category" },
          { title: "🏬 Thông tin cửa hàng", next: "store_info" },
          { title: "🛡️ Chính sách bảo hành", next: "warranty_info" },
        ],
      },
    },

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

    store_info: {
      type: "text",
      payload: {
        text: "📍 Địa chỉ: 60 ĐƯỜNG SỐ 3, KHU DÂN CƯ T30, XÃ BÌNH HƯNG, HUYỆN BÌNH CHÁNH, TP.HCM\n🌐 Website: https://taraco.vn\n📞 Hotline: 0357 66 3979",
      },
      next: "greeting",
    },

    warranty_info: {
      type: "text",
      payload: {
        text: "🛡️ Bảo hành 12 tháng với mọi sản phẩm lỗi do nhà sản xuất, bảo dưỡng miễn phí, bảo hành keo chỉ trọn đời. Đổi hàng trong 7 ngày nếu chưa qua sử dụng.",
      },
      next: "greeting",
    },

    // Giày Tây
    show_giay_tay: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Tây GT1001",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/giay-da-nam-henry-11.jpg`,
            subtitle: "Giày Tây GT1001 - Da bò Ý, size 39-44. Giá: 1.500.000đ",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1001",
                payload: "chon_GT1001",
              },
            ],
          },
          {
            title: "Giày Tây GT1002",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/giay-da-nam-henry-11.jpg`,
            subtitle: "Giày Tây GT1002 - Da bò Ý, size 39-44. Giá: 1.600.000đ",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1002",
                payload: "chon_GT1002",
              },
            ],
          },
        ],
      },
    },

    // Giày Mọi
    show_giay_moi: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Mọi GM10244",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt1001.png`,
            subtitle: "Giày Mọi GM10244 - Da bò, size 377-44. Giá: 1.200.000đ",
            buttons: [
              {
                type: "postback",
                title: "Chọn GM1025",
                payload: "chon_GM1025",
              },
            ],
          },
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
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/giay-da-nam-henry-11.jpg`,
            subtitle: "Giày Sapo SP1013 - Da bò, size 39-44. Giá: 1.300.000đ",
            buttons: [
              {
                type: "postback",
                title: "Chọn SP1013",
                payload: "chon_SP1013",
              },
            ],
          },
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
        validate: "^\\d{9,11}$",
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
      next: "ask_size",
    },

    // Hỏi size
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

    // Hỏi màu sắc
    ask_color: {
      type: "input",
      payload: {
        question: "🎨 Bạn muốn chọn màu gì? (VD: Đen, Nâu...)",
        variable: "color",
        validate: "^[a-zA-ZÀ-ỹs]{2,}$",
        error: "❌ Màu không hợp lệ, vui lòng nhập lại!",
      },
      next: "show_order_summary",
    },

    // Hiển thị phiếu mua hàng
    show_order_summary: {
      type: "text",
      payload: {
text: "🧾 PHIẾU MUA HÀNG\nKhách hàng: {{name}}\nSĐT: {{phone}}\nĐịa chỉ: {{address}}\nSản phẩm: {{product}}\nSize: {{size}}\nMàu: {{color}}\n\nChính sách bảo hành: 12 tháng, 1 đổi 1 trong 30 ngày nếu lỗi do nhà sản xuất.\nWebsite: taraco.vn",
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
