#  Notification System with Logging Middleware

## Overview

This project implements a **Priority Notification System** with a **custom logging middleware**, built as part of a frontend/backend evaluation.

The system fetches notifications from an API, processes them based on **priority and recency**, and displays them through a responsive React UI.

---

## 🧠 Features

### 🔹 Logging Middleware

* Custom logging function (`logger.js`)
* Sends logs to external API
* Includes:

  * stack (frontend/backend)
  * level (info/error)
  * package/component
  * message

---

### 🔹 Backend Logic (Stage 1)

* Fetch notifications from API
* Compute priority using:

  * Type-based weights
  * Timestamp (recency)
* Returns **Top N important notifications**

---

### 🔹 Frontend (React)

* Built using **React + Material UI**
* Displays:

  * All Notifications
  * Priority Inbox (Top N)

---

## ⚡ Advanced Features (High Impact)

### ✅ Filter Notifications

* Filter by:

  * Placement
  * Result
  * Event

### ✅ Dynamic Top N Selector

* Choose:

  * Top 10 / 15 / 20

### ✅ Highlight Important Notifications

* Placement notifications highlighted for visibility

---

## 📂 Project Structure

```
RA2311003050233_SRMIST_Afford/
│
├── logging middleware/
│   ├── logger.js
│   └── test.js
│
├── notification_app_be/
│   └── stage1.js
│
├── notification_app_fe/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
│
└── notification_system_design.md
```

---

## ⚙️ Setup Instructions

### 🔹 Backend

```bash
cd notification_app_be
node stage1.js
```

---

### 🔹 Frontend

```bash
cd notification_app_fe
npm install
npm start
```

👉 Open:

```
http://localhost:3000
```

---

## 🔑 API Configuration

Update token in:

```
src/api/notifications.js
```

```js
const TOKEN = "YOUR_TOKEN_HERE";
```

---

## 🧮 Priority Algorithm

Each notification is ranked using:

```
score = weight(Type) * 10^10 + timestamp
```

### Weights:

* Placement → 3
* Result → 2
* Event → 1

---

## 📊 Output

* All notifications list
* Top priority notifications sorted dynamically
* UI with filters and highlights

---

## 🧾 Design Document

Detailed explanation available in:

```
notification_system_design.md
```

Includes:

* Problem statement
* Approach
* Algorithm
* Complexity analysis

---

## 🏁 Conclusion

This system efficiently:

* Filters large notification data
* Prioritizes important updates
* Enhances user experience with smart UI

---

## 👨‍💻 Author

**Ayush Thakur**

---

## ⭐ Notes

* Logging middleware is integrated from the first function
* No hardcoded values except token (configurable)
* Clean modular structure followed

---
