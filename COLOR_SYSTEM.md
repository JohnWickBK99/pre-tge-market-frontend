# Color System

Hệ thống màu được sync từ Figma Design System và config sẵn cho Dark Theme.

## 🎨 Color Variables

Tất cả màu được định nghĩa trong `styles/base.css` bằng CSS Variables và có thể sử dụng trong Tailwind classes.

### Text Colors

| Variable           | Hex       | Tailwind Class        | Usage                           |
| ------------------ | --------- | --------------------- | ------------------------------- |
| `--text-primary`   | `#fefefc` | `text-text-primary`   | Text chính, nội dung quan trọng |
| `--text-secondary` | `#898b8d` | `text-text-secondary` | Text phụ, mô tả                 |
| `--text-tertiary`  | `#7e8180` | `text-text-tertiary`  | Text tối thiểu, placeholder     |
| `--text-inverse`   | `#000000` | `text-text-inverse`   | Text trên nền sáng              |
| `--text-focus`     | `#e88144` | `text-text-focus`     | Text highlight, CTA             |

### Layer/Background Colors

| Variable        | Hex       | Tailwind Class   | Usage                  |
| --------------- | --------- | ---------------- | ---------------------- |
| `--layer-1`     | `#000000` | `bg-layer-1`     | Background chính (đen) |
| `--layer-2`     | `#141414` | `bg-layer-2`     | Card, container nổi    |
| `--layer-focus` | `#fefefc` | `bg-layer-focus` | Background highlight   |

### Icon Colors

| Variable           | Hex       | Tailwind Class        | Usage              |
| ------------------ | --------- | --------------------- | ------------------ |
| `--icon-primary`   | `#fefefc` | `text-icon-primary`   | Icon chính         |
| `--icon-secondary` | `#898b8d` | `text-icon-secondary` | Icon phụ           |
| `--icon-tertiary`  | `#7e8180` | `text-icon-tertiary`  | Icon disabled      |
| `--icon-inverse`   | `#000000` | `text-icon-inverse`   | Icon trên nền sáng |

### Border Colors

| Variable           | Hex       | Tailwind Class          | Usage           |
| ------------------ | --------- | ----------------------- | --------------- |
| `--border-default` | `#27292b` | `border-border-default` | Border mặc định |

### Button Colors

| Variable           | Hex       | Tailwind Class      | Usage                 |
| ------------------ | --------- | ------------------- | --------------------- |
| `--button-primary` | `#e88144` | `bg-button-primary` | Button chính (orange) |

### Semantic Colors

| Variable    | Hex       | Tailwind Class               | Usage         |
| ----------- | --------- | ---------------------------- | ------------- |
| `--success` | `#63eb97` | `bg-success`, `text-success` | Success state |
| `--error`   | `#ef6663` | `bg-error`, `text-error`     | Error state   |
| `--warning` | `#f4b250` | `bg-warning`, `text-warning` | Warning state |

## 📝 Cách Sử Dụng

### 1. Sử dụng Tailwind Classes

```tsx
// Text
<h1 className="text-text-primary">Heading</h1>
<p className="text-text-secondary">Description</p>

// Background
<div className="bg-layer-1">Main background</div>
<div className="bg-layer-2">Card container</div>

// Border
<div className="border border-border-default">Container</div>

// Button
<button className="bg-button-primary text-text-primary">
  Click me
</button>

// Semantic
<div className="bg-success text-text-inverse">Success!</div>
<div className="bg-warning text-text-inverse">Warning!</div>
<div className="bg-error text-text-inverse">Error!</div>
```

### 2. Sử dụng CSS Variables trực tiếp

```css
.custom-element {
  background: var(--layer-2);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
}

.custom-button {
  background: var(--button-primary);
  color: var(--text-primary);
}
```

### 3. Sử dụng trong styled-components hoặc inline styles

```tsx
<div
  style={{
    background: 'var(--layer-2)',
    color: 'var(--text-primary)',
  }}
>
  Content
</div>
```

## 🎯 Best Practices

### DO ✅

- **Luôn dùng color variables thay vì hardcode màu**

  ```tsx
  // ✅ Good
  <div className="bg-layer-2 text-text-primary" />

  // ❌ Bad
  <div className="bg-[#141414] text-[#fefefc]" />
  ```

- **Dùng semantic colors cho trạng thái**

  ```tsx
  // ✅ Good
  <div className="bg-success">Success message</div>
  <div className="bg-error">Error message</div>
  ```

- **Dùng đúng level của text colors**
  ```tsx
  // ✅ Good
  <h1 className="text-text-primary">Title</h1>
  <p className="text-text-secondary">Description</p>
  <span className="text-text-tertiary">Metadata</span>
  ```

### DON'T ❌

- **Không hardcode màu**
- **Không dùng Tailwind colors mặc định** (blue-500, red-600, etc.) trừ khi cần thiết
- **Không override CSS variables** trong components riêng lẻ

## 🔄 Cập Nhật từ Figma

Khi design system trong Figma thay đổi:

1. Export color variables từ Figma
2. Update `styles/base.css`
3. Restart dev server để apply changes

```bash
pnpm dev
```

## 🌓 Theme Management

Hiện tại project được config sẵn **Dark Theme** làm mặc định.

Để thêm Light Theme sau này, update `styles/base.css`:

```css
/* Light theme (tương lai) */
[data-theme='light'] {
  --text-primary: #000000;
  --text-secondary: #666666;
  --layer-1: #ffffff;
  --layer-2: #f5f5f5;
  /* ... */
}
```

## 🎨 Demo

Xem toàn bộ color palette và examples tại:

```
http://localhost:3000
```

Chọn tab **"Colors"** để xem demo.
