# Weather Now ☀️🌧️🌤️

A simple and clean weather application built for **Jamie**, an outdoor enthusiast who needs to **quickly check current weather conditions** for any city before heading out.

This application lets the user:
- Search weather by city name
- View temperature and wind speed
- See a visual weather icon (sun, clouds, rain, snow, etc.)
- Enjoy a clean glassmorphism style UI and smooth user experience

---

## 🌍 Live Demo

🔗 **https://weather-now-black-five.vercel.app/**

---

## 🧑‍💼 User Persona

| Field | Details |
|------|---------|
| **Name** | Jamie |
| **Occupation** | Outdoor Enthusiast |
| **Need** | Quickly check current weather for any city |
| **Solution** | A fast and simple web app with one-step search and minimal UI distractions |

Jamie prefers:
- Quick access (no delays)
- Clear temperature visibility
- Simple & friendly UI

This app fulfills those needs.

---

## ✨ Features

- ✅ Instant City Search
- ✅ Live Weather Data (No login required)
- ✅ Weather Icons based on conditions
- ✅ Glassmorphism Interface Design
- ✅ Works on Desktop & Mobile

---

## 🔗 API Used

This app uses **Open-Meteo API** (no API key needed):

- Geocoding (Convert city → coordinates):
  https://geocoding-api.open-meteo.com/v1/search?name=

- Weather Fetch:
  https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true

---

## 🧠 Tech Stack

| Area | Technology |
|------|------------|
| Frontend Framework | React + Vite |
| Styling | Tailwind CSS |
| State Management | React useState |
| Deployment | Vercel |
| Version Control | Git & GitHub |

---

## 🖥️ How to Run Locally

```bash
git clone https://github.com/roshni2302/weather-now
cd weather-now
npm install
npm run dev

