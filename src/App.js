import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import NotesList from "./pages/NotesList";
import NoteDetail from "./pages/NoteDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route component={NotesList} path="/" exact />
          <Route component={NoteDetail} path="/note/:id" />
        </div>
      </div>
    </Router>
  );
}

export default App;
