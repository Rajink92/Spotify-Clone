import Content from "components/Content";
import Bottombar from "components/Bottombar";
import Header from "components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Content />
      </div>
      <Bottombar />
    </Router>
  );
}

export default App;
