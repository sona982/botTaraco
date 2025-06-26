require("dotenv").config();

const sample = {
  blocks: {
    greeting: {
      type: "text",
      payload: {
        text: "👋 Chào mừng {{name}}! Nếu bạn muốn gặp trợ lý ảo của Taraco, vui lòng gõ (hi) hoặc liên hệ qua taraco.vn để được đội ngũ TARACO chăm sóc 1 cách ân cần nhất, xin cảm ơn quý khách!",
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

    Hi: {
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
        text: "Vui lòng chọn loại giày mà {{name}} muốn xem:",
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

    // Giày Tây(gt)
    show_giay_tay: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Tây GT1001",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1001.jpg`,
            subtitle: "Thiết kế sang trọng: Với đường may tinh tế, giày tạo nên vẻ ngoài lịch lãm, phù hợp cho mọi dịp. Chất liệu da bền bỉ: Được làm từ chất da thật, giày không chỉ đẹp mà còn rất thoải mái và thoáng khí. Đế chống trơn trượt: An toàn hơn khi di chuyển trên mọi bề mặt, giúp bạn tự tin hơn trong các buổi họp hay tiệc tùng.",
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
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1002.jpg`,
            subtitle: "Chất liệu cao cấp: Da Nappa mềm mại, bền bỉ. Thiết kế êm ái: Đế chống trượt, tạo cảm giác thoải mái tối ưu. Công dụng đa dạng: Lựa chọn hoàn hảo cho công sở, tiệc cưới và các sự kiện trang trọng.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1002",
                payload: "chon_GT1002",
              },
            ],
          },
          {
            title: "Giày Tây GT1004",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1004.jpg`,
            subtitle: "Chất liệu da cao cấp: Đảm bảo độ bền và vẻ đẹp lâu dài. Thiết kế lịch lãm: Thích hợp cho mọi dịp từ công sở đến dự tiệc. Tôn dáng sang trọng: Giúp phái mạnh tự tin trong mọi hoàn cảnh. Sự thoải mái tối đa: Êm ái khi sử dụng, thích hợp cho việc đi lại cả ngày dài.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1004",
                payload: "chon_GT1004",
              },
            ],
          },
          {
            title: "Giày Derby Mũi Nhọn TARACO GT-1005",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1005.jpg`,
            subtitle: "Chất Liệu Cao Cấp: Được làm từ da cao cấp, đảm bảo độ bền và vẻ đẹp sang trọng. Thiết Kế Thời Trang: Phù hợp với nhiều trang phục công sở và dự tiệc, giúp bạn luôn tự tin. Công Nghệ Chống Trơn: Đảm bảo an toàn khi di chuyển trên mọi địa hình. Sự Êm Ái: Thiết kế êm ái giúp bạn thoải mái suốt cả ngày dài.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1005",
                payload: "chon_GT1005",
              },
            ],
          },
          {
            title: "Giày Tây Lười Nam TARACO GT-1006",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1006.jpg`,
            subtitle: "Chất liệu cao cấp: Da bò thật sang trọng. Mũi giày tinh tế: Thiết kế mũi nhọn ấn tượng. Đế giày chống trượt: Đế cao su êm ái và chắc chắn. Tôn dáng lịch lãm: Giúp bạn tự tin hơn trong từng bước đi.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1006",
                payload: "chon_GT1006",
              },
            ],
          },
          {
            title: "Giày Tây Sỏ Da Bò Dập Vân Cá Sấu TARACO GT-1009",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1009.jpg`,
            subtitle: "Chất liệu cao cấp: Da bò thật với vân cá sấu tinh tế, mang lại vẻ đẹp và độ bền cao. Sự thoải mái: Thiết kế êm ái, thoáng khí giúp bạn dễ chịu khi sử dụng cả ngày dài. An toàn khi di chuyển: Đế giày chống trượt đảm bảo sự an toàn trong mọi hoàn cảnh.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1009",
                payload: "chon_GT1009",
              },
            ],
          },
          {
            title: "Giày Lười Da Nam Taraco GT-1017",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1017.jpg`,
            subtitle: "Màu sắc: Nâu sang trọng. Chất liệu: Da cao cấp. Thiết kế: Lịch lãm, phù hợp cho cả đi làm và đi chơi. Cảm giác thoải mái: Đế êm nhẹ, dễ chịu khi di chuyển. Cách phối đồ: Phong cách đẳng cấp quý ông",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1017",
                payload: "chon_GT1017",
              },
            ],
          },
          {
            title: "Giày Tây TARACO GT-1019",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1019.jpg`,
            subtitle: "Chất liệu cao cấp: Da bò 100% cho độ bền vượt trội. Thiết kế thời trang: Phong cách trẻ trung, phù hợp với các quý ông hiện đại. Cao 4 cm: Đế giày giúp bạn tự tin hơn trong từng bước đi mà vẫn thoải mái.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1019",
                payload: "chon_GT1019",
              },
            ],
          },
          {
            title: "Giày tây lười nam TARACO GT-1023",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gt/gt1023.jpg`,
            subtitle: "Chất liệu cao cấp: Da bò chất lượng, bền bỉ và dễ bảo quản. Cao 4cm: Thiết kế độc đáo giúp tăng chiều cao mà vẫn thoải mái. Khoá kim loại chống rỉ: Tạo điểm nhấn cho giày, nâng cao tính thẩm mỹ và độ bền.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GT1023",
                payload: "chon_GT1023",
              },
            ],
          },
        ],
      },
    },

    // Giày Mọi(gm)
    show_giay_moi: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Lười Da Bò TARACO GM-1012",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gm/gm1012.jpg`,
            subtitle: "Chất liệu cao cấp: Da bò tự nhiên mang đến sự bền bỉ và thoải mái. Màu sắc thời thượng: Màu nâu đen sang trọng, dễ dàng phối hợp với nhiều trang phục. Thiết kế cổ điển: Kiểu dáng Penny Loafer phù hợp với phong cách công sở và dạo phố hàng ngày. Bảo đảm an toàn: Đế cao su chống trượt giúp bạn tự tin hơn trong mọi bước đi.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GM1012",
                payload: "chon_GM1012",
              },
            ],
          },
          {
            title: "Giày Lười Da Nam Taraco GM-1014",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gm/gm1014.jpg`,
            subtitle: "Thiết Kế Lịch Lãm: Phong cách sang trọng, đẳng cấp cho mọi sự kiện. Chất Liệu Da Cao Cấp: Đảm bảo độ bền và vẻ đẹp theo thời gian. Êm Ái Cả Ngày: Thoải mái cho cả ngày dài, phù hợp đi làm hoặc đi chơi.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GM1014",
                payload: "chon_GM1014",
              },
            ],
          },
          {
            title: "Giày Lười Da Nam Taraco GM-1016",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gm/gm1016.jpg`,
            subtitle: "Màu sắc: Đen lịch lãm. Chất liệu: Da cao cấp, bền đẹp. Kết cấu: Khóa kim loại sang trọng. Cảm giác: Êm ái, thoải mái cho từng bước chân. Sự kiện sử dụng:Cực kỳ phù hợp khi đi làm hoặc đi chơi.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GM1016",
                payload: "chon_GM1016",
              },
            ],
          },
          {
            title: "Giày lười TARACO GM-2205",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/gm/gm2205.jpg`,
            subtitle: "Chất liệu cao cấp: Da bò thật mang lại độ bền cao. Thiết kế gọn nhẹ: Dễ dàng di chuyển và phù hợp với nhiều trang phục. An toàn khi di chuyển: Chất liệu chống trơn trượt giúp bạn tự tin hơn mỗi bước đi.",
            buttons: [
              {
                type: "postback",
                title: "Chọn GM2205",
                payload: "chon_GM2205",
              },
            ],
          },
        ],
      },
    },

    // Giày Sapo(sp)
    show_giay_sapo: {
      type: "generic",
      payload: {
        elements: [
          {
            title: "Giày Sục Da Bò TARACO SP-1007",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/sapo/sp1007.jpg`,
            subtitle: "Chất liệu da bò thật: Mềm mại, bền bỉ cho cảm giác dễ chịu khi mang. Đường may tinh tế: Tạo nên vẻ ngoài sang trọng và chắc chắn. Đế chống trượt: Đảm bảo an toàn trong từng bước đi.",
            buttons: [
              {
                type: "postback",
                title: "Chọn SP1007",
                payload: "chon_SP1007",
              },
            ],
          },
          {
            title: "Giày Sục TARACO SP-1008",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/sapo/sp1008.jpg`,
            subtitle: "Chất Liệu Cao Cấp: Da bò thật, mang lại độ bền và vẻ đẹp tự nhiên. Đế Cao Su Chống Trượt: Đảm bảo an toàn khi di chuyển trên nhiều bề mặt khác nhau. Thiết Kế Thoáng Khí: Giúp đôi chân luôn khô ráo và thoải mái trong suốt cả ngày dài. Dễ Dàng Kết Hợp: Phù hợp với phong cách lịch lãm trong các hoạt động hàng ngày.",
            buttons: [
              {
                type: "postback",
                title: "Chọn SP1008",
                payload: "chon_SP1008",
              },
            ],
          },
          {
            title: "Giày TARACO SP-1015",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/sapo/sp1015.jpg`,
            subtitle: "Thiết kế thanh lịch: Với kiểu dáng trung tính, giày phù hợp cho nhiều dịp khác nhau. Chất liệu cao cấp: Quai da và lót da mang đến cảm giác thoải mái và bền bỉ khi sử dụng. Tính linh hoạt: Dễ dàng phối hợp với nhiều trang phục khác nhau, từ công sở đến dạo phố.",
            buttons: [
              {
                type: "postback",
                title: "Chọn SP1015",
                payload: "chon_SP1015",
              },
            ],
          },
          {
            title: "Giày TARACO SP-1021",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/sapo/sp1021.jpg`,
            subtitle: "Thiết kế thanh lịch: Sản phẩm mang lại vẻ đẹp tinh tế, phù hợp với nhiều hoàn cảnh. Chất liệu cao cấp: Quai da mềm mại, lót da thoáng khí giúp bạn luôn thoải mái khi di chuyển. Tính năng chống trượt: Đảm bảo an toàn cho bạn trên mọi bề mặt đường đi. Cao 3cm: Tăng chiều cao một cách tự nhiên mà không gây khó chịu cho chân.",
            buttons: [
              {
                type: "postback",
                title: "Chọn SP1021",
                payload: "chon_SP1021",
              },
            ],
          },
          {
            title: "Giày TARACO SP-1022",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/sapo/sp1022.jpg`,
            subtitle: "Chất liệu cao cấp: Quai da và lót da mang lại cảm giác êm ái khi sử dụng. Công nghệ chống rỉ: Khóa hợp kim chống rỉ sét giúp tăng độ bền cho sản phẩm. Thiết kế thông minh: Đế bằng, dễ dàng thay dép và sử dụng hàng ngày.",
            buttons: [
              {
                type: "postback",
                title: "Chọn SP1022",
                payload: "chon_SP1022",
              },
            ],
          },
          {
            title: "Giày Sục TARACO SP-1024",
            image_url: `${process.env.IMAGE_URL}/src/access/imgs/sapo/sp1024.jpg`,
            subtitle: "Với thiết kế đơn giản nhưng không kém phần sang trọng, sản phẩm này sẽ là một lựa chọn hoàn hảo cho những ai yêu thích sự kết hợp giữa phong cách và thoải mái. Sản phẩm được làm từ chất liệu da bò thật, giúp tăng độ bền và màu sắc cho sản phẩm. Chất liệu da bò thật cũng mang lại cảm giác thoải mái và dễ chịu khi sử dụng. Với thiết kế đơn giản, giày sục TARACO SP-1024 dễ dàng phối đồ và phù hợp với nhiều phong cách thời trang khác nhau.",
            buttons: [
              {
                type: "postback",
                title: "Chọn SP1024",
                payload: "chon_SP1024",
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
    chon_GT1004: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1004" },
      next: "ask_name",
    },
    chon_GT1005: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1005" },
      next: "ask_name",
    },
    chon_GT1006: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1006" },
      next: "ask_name",
    },
    chon_GT1009: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1009" },
      next: "ask_name",
    },
    chon_GT1017: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1017" },
      next: "ask_name",
    },
    chon_GT1019: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1019" },
      next: "ask_name",
    },
    chon_GT1023: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Tây GT1023" },
      next: "ask_name",
    },
    chon_GM1012: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Mọi GM1012" },
      next: "ask_name",
    },
    chon_GM1014: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Mọi GM1014" },
      next: "ask_name",
    },
    chon_GM1016: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Mọi GM1016" },
      next: "ask_name",
    },
    chon_GM2205: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Mọi GM2205" },
      next: "ask_name",
    },
    chon_SP1007: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Sapo SP1007" },
      next: "ask_name",
    },
    chon_SP1008: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Sapo SP1008" },
      next: "ask_name",
    },
    chon_SP1015: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Sapo SP1015" },
      next: "ask_name",
    },
    chon_SP1021: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Sapo SP1021" },
      next: "ask_name",
    },
    chon_SP1022: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Sapo SP1022" },
      next: "ask_name",
    },
    chon_SP1024: {
      type: "set_variable",
      payload: { variable: "product", value: "Giày Sapo SP1024" },
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
