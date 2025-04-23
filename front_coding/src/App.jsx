import React, { useEffect } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router'
import axios from "axios";
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Academics from './components/Acadmics/Academics'
import Projects from './components/Projects/Projects'
import Login from './components/Login/Login'
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData } from './redux/rootSlice';
import './app.css'
import Admin from './Admin/Home';

// require('dotenv').config();
const apiUrl = import.meta.env.VITE_API_URL;
const App = () => {

  const { loading,portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      const response = await axios.get(apiUrl +`/api/portfolio/get-portfolio-data`);
      dispatch(SetPortfolioData(response.data));

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    if(!portfolioData){
    getPortfolioData()}
  }, [portfolioData]
  )
 

 useEffect(()=>{
 },[portfolioData])
 
  return (
    <BrowserRouter>
    {loading ? <Loader /> :null}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/" element={
          <div>
            {portfolioData && (<div>
              <Navbar />
              <Home />
              <About />
              <Academics />
              <Projects />
              <Contact />
              <Footer />

              </div>)}
          </div>
        }
        />
      </Routes>
    </BrowserRouter>





  )
}

export default App;