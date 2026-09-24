# 🏋️ FitLog — Fitness & Workout Tracker

FitLog is a modern fitness and workout tracking web application built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**.

Users can explore different workouts, view workout details, create a personal workout plan, and save workouts for later.

## 🚀 Live Demo

🌐 [Live Demo](https://fitlog-gilt.vercel.app/)

## 📸 Features

* 🏋️ Browse different workout exercises
* 🔎 View detailed workout information
* 📋 Add workouts to **Today's Plan**
* 🔖 Save workouts for later
* 💾 Store plans using browser `localStorage`
* ⭐ Display workout ratings
* 🔥 Show estimated calories burned
* ⏱️ Display workout duration
* 💪 Show targeted muscle groups
* 📱 Fully responsive design
* ✨ Skeleton loading animation
* 🌙 Modern dark UI
* ⚡ Fast and optimized Next.js application

## 🛠️ Technologies Used

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI

### Libraries

* React Icons
* Next/Image
* Next/Link

### Data Storage

* Browser `localStorage`

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── Components/
│   │   ├── HomeFitLogCart.tsx
│   │   ├── HomeFitLogCartSkeleton.tsx
│   │   ├── TodayPlanCart.tsx
│   │   └── SavedCart.tsx
│   │
│   ├── Context/
│   │   └── FitLogProvider.tsx
│   │
│   ├── FitLogType/
│   │   └── FitLogType.ts
│   │
│   └── Workouts/
│       └── [id]/
│
├── public/
│   └── images/
│
└── ...
```

## 📦 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd fitlog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 🧩 Main Features

### Today's Plan

Users can add workouts to their daily workout plan.

The selected workouts are stored in:

```text
localStorage
```

using the key:

```text
todayPlan
```

### Save for Later

Users can save workouts that they want to complete later.

Saved workouts are stored using:

```text
saveLater
```

in browser `localStorage`.

### Workout Details

Each workout has its own dynamic route:

```text
/Workouts/[id]
```

Example:

```text
/Workouts/5
```

## 💾 Local Storage

FitLog uses browser `localStorage` to persist user data.

Example:

```ts
localStorage.setItem(
  "todayPlan",
  JSON.stringify(addPlan)
);

localStorage.setItem(
  "saveLater",
  JSON.stringify(saveLater)
);
```

The application loads the stored data when the user returns to the website.

## 🎨 UI

The application uses a modern dark-themed interface with:

* Responsive cards
* Workout badges
* Hover animations
* Loading skeletons
* Responsive grid layouts
* Interactive buttons
* Workout statistics

## 📱 Responsive Design

FitLog is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

Example responsive grid:

```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Workout Cards */}
</div>
```

## 🧠 What I Learned

While building this project, I practiced:

* Next.js App Router
* Dynamic routes
* React Context API
* TypeScript interfaces
* State management
* `useState`
* `useEffect`
* Client Components
* Browser `localStorage`
* Loading states
* Skeleton UI
* Responsive design
* Tailwind CSS
* DaisyUI
* Reusable React components

## 🔮 Future Improvements

* 🔐 User authentication
* ☁️ Cloud database
* 📊 Workout progress tracking
* 📈 Fitness statistics dashboard
* 🔔 Workout reminders
* ❤️ Favorite workouts
* 🔍 Advanced workout filtering
* 🌓 Light/Dark theme switcher

## 👨‍💻 Author

**Shawon Ahmmed**

Full-Stack Web Developer from Bangladesh

### Connect With Me

* GitHub: `https://github.com/saun55`
* LinkedIn: `https://linkedin.com/in/shawonahmmed`

---

⭐ If you find this project useful, consider giving the repository a star!
