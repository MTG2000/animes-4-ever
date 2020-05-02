import React from "react";
import Header from "./Views/Shared/Header";
import Footer from "./Views/Shared/Footer";
import AppRouter from "./utils/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
