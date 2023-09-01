import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
