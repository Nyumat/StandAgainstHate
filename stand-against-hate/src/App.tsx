// Reeact router
import { Route, Routes, useLocation } from "react-router-dom";

// Transitions
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import TakeAction from "./pages/TakeAction";
import Contact from "./pages/Contact";
import Forum from "./pages/Forum";
import Welcome from "./pages/Welcome";

// Components
import NavigationBar from "./components/NavigationBar";
// import Footer from "./components/Footer";

import "./App.css";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div
      style={{
        maxWidth: "100vw",
        textAlign: "center",
      }}
    >
      <NavigationBar />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/takeaction" element={<TakeAction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
