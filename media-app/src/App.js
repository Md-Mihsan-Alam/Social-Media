import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import SideBar from './Component/SideBar';
import Footer from './Component/Footer';
import PostList from './Component/PostList';
import CreatePost from './Component/CreatePost';
import { useState } from 'react';

function App() {

  const [activeCom, setActiveCom] = useState('Home');

  const handleSelectComponent = (component) => {
    setActiveCom(component);
  };
  
  return (
    <div className="App">
      <Header onSelect={handleSelectComponent}/>

      <SideBar onSelect={handleSelectComponent}/>
      {/* <CreatePost/> */}
      {/* <PostList/> */}
      <div className="content">
        {activeCom === 'Home' && <PostList />}
        {activeCom === 'CreatePost' && <CreatePost />}
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
