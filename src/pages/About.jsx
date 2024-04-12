import React, { useState } from "react";

const API_URL = "http://localhost:4000";

const AboutPage = () => {
  const [about, setAbout] = useState("");

  return (
    <div>
      <img src="unnamed.png" alt="Ricky" />
      <button type="button">
        <a href="https://github.com/Rickangelodan31"></a>
      </button>
    </div>
  );
};

export default AboutPage;
