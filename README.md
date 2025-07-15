# 🌍 **WorldWise**: Track Your Global Adventures

Ever wondered where you've been on your travels? WorldWise is your personal world map, designed to help you meticulously track every city you've explored. Pin new locations, record your experiences, and visually relive your journeys! This application showcases modern React development practices, including efficient state management, routing, and custom hooks, all wrapped in a responsive and engaging user interface.

## 🚀 Installation

To get WorldWise up and running on your local machine, follow these simple steps:

### 1. 📂 Clone the Repository

First, grab a copy of the project files by cloning the repository:

```bash
git clone https://github.com/DreadTsx/wolrd-wise.git
cd wolrd-wise
```

### 2. 📦 Install Dependencies

Once you're in the project directory, install all the necessary packages:

```bash
npm install
# or
yarn install
```

### 3. 💾 Start the JSON Server

This project uses `json-server` to simulate a backend API for managing city data. You'll need to run it in a separate terminal:

```bash
npm run server
# The server will run on http://localhost:9000
```

### 4. 🌐 Start the Development Server

Finally, launch the React development server:

```bash
npm run dev
# The app will typically open in your browser at http://localhost:5173 (or similar)
```

## 🗺️ Usage

Once both the JSON server and the development server are running, open your web browser and navigate to `http://localhost:5173` (or the address provided by Vite).

1.  **Login**: On the homepage, click "Login". Use the pre-filled credentials:
    - **Email**: `dread@example.com`
    - **Password**: `qwerty`
2.  **Explore the Map**: Once logged in, you'll be taken to the main application layout. You'll see an interactive map.
3.  **Add a City**: Click anywhere on the map to mark a new city you've visited. A form will appear on the sidebar, pre-filled with the location's data fetched from a reverse geocoding API. Fill in your notes and the date of your visit, then click "Add".
4.  **View Cities**: All your added cities will appear in the "Cities" list on the sidebar. Click on any city to see its details, including notes and the date of your visit.
5.  **View Countries**: Switch to the "Countries" tab to see a list of all countries you've visited, grouped together.
6.  **Delete a City**: To remove a city from your list, simply click the "×" button next to its entry in the "Cities" list.
7.  **Logout**: To end your session, click the "Logout" button at the top right of the map.

## ✨ Features

- 🌍 **Interactive World Map**: Powered by Leaflet, allowing users to pinpoint locations and visualize their travel routes.
- 📍 **City Tracking**: Effortlessly add new cities to your travel log by clicking on the map, with automatic fetching of city and country details.
- 📝 **Personalized Notes & Dates**: Record specific notes and dates for each visited city to cherish your memories.
- 📊 **City & Country Lists**: View your visited cities in a detailed list or see a summarized list of all countries you've explored.
- 🔒 **User Authentication**: A simplified authentication flow to protect user-specific travel data.
- 🌐 **Responsive Design**: A smooth and adaptable user experience across various device sizes, from desktops to mobile phones.
- 🎣 **Custom React Hooks**: Leverages `useGeolocation` for precise location tracking and `useUrlPosition` for managing map coordinates via URL parameters, demonstrating reusable logic.
- ⚛️ **Context API for State Management**: Efficiently manages global application state for cities data and authentication status, ensuring a clean and scalable architecture.
- ⚡ **Lazy Loading**: Improves initial load times by dynamically importing page components using `React.lazy()` and `Suspense`.
- 🔌 **Mock Backend**: Utilizes `json-server` for a lightweight, local API to persist city data, simulating real-world data interactions.

## 🛠️ Technologies Used

| Technology           | Description                                                              | Link                                                   |
| :------------------- | :----------------------------------------------------------------------- | :----------------------------------------------------- |
| **React**            | A JavaScript library for building user interfaces.                       | [React Official Site](https://react.dev/)              |
| **React Router DOM** | Declarative routing for React.                                           | [React Router DOM](https://reactrouter.com/en/main)    |
| **Leaflet**          | An open-source JavaScript library for mobile-friendly interactive maps.  | [Leaflet](https://leafletjs.com/)                      |
| **React Leaflet**    | React components for Leaflet maps.                                       | [React Leaflet](https://react-leaflet.js.org/)         |
| **React Datepicker** | A flexible date picker component for React.                              | [React Datepicker](https://reactdatepicker.com/)       |
| **Vite**             | A fast build tool that provides a lightning-fast development experience. | [Vite Official Site](https://vitejs.dev/)              |
| **ESLint**           | Pluggable JavaScript linter.                                             | [ESLint Official Site](https://eslint.org/)            |
| **JSON Server**      | A full fake REST API in less than a minute.                              | [JSON Server](https://github.com/typicode/json-server) |
