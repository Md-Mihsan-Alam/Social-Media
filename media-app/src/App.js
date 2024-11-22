import './App.css';
import Header from './Component/Header';
import SideBar from './Component/SideBar';
import Footer from './Component/Footer';
import PostList from './Component/PostList';
import CreatePost from './Component/CreatePost';
import { useState, useEffect } from 'react';
import Post from './Component/Post';
// import {FormDetailsProvider} from './Component/FillForm';
import {FillFormProvider} from './Store/FillFormProvider';



function App() {

  const [activeCom, setActiveCom] = useState('Home');

  const handleSelectComponent = (component) => {
    setActiveCom(component);
  };
  

  return (
    <div className="App">
      
    <FillFormProvider>
        
      <Header onSelect={handleSelectComponent}/>

      <SideBar onSelect={handleSelectComponent}/>

      <div className="content">
        {activeCom === 'Home' && <PostList />}
        {activeCom === 'CreatePost' && <CreatePost />}
      </div>
      
      <Footer/>

    </FillFormProvider>


    </div>
  );
}

export default App;
