
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Navbar from './component/navbar/Navbar';
import Login from './component/Login/Login';
import Register from './component/register/register';
import {useState} from 'react'
import Chart1 from './component/chartjs/chartjs';
import { data } from './component/chartjs/datachatrt';
import FieldChart from './component/moreChart/morechart';
import {Paper} from '@mui/material'
function App() {
  const [isSubmitted,setIsSubmitted] = useState(false)
    function submitform(){
        setIsSubmitted(true)
    }
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login/>}/>
    //     <Route path="/register" element={<Register submitForm={submitform}/>}/>
    //   </Routes>
    // </Router>
    <div>
      <Paper>
        <FieldChart/>
        <FieldChart/>
      </Paper>
      
    </div>

  );
}

export default App;
