# WeatherFun 🌤️

**WeatherFun** is a fun and interactive weather forecast application built using **Next.js** and **Tailwind CSS**. It fetches real-time weather data from **VisualCrossing API** and presents it with animations that react to the current weather. Users can save their favorite cities for quick access.

## 🎯 Features
- **🌎 Weather Search:** Find the weather for any city worldwide.
- **🎭 Animated Mascots:** Fun mascots react to weather conditions (sunny, rainy, snowy, etc.).
- **⭐ Favorite Cities:** Save cities for quick access.
- **📱 Responsive Design:** Fully optimized for mobile, tablet, and desktop.

---

## 🛠️ Technologies Used
- **Frontend:**
  - ⚛️ Next.js (React)
  - 🎨 Tailwind CSS
  - 📦 Zustand (State Management)
- **Backend:**
  - 🌍 VisualCrossing API
  - 🛠️ Next.js API Routes
- **Database:**
  - 🔥 Firebase / 🗄️ SQLite
- **Animations:**
  - 🖼️ Lottie / CSS Animations

---

## 📜 Installation Guide

### **1️⃣ Prerequisites**
Ensure you have:
- **[Node.js](https://nodejs.org/)** installed.
- **npm** (comes with Node.js).

### **2️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/weatherfun.git
cd weatherfun
```

3️⃣ Install Dependencies
```bash
npm install
```

4️⃣ Set up visualcrossing API
Sign up on Visual Crossing and get your API key.
Create a .env.local file and add:
```bash
NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_api_key_here
```

5️⃣ Run the Application
```bash
npm run dev
Open: http://localhost:3000
```

📂 Project Structure
plaintext
```bash
/weatherfun
 ├── /pages
 │   ├── index.js          # Main weather page
 │   ├── favorites.js      # Favorite cities page
 │
 ├── /api
 │   ├── weather.js        # Fetch weather data from OpenWeatherMap
 │
 ├── /components
 │   ├── WeatherCard.js    # Displays weather data
 │   ├── Mascot.js         # Displays animated mascots
 │
 ├── /styles
 │   ├── globals.css       # Global styles
 │   ├── tailwind.config.js
 │
 ├── /utils
 │   ├── weatherUtils.js   # Helper functions for weather
 │
 ├── .env.local            # Environment variables
 ├── package.json          # Project dependencies
 ├── README.md             # Project documentation
```

🚀 Contributing
Want to contribute? Follow these steps:
```bash
Fork this repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit (git commit -m 'Added new feature').
Push to your branch (git push origin feature-name).
Open a pull request on GitHub.
```

📝 License
This project is licensed under the MIT License.

