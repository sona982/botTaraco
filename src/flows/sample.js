export const deepFlow = {
    "id": "batdau",
    "type": "text",
    "payload": {
        "text": "👞 Chào bạn đến với cửa hàng giày da TARACO!"
    },
    "condition": {
        "type": "value_match",
        "branches": [
            {
                "value": "hi",
                "next": [
                    {
                        "id": "intro_menu",
                        "type": "text",
                        "payload": {
                            "text": "Hôm nay bạn quan tâm đến loại giày nào ạ?"
                        },
                        "next": {
                            "id": "main_menu",
                            "type": "quick_replies",
                            "payload": {
                                "text": "🛍️ Vui lòng chọn danh mục sản phẩm:",
                                "replies": [
                                    {
                                        "title": "👞 Giày Tây",
                                        "payload": "GIAY_TAY"
                                    },
                                    {
                                        "title": "🥿 Giày Mọi",
                                        "payload": "GIAY_MOI"
                                    },
                                    {
                                        "title": "👟 Giày Sapo",
                                        "payload": "GIAY_SAPO"
                                    }
                                ]
                            },
                            "condition": {
                                "type": "value_match",
                                "branches": [
                                    {
                                        "value": "GIAY_TAY",
                                        "next": {
                                            "id": "show_giay_tay",
                                            "type": "generic_template",
                                            "payload": {
                                                "elements": [
                                                    {
                                                        "title": "Giày Tây 1001",
                                                        "subtitle": "Giá: 950,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1001.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1001"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1002",
                                                        "subtitle": "Giá: 1,000,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1002.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1002"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1003",
                                                        "subtitle": "Giá: 1,050,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1003.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1003"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1004",
                                                        "subtitle": "Giá: 1,100,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1004.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1004"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1005",
                                                        "subtitle": "Giá: 1,150,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1005.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1005"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1006",
                                                        "subtitle": "Giá: 1,200,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1006.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1006"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1007",
                                                        "subtitle": "Giá: 1,250,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1007.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1007"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1008",
                                                        "subtitle": "Giá: 1,300,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1008.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1008"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1009",
                                                        "subtitle": "Giá: 1,350,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1009.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1009"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Tây 1010",
                                                        "subtitle": "Giá: 1,400,000đ",
                                                        "image_url": "https://taraco.vn/images/GT1010.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GT1010"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "value": "GIAY_SAPO",
                                        "next": {
                                            "id": "show_giay_sapo",
                                            "type": "generic_template",
                                            "payload": {
                                                "elements": [
                                                    {
                                                        "title": "Giày Sapo 1013",
                                                        "subtitle": "Giá: 890,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1013.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1013"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1014",
                                                        "subtitle": "Giá: 940,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1014.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1014"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1015",
                                                        "subtitle": "Giá: 990,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1015.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1015"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1016",
                                                        "subtitle": "Giá: 1,040,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1016.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1016"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1017",
                                                        "subtitle": "Giá: 1,090,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1017.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1017"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1018",
                                                        "subtitle": "Giá: 1,140,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1018.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1018"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1019",
                                                        "subtitle": "Giá: 1,190,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1019.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1019"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1020",
                                                        "subtitle": "Giá: 1,240,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1020.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1020"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1021",
                                                        "subtitle": "Giá: 1,290,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1021.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1021"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1022",
                                                        "subtitle": "Giá: 1,340,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1022.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1022"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1023",
                                                        "subtitle": "Giá: 1,390,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1023.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1023"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Sapo 1024",
                                                        "subtitle": "Giá: 1,440,000đ",
                                                        "image_url": "https://taraco.vn/images/SP1024.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_SP1024"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "value": "GIAY_MOI",
                                        "next": {
                                            "id": "show_giay_moi",
                                            "type": "generic_template",
                                            "payload": {
                                                "elements": [
                                                    {
                                                        "title": "Giày Mọi 1025",
                                                        "subtitle": "Giá: 790,000đ",
                                                        "image_url": "https://taraco.vn/images/GM1025.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GM1025"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Mọi 1026",
                                                        "subtitle": "Giá: 840,000đ",
                                                        "image_url": "https://taraco.vn/images/GM1026.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GM1026"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Mọi 1027",
                                                        "subtitle": "Giá: 890,000đ",
                                                        "image_url": "https://taraco.vn/images/GM1027.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GM1027"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Mọi 1028",
                                                        "subtitle": "Giá: 940,000đ",
                                                        "image_url": "https://taraco.vn/images/GM1028.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GM1028"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Mọi 1029",
                                                        "subtitle": "Giá: 990,000đ",
                                                        "image_url": "https://taraco.vn/images/GM1029.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GM1029"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "title": "Giày Mọi 1030",
                                                        "subtitle": "Giá: 1,040,000đ",
                                                        "image_url": "https://taraco.vn/images/GM1030.jpg",
                                                        "buttons": [
                                                            {
                                                                "type": "postback",
                                                                "title": "Chọn mua",
                                                                "payload": "MUA_GM1030"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            },
                            "default": {
                                "id": "unknown_main_menu",
                                "type": "text",
                                "payload": {
                                    "text": "❓ Mình không hiểu lựa chọn của bạn. Vui lòng chọn lại từ menu."
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    "default": {
        "id": "unknown_greeting",
        "type": "text",
        "payload": {
            "text": "🤖 Bạn vui lòng gõ 'hi' để bắt đầu nhé!"
        }
    }
}