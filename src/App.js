import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePage";



function App() {
  return (
    <div className="App">
          <div className="min-h-screen bg-slate-50">
            <HomePage />
          </div>
        ;
    </div>
  );
}

export default App;
