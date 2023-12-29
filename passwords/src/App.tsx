import React from "react";
import styles from "./app.module.scss";
import Home from "./components/home";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        AWeber Takehome Exercise: Time for some passwords
      </header>
      <Home />
    </div>
  );
}

export default App;
