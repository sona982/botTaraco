const sample = {
  blocks: {
    greeting: {
      type: "button",
      payload: {
        text: "👋 Chào bạn! Bạn muốn xem gì?",
        buttons: [
          { title: "Xem giày da", next: "show_shoes" },
          { title: "Xem video & ảnh cửa hàng", next: "show_media" },
        ],
      },
    },

    show_shoes: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày da Classic",
            image_url: "https://i.imgur.com/0y8Ftya.jpeg",
            subtitle: "Phong cách truyền thống, bền đẹp",
            buttons: [
              {
                type: "postback",
                title: "Chọn Classic",
                payload: "choose_classic",
              },
            ],
          },
          {
            title: "Giày da Modern",
            image_url: "https://i.imgur.com/0y8Ftya.jpeg",
            subtitle: "Phong cách hiện đại, trẻ trung",
            buttons: [
              {
                type: "postback",
                title: "Chọn Modern",
                payload: "choose_modern",
              },
            ],
          },
        ],
      },
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
      next: "show_summary",
    },

    show_summary: {
      type: "text",
      payload: {
        text: "✅ Cảm ơn {{name}}! Bạn đã chọn: {{selected_shoe}}\nSố điện thoại: {{phone}}\nChúng tôi sẽ liên hệ bạn sớm nhất.",
      },
      next: "confirm_order",
    },

    confirm_order: {
      type: "button",
      payload: {
        text: "Bạn muốn làm gì tiếp theo?",
        buttons: [
          { title: "Quay lại đầu", next: "greeting" },
          { title: "Kết thúc", next: "end" },
        ],
      },
    },

    end: {
      type: "text",
      payload: {
        text: "🙏 Cảm ơn bạn đã ghé cửa hàng! Hẹn gặp lại.",
      },
    },

    show_media: {
      type: "media",
      payload: {
        media_type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        button: {
          title: "Xem ảnh cửa hàng",
          payload: "show_image",
        },
      },
    },

    show_image: {
      type: "image",
      payload: {
        url: "https://i.imgur.com/0y8Ftya.jpeg",
      },
      next: "greeting",
    },
  },
};

module.exports = sample;
