import { createContext, useRef, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

import "./styles/app.scss";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Intro from "./component/Intro";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export const tabContext = createContext();

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "Home", icon: "chrome", content: <Home /> },
    { name: "Works", icon: "folder", content: <Works /> },
    { name: "Profile", icon: "doc", content: <Skill /> },
    { name: "Contact", icon: "kakao", content: <Contact /> },
    { name: "GitHub", icon: "git" },
  ];

  const selectMenuhandler = (index) => {
    setCurrentTab(index);
  };

  //애니메이션
  const app = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".introContent", { scale: 1, duration: 0.7, delay: 0.3 })
        .to(".sunglasses", { rotate: 20, duration: 0.6 })
        .to(".introPage", { display: "none" })
        .to(".cursor", { top: "85px", left: "85px", duration: 1.8, delay: 0.5 })
        .to("header .folderIcon", { backgroundColor: "rgba(255,255,255,0.08)", duration: 0.3 })
        .to("header .folderIcon", { backgroundColor: "rgba(255,255,255,0)", duration: 0.3 })
        .to(".main", { display: "block" })
        .to(".cursor", { opacity: 0, pointerEvents: "none", duration: 0.3 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={app}>
      <Intro />

      <img className="cursor" src={process.env.PUBLIC_URL + "/assets/images/ico_cursor.png"} alt="" />

      <tabContext.Provider value={{ currentTab, menuArr, selectMenuhandler }}>
        <Header />

        <Main />

        <Footer />
      </tabContext.Provider>
    </div>
  );
}

export default App;
