# BotForge Messenger Chatbot - Hướng dẫn viết flow JSON

## Giới thiệu

Thư viện này cho phép bạn xây dựng kịch bản chatbot Facebook Messenger bằng cách định nghĩa các block trong file JSON (hoặc JS export object). Mỗi block đại diện cho một bước hội thoại, có thể là gửi tin nhắn, hỏi thông tin, gửi ảnh, video, v.v.

## Cấu trúc file flow (sample.js)

File flow là một object có dạng:

```js
const sample = {
  blocks: {
    blockName: {
      type: "...",
      payload: { ... },
      next: "blockNameKhac", // (tùy chọn)
      conditions: { ... }      // (tùy chọn)
    },
    ...
  }
};
module.exports = sample;
```

## Các loại block hỗ trợ (`type`)

### 1. `text`

Gửi tin nhắn văn bản (có thể kèm quick replies).

```js
{
  type: "text",
  payload: {
    text: "Xin chào {{name}}!",
    quick_replies: [
      { title: "Chọn A", next: "blockA" },
      { title: "Chọn B", next: "blockB" }
    ]
  },
  next: "blockTiepTheo" // (tùy chọn)
}
```

- `text`: Nội dung gửi, có thể dùng biến `{{variable}}`.
- `quick_replies`: Danh sách nút trả lời nhanh, mỗi nút có `title` và `next` hoặc `payload`.

### 2. `button`

Gửi template có nút bấm.

```js
{
  type: "button",
  payload: {
    text: "Bạn muốn làm gì?",
    buttons: [
      { title: "Tiếp tục", next: "blockTiep" },
      { title: "Kết thúc", next: "end" }
    ]
  }
}
```

- `buttons`: Danh sách nút, mỗi nút có `title` và `next` hoặc `payload`.

### 3. `image`, `video`, `audio`

Gửi ảnh, video, hoặc audio.

```js
{
  type: "image",
  payload: { url: "https://..." },
  next: "blockSau"
}
```

### 4. `generic`

Gửi carousel (dạng thẻ ngang, nhiều sản phẩm).

```js
{
  type: "generic",
  payload: {
    elements: [
      {
        title: "Sản phẩm 1",
        image_url: "...",
        subtitle: "Mô tả",
        buttons: [ { title: "Chọn", payload: "chon1" } ]
      },
      // ...
    ]
  }
}
```

### 5. `list`

Gửi danh sách dạng list template.

```js
{
  type: "list",
  payload: {
    elements: [ ... ],
    buttons: [ ... ] // (tùy chọn)
  }
}
```

### 6. `media`

Gửi media template (ảnh hoặc video kèm nút).

```js
{
  type: "media",
  payload: {
    media_type: "image", // hoặc "video"
    url: "...",
    button: { title: "Xem thêm", next: "blockKhac" }
  },
  next: "blockSau"
}
```

### 7. `input`

Hỏi thông tin người dùng, lưu vào biến context.

```js
{
  type: "input",
  payload: {
    question: "Nhập tên:",
    variable: "name",
    validate: "^[a-zA-Z\s]{2,}$", // Regex kiểm tra dữ liệu
    error: "Tên không hợp lệ!"
  },
  next: "blockSau"
}
```

- `question`: Câu hỏi gửi cho user.
- `variable`: Tên biến lưu vào context.
- `validate`: Regex kiểm tra dữ liệu nhập vào.
- `error`: Thông báo khi nhập sai.

### 8. `set_variable`

Gán giá trị cho biến context (không hỏi user).

```js
{
  type: "set_variable",
  payload: {
    variable: "selected_shoe",
    value: "Giày da Classic"
  },
  next: "blockSau"
}
```

### 9. `delay`

Chờ một khoảng thời gian trước khi chuyển block tiếp theo.

```js
{
  type: "delay",
  payload: { time: 2000 }, // ms
  next: "blockSau"
}
```

### 10. `conditions`

Rẽ nhánh theo giá trị user gửi về (dùng cho quick reply, button, hoặc text input).

```js
{
  ...,
  conditions: {
    "A": "blockA",
    "B": "blockB"
  }
}
```

## Biến context

Bạn có thể dùng `{{variable}}` trong text để chèn giá trị user đã nhập hoặc đã lưu trước đó.

## Ví dụ tổng thể

```js
const sample = {
  blocks: {
    greeting: {
      type: "button",
      payload: {
        text: "Chào bạn!",
        buttons: [{ title: "Bắt đầu", next: "ask_name" }],
      },
    },
    ask_name: {
      type: "input",
      payload: {
        question: "Tên bạn là gì?",
        variable: "name",
        validate: "^[a-zA-Zs]{2,}$",
        error: "Tên không hợp lệ!",
      },
      next: "show_summary",
    },
    show_summary: {
      type: "text",
      payload: {
        text: "Xin chào {{name}}!",
      },
    },
  },
};
```

## Lưu ý

- Mỗi block phải có `type` và `payload`.
- `next` là tên block tiếp theo, nếu không có thì kết thúc flow.
- Có thể thêm block mới tùy ý, miễn là đặt tên duy nhất.

---

Nếu có thắc mắc, hãy xem file `sample.js` để tham khảo thêm ví dụ thực tế.
