import { createContext, useState,  } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';

import './scss/app.scss';
import Home from './pages/Home';
import Works from './pages/Works';
import Skill from './pages/Skill';
import Contact from './pages/Contact';

export const tabContext = createContext();

function App() {
  
  const [currentTab, setCurrentTab] = useState(0);
  
  const menuArr = [
    { name : 'Home',icon : 'chrome', content : <Home/>},
    { name : 'Works',icon : 'folder', content : <Works/>},
    { name : 'Profile',icon : 'doc', content : <Skill/>},
    { name : 'Context',icon : 'kakao', content : <Contact/>},
    { name : 'GitHub',icon : 'git'},
  ];
  
  const selectMenuhandler = (index) => {
    setCurrentTab(index);
  }


  return (
    <div className="App">

      <tabContext.Provider value={{currentTab,menuArr,selectMenuhandler}}>

        <Header/>

        <Main/>

        <Footer/>

      </tabContext.Provider>
    </div>
  );
}

export default App;
