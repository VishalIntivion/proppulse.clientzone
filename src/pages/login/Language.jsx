import React, { useState } from "react";
// import "./LanguageDropdown.css"; // Optional: custom styles

const LanguageDropdown = () => {
  const [selectedLang, setSelectedLang] = useState({
    code: "en",
    label: "English",
    flag: "images/england.png",
  });

  const languages = [
    { code: "en", label: "English", flag: "images/england.png" },
    { code: "fr", label: "French", flag: "images/england.png" },
    { code: "es", label: "Spanish", flag: "images/england.png" },
    { code: "de", label: "German", flag: "images/england.png" },
    { code: "zh", label: "Chinese", flag: "images/england.png" },
  ];

  const handleSelect = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <div className="dropdown language-dropdown">
      <button
        className="btn dropdown-toggle d-flex align-items-center justify-content-end gap-2"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedLang.label}
        <img
          src={selectedLang.flag}
          alt={selectedLang.label}
          className="flag-icon"
        />
      </button>
      <ul
        className="dropdown-menu bg-transparent"
        aria-labelledby="languageDropdown"
      >
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className="dropdown-item d-flex align-items-center justify-content-center gap-2 text-white"
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.flag} alt={lang.code} className="flag-icon" />
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
