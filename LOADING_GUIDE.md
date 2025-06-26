# Hướng dẫn sử dụng Typing Indicator tự động cho Bot

## 🎯 Tổng quan

Chức năng typing indicator đã được tích hợp tự động vào tất cả các hàm gửi tin nhắn. Khi bạn gọi bất kỳ hàm service nào, bot sẽ tự động hiển thị trạng thái "đang nhập" trước khi gửi tin nhắn.

## 🚀 Cách hoạt động tự động

### Tất cả các hàm đã có typing indicator:

- `sendTextMessage()` - Typing 800ms
- `sendQuickReplies()` - Typing 1000ms
- `sendButtonTemplate()` - Typing 1000ms
- `sendImageMessage()` - Typing 1000ms
- `sendVideoMessage()` - Typing 1200ms
- `sendAudioMessage()` - Typing 1000ms
- `sendGenericTemplate()` - Typing 1200ms
- `sendListTemplate()` - Typing 1200ms
- `sendMediaTemplate()` - Typing 1200ms

### Ví dụ sử dụng:

```javascript
const {
  sendTextMessage,
  sendQuickReplies,
} = require("./src/services/facebookService");

// Tự động hiển thị typing 800ms trước khi gửi
await sendTextMessage(senderId, "Xin chào!");

// Tự động hiển thị typing 1000ms trước khi gửi
await sendQuickReplies(senderId, "Chọn tùy chọn:", [
  { title: "Tùy chọn 1", payload: "option1" },
  { title: "Tùy chọn 2", payload: "option2" },
]);
```

## 📝 Quy trình tự động

Khi gọi bất kỳ hàm gửi tin nhắn nào, bot sẽ tự động:

1. ✅ **Đánh dấu tin nhắn đã xem** (`mark_seen`)
2. ⌨️ **Hiển thị "đang nhập"** (`typing_on`)
3. ⏱️ **Chờ** trong khoảng thời gian đã cấu hình
4. 🛑 **Ẩn "đang nhập"** (`typing_off`)
5. 💬 **Gửi tin nhắn thực tế**

## 🧪 Test chức năng

### Chạy file test:

```bash
cd bot
node test-loading.js
```

### Lưu ý:

- Thay đổi `TEST_SENDER_ID` trong file `test-loading.js` bằng sender ID thực tế
- File test sẽ demo tất cả các loại tin nhắn với typing indicator

## ⚙️ Thời gian typing mặc định

| Loại tin nhắn    | Thời gian typing |
| ---------------- | ---------------- |
| Text message     | 800ms            |
| Quick replies    | 1000ms           |
| Button template  | 1000ms           |
| Image message    | 1000ms           |
| Video message    | 1200ms           |
| Audio message    | 1000ms           |
| Generic template | 1200ms           |
| List template    | 1200ms           |
| Media template   | 1200ms           |

## 🔧 Troubleshooting

### Lỗi thường gặp:

1. **"Lỗi gửi tin"**: Kiểm tra `PAGE_ACCESS_TOKEN` trong file `.env`
2. **Typing không hiển thị**: Đảm bảo sender ID đúng
3. **Typing quá lâu**: Có thể điều chỉnh thời gian trong hàm `showTyping()`

### Debug:

```javascript
// Thêm log để debug
console.log("🔄 Bắt đầu gửi tin nhắn...");
await sendTextMessage(senderId, "Test message");
console.log("✅ Hoàn thành gửi tin nhắn");
```

## 📱 Hiệu ứng trên Messenger

Người dùng sẽ thấy:

1. ✅ Tin nhắn được đánh dấu "đã xem"
2. ⌨️ Hiển thị "đang nhập..."
3. ⏱️ Chờ trong khoảng thời gian đã cấu hình
4. 🛑 Ẩn trạng thái "đang nhập"
5. 💬 Bot gửi tin nhắn thực tế

## 🎨 Tùy chỉnh nâng cao

### Nếu muốn thay đổi thời gian typing:

Bạn có thể sửa trực tiếp trong file `facebookService.js`:

```javascript
// Trong hàm showTyping, thay đổi duration mặc định
async function showTyping(recipientId, duration = 1000) {
  // ... code hiện tại
}

// Hoặc thay đổi thời gian cho từng loại tin nhắn
async function sendTextMessage(recipientId, text) {
  await showTyping(recipientId, 500); // Giảm xuống 500ms
  // ... code gửi tin nhắn
}
```

### Tắt typing indicator cho một số trường hợp:

```javascript
// Nếu cần gửi tin nhắn nhanh không cần typing
async function sendQuickResponse(recipientId, text) {
  // Gọi trực tiếp sendMessage thay vì sendTextMessage
  return sendMessage({
    recipient: { id: recipientId },
    message: { text },
  });
}
```

## 💡 Lưu ý quan trọng

- **Không cần import thêm**: Tất cả đã tích hợp sẵn
- **Tự động hoạt động**: Chỉ cần gọi hàm service bình thường
- **Tối ưu UX**: Thời gian typing được điều chỉnh phù hợp với từng loại tin nhắn
- **Không ảnh hưởng logic**: Typing indicator chạy song song, không làm chậm xử lý
