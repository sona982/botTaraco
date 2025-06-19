export const deepFlow = {
  id: "batdau",
  type: "button_template",
  payload: {
    text: "👞 Chào mừng bạn đến với TARACO - Giày da cao cấp!",
    buttons: [
      {
        type: "postback",
        title: "🛍️ Xem sản phẩm",
        payload: "XEM_SAN_PHAM"
      },
      {
        type: "postback",
        title: "🏬 Thông tin cửa hàng",
        payload: "THONG_TIN_CUA_HANG"
      },
      {
        type: "postback",
        title: "🛡️ Chính sách bảo hành",
        payload: "CHINH_SACH_BH"
      }
    ]
  },
  condition: {
    type: "value_match",
    branches: [
      {
        value: "THONG_TIN_CUA_HANG",
        next: {
          id: "thong_tin",
          type: "text",
          payload: {
            text: "📍 Địa chỉ: 123 Đường Da Sang, TP.HCM\n🌐 Website: https://taraco.vn\n📞 Hotline: 1900 123 456"
          },
          next: {
            id: "hoi_xem_sp",
            type: "button_template",
            payload: {
              text: "Bạn muốn xem sản phẩm không?",
              buttons: [
                {
                  type: "postback",
                  title: "Xem sản phẩm",
                  payload: "XEM_SAN_PHAM"
                }
              ]
            }
          }
        }
      },
      {
        value: "CHINH_SACH_BH",
        next: {
          id: "bao_hanh",
          type: "text",
          payload: {
            text: "🛡️ Bảo hành 12 tháng với mọi sản phẩm lỗi do nhà sản xuất. Đổi hàng trong 7 ngày nếu chưa qua sử dụng."
          },
          next: {
            id: "hoi_xem_sp2",
            type: "button_template",
            payload: {
              text: "Bạn muốn xem sản phẩm không?",
              buttons: [
                {
                  type: "postback",
                  title: "Xem sản phẩm",
                  payload: "XEM_SAN_PHAM"
                }
              ]
            }
          }
        }
      },
      {
        value: "XEM_SAN_PHAM",
        next: {
          id: "chon_loai_giay",
          type: "quick_replies",
          payload: {
            text: "📦 Vui lòng chọn loại giày:",
            replies: [
              { title: "👞 Giày Tây", payload: "GIAY_TAY" },
              { title: "🥿 Giày Mọi", payload: "GIAY_MOI" },
              { title: "👟 Giày Sapo", payload: "GIAY_SAPO" }
            ]
          },
          condition: {
            type: "value_match",
            branches: [
              ...["TAY", "MOI", "SAPO"].map(loai => {
                const prefix = loai === "TAY" ? "GT100" : loai === "MOI" ? "GM102" : "SP10";
                const count = loai === "TAY" ? 10 : loai === "MOI" ? 6 : 12;
                const start = loai === "TAY" ? 1 : loai === "MOI" ? 5 : 13;
                return {
                  value: `GIAY_${loai}`,
                  next: {
                    id: `show_giay_${loai.toLowerCase()}`,
                    type: "generic_template",
                    payload: {
                      elements: Array.from({ length: count }).map((_, i) => {
                        const index = start + i;
                        const id = `${prefix}${index}`;
                        const name = `Giày ${loai === "TAY" ? "Tây" : loai === "MOI" ? "Mọi" : "Sapo"} ${id}`;
                        const price = (loai === "TAY" ? 1500 : loai === "MOI" ? 1200 : 1300) + i * 50;
                        return {
                          title: name,
                          subtitle: `Giá: ${price}.000đ`,
                          image_url: `https://taraco.vn/images/${id}.jpg`,
                          buttons: [
                            {
                              type: "postback",
                              title: "Chọn mua",
                              payload: `MUA_${id}`
                            }
                          ]
                        };
                      })
                    },
                    condition: {
                      type: "value_match",
                      branches: Array.from({ length: count }).map((_, i) => {
                        const index = start + i;
                        const id = `${prefix}${index}`;
                        const name = `Giày ${loai === "TAY" ? "Tây" : loai === "MOI" ? "Mọi" : "Sapo"} ${id}`;
                        const price = (loai === "TAY" ? 1500 : loai === "MOI" ? 1200 : 1300) + i * 50;
                        return {
                          value: `MUA_${id}`,
                          next: {
                            id: `nhap_thong_tin_${id}`,
                            type: "text",
                            payload: {
                              text: `📋 Vui lòng nhập thông tin theo mẫu:\nHọ tên - SĐT - Địa chỉ`
                            },
                            condition: {
                              type: "regex_match",
                              branches: [
                                {
                                  value: ".* - .* - .*",
                                  next: {
                                    id: `phieu_mua_${id}`,
                                    type: "text",
                                    payload: {
                                      text: `✅ Cảm ơn bạn đã đặt hàng!\n\n📄 Phiếu mua hàng:\nSản phẩm: ${name}\nGiá: ${price}.000đ\n\n🏬 TARACO - Giày da cao cấp\n🌐 https://taraco.vn\n📞 1900 123 456\n🛡️ Bảo hành 12 tháng\n🚛 Giao hàng toàn quốc`
                                    }
                                  }
                                }
                              ],
                              default: {
                                id: `sai_dinh_dang_${id}`,
                                type: "text",
                                payload: {
                                  text: "❗ Vui lòng nhập đúng định dạng: Họ tên - SĐT - Địa chỉ"
                                }
                              }
                            }
                          }
                        };
                      })
                    }
                  }
                };
              })
            ]
          }
        }
      }
    ],
    default: {
      id: "unknown",
      type: "text",
      payload: {
        text: "🤖 Mình chưa hiểu ý bạn. Hãy chọn một trong các nút nhé."
      }
    }
  }
};