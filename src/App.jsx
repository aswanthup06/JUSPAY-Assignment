import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function App() {
  // (Optional) If later you want page navigation
  const [page] = useState("dashboard");

  return (
    <>
      {page === "dashboard" && <Dashboard />}
      {/* You could add other pages like this:
        {page === "ecommerce" && <Ecommerce />}
        {page === "projects" && <Projects />}
      */}
    </>
  );
}

export default App;


