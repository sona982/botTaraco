# BotForge Messenger Chatbot - Hướng dẫn viết flow JSON

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

-   `text`: Nội dung gửi, có thể dùng biến `{{variable}}`.
-   `quick_replies`: Danh sách nút trả lời nhanh, mỗi nút có `title` và `next` hoặc `payload`.

### 2. `button`

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

-   `buttons`: Danh sách nút, mỗi nút có `title` và `next` hoặc `payload`.

### 3. `image`, `video`, `audio`

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
        buttons: [ { title: "Chọn", payload: "chon1", type: "postback" } ]
      },
      // ...
    ]
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

```js
{
  type: "input",
  payload: {
    question: "Nhập tên:",
    variable: "name",
    validate: "^[a-zA-Z\s]{2,}$",
    error: "Tên không hợp lệ!"
  },
  next: "blockSau"
}
```

-   `question`: Câu hỏi gửi cho user.
-   `variable`: Tên biến lưu vào context.
-   `validate`: Regex kiểm tra dữ liệu nhập vào.
-   `error`: Thông báo khi nhập sai.

### 8. `set_variable`

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

-   Mỗi block phải có `type` và `payload`.
-   `next` là tên block tiếp theo, nếu không có thì kết thúc flow.
-   Có thể thêm block mới tùy ý, miễn là đặt tên duy nhất.

---

## 📋 Cấu trúc Node Tóm Tắt

### Cấu trúc cơ bản:

```js
{
  type: "text|button|image|video|audio|generic|list|media|input|set_variable",
  payload: { /* dữ liệu */ },
  next: "block_tiep_theo" // tùy chọn
}
```

### Các loại Node chính:

| Loại                | Mô tả                | Ví dụ                                                                |
| ------------------- | -------------------- | -------------------------------------------------------------------- |
| `text`              | Gửi tin nhắn văn bản | `{ type: "text", payload: { text: "Xin chào!" } }`                   |
| `button`            | Template với nút bấm | `{ type: "button", payload: { text: "Chọn:", buttons: [...] } }`     |
| `image/video/audio` | Gửi media            | `{ type: "image", payload: { url: "..." } }`                         |
| `input`             | Hỏi thông tin user   | `{ type: "input", payload: { question: "Tên?", variable: "name" } }` |
| `set_variable`      | Gán giá trị biến     | `{ type: "set_variable", payload: { variable: "x", value: "y" } }`   |

### Rẽ nhánh:

```js
{
  // ... node config
  conditions: {
    "A": "block_A",
    "B": "block_B"
  }
}
```

### Biến context:

-   Dùng `{{variable}}` trong text để chèn giá trị đã lưu

---

Nếu có thắc mắc, hãy xem file `sample.js` để tham khảo thêm ví dụ thực tế.
