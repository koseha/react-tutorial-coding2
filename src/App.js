import { Header } from "./shared/header";
import { Footer } from "./shared/footer";
import { Page } from "./pages";
import './App.css'

function App() {
  return (
    <div className="wrapper">
      {/* header */}
      <Header />
      {/* page */}
      <Page />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
