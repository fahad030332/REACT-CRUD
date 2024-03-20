import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Componenets/Form';
import DataTable from './Componenets/DataTable';
import Home from './Componenets/Home';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route  exact path="/" element={<Form/>} />
       <Route exact path="/table" element={<DataTable/>}/>
       <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
