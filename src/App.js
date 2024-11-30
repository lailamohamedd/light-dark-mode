import { useContext } from "react";
import Mode from "./components/Mode/Mode";
import { ThemeModeContext } from "./utilis/ThemeMode";
import Card from "./components/Card";

function App() {
  const {darkMode, setDarkMode} = useContext(ThemeModeContext);
  return (
    <div className={`theme--mode ${darkMode ? "dark": ""}`}>
      <Mode setDarkMode={setDarkMode} darkMode={darkMode} />
      <Card />
    </div>
  );
}

export default App;
