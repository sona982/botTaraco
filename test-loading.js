// Test file để demo chức năng typing indicator tự động
const {
  sendTextMessage,
  sendQuickReplies,
  sendButtonTemplate,
  sendImageMessage,
  sendGenericTemplate,
} = require("./src/services/facebookService");

// Thay thế bằng sender ID thực tế của bạn
const TEST_SENDER_ID = "YOUR_SENDER_ID_HERE";

async function testTypingIndicator() {
  console.log("🧪 Bắt đầu test typing indicator tự động...");

  try {
    // Test 1: Gửi tin nhắn văn bản (typing 800ms)
    console.log("📝 Test 1: Gửi tin nhắn văn bản");
    await sendTextMessage(TEST_SENDER_ID, "Xin chào! Đây là tin nhắn test.");

    // Chờ 2 giây
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Test 2: Gửi quick replies (typing 1000ms)
    console.log("📝 Test 2: Gửi quick replies");
    await sendQuickReplies(TEST_SENDER_ID, "Chọn một tùy chọn:", [
      { title: "Tùy chọn 1", payload: "option1" },
      { title: "Tùy chọn 2", payload: "option2" },
      { title: "Tùy chọn 3", payload: "option3" },
    ]);

    // Chờ 2 giây
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Test 3: Gửi button template (typing 1000ms)
    console.log("📝 Test 3: Gửi button template");
    await sendButtonTemplate(TEST_SENDER_ID, "Bạn muốn làm gì?", [
      { title: "Xem sản phẩm", payload: "view_products" },
      { title: "Liên hệ", payload: "contact" },
    ]);

    // Chờ 2 giây
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Test 4: Gửi generic template (typing 1200ms)
    console.log("📝 Test 4: Gửi generic template");
    await sendGenericTemplate(TEST_SENDER_ID, [
      {
        title: "Sản phẩm test",
        image_url: "https://via.placeholder.com/300x200",
        subtitle: "Mô tả sản phẩm test",
        buttons: [
          {
            type: "postback",
            title: "Xem chi tiết",
            payload: "view_detail",
          },
        ],
      },
    ]);

    // Chờ 2 giây
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Test 5: Gửi ảnh (typing 1000ms)
    console.log("📝 Test 5: Gửi ảnh");
    await sendImageMessage(
      TEST_SENDER_ID,
      "https://via.placeholder.com/400x300"
    );

    console.log("✅ Tất cả test hoàn thành!");
    console.log(
      "💡 Mỗi hàm sẽ tự động hiển thị typing indicator trước khi gửi tin nhắn."
    );
  } catch (error) {
    console.error("❌ Lỗi trong quá trình test:", error);
  }
}

// Chạy test nếu file được gọi trực tiếp
if (require.main === module) {
  if (TEST_SENDER_ID === "YOUR_SENDER_ID_HERE") {
    console.log(
      "⚠️  Vui lòng thay đổi TEST_SENDER_ID trong file này bằng sender ID thực tế!"
    );
    console.log(
      "💡 Bạn có thể lấy sender ID từ webhook khi người dùng gửi tin nhắn."
    );
  } else {
    testTypingIndicator();
  }
}

module.exports = { testTypingIndicator };
