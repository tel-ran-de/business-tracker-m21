import './App.css';
import Navbar from "./components/Navigation/Navbar";
import RouterSwitch from "./components/Navigation/RouterSwitch";


function App() {
  return (
      <div className="container">
        <Navbar />
        <RouterSwitch />
      </div>
  );
}

export default App;
