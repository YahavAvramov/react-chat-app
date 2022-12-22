import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='mainApp'>


  <BrowserRouter>

<Routes>
      <Route path='/' element={<App/>} />
      <Route path='/:id' element={<App/>} />
      <Route path='/:firstTime' element={<App/>} />
      <Route path ='/login' element={<Login/>}/>
      <Route path ='/chat/:id' element={<Chat/>}/>
    

     
     {/* <Route path='/qustion/:id' element={<SelectedQustion/>} /> */}

      {/* <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />  */}
    
    </Routes>
    </BrowserRouter>
  
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
