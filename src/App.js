import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Header } from "./shared/header";
import { Footer } from "./shared/footer";
import { Page } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        {/* header */}
        <Header />
        {/* page */}
        <Routes>
          <Route path="/" element={<Navigate to="/mission" replace />} />
          <Route path="/mission" element={<Page />} />
          <Route path="/topic" element={<Page />} />
          <Route path="/cozy" element={<Page />} />
          <Route path="/study" element={<Page />} />
        </Routes>
        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
