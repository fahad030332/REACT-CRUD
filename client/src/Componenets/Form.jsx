import { useState,useEffect } from 'react';
import Navbar from './Navbar'
import { Box, Grid, TextField, Typography, Button ,MenuItem, Select} from '@mui/material'
import { updateDBPost } from '../api';

import { Link, useNavigate } from 'react-router-dom';
import DataTable from './DataTable';
import Footer from './Footer';


const Form = () => {
  const generateId = () => new Date().getTime();  

  const [formData, setFormData] = useState({id:null, });
  const[select ,setSelect]=useState("")
  console.log(select)
  console.log(formData)

  // const [formKey, setFormKey] = useState(0);
  const handleInput = (e) => {
    setSelect(e.target.value)
  };

  
  


          const handleInputChange = (e) => {
          
            setFormData({
              ...formData,
              [e.target.id]: e.target.value,
              skill:select
            });
          };

          



    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        
        // console.log(formData)
        const newFormData = { ...formData, iD: generateId() };
        console.log(newFormData)
        const res = await updateDBPost(newFormData);
        console.log(res)
        
        
        
        
        setFormData({})
        // setFormKey(prevKey => prevKey + 1);
  
        
      } catch (error) {
        console.error('Error updating data:', error);
        
      
      }
    };
  
  

  
  

  return (
    <>
      <Navbar />
     {/* <Box align='center'>
     <Typography variant='h3' align='center' sx={{paddingTop:"80px"}}>𝓘𝓝𝓣𝓔𝓡 𝓨𝓞𝓤𝓡 𝓘𝓝𝓕𝓞...</Typography>
     </Box> */}
      <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)' }}>
        <Box>
          
          <form onSubmit={handleSubmit}>
            <Grid container spacing={6} alignItems="center" justifyContent="center">

              <Grid item xs={12} md={6}>
                <TextField id="firstname" value={formData.firstname||''}  label="First Name" variant="standard"  required sx={{ width: "100%", maxWidth: "500px"}} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="lastname"  value={formData.lastname || ''} label="Last Name" variant="standard" required sx={{ width: "100%", maxWidth: "500px" }} onChange={handleInputChange} />
              </Grid>

              <Grid item xs={12}>
                <TextField
                id="email"  type='email' value={formData.email||""} label="email" variant="standard"  required sx={{ width: "100%", maxWidth: "500px" }} onChange={handleInputChange}
                />
              </Grid>

              <Grid item container xs={12} spacing={2} justifyContent="center">
                <Grid item xs={12} md={6}>
                  <TextField id="phone" value={formData.phone||''} label="phone-number" variant="standard" sx={{ width: "100%", maxWidth: "500px" }}
                   inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 11,
                    
                  }} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField id="adress" value={formData.adress||''} label="Adress" variant="standard" sx={{ width: "100%", maxWidth: "500px" }} onChange={handleInputChange} />
                </Grid>
              </Grid>



              <Grid item container xs={12} spacing={2} justifyContent="center">
                <Grid item xs={12} md={6}>
                  <TextField id="education" value={formData.education||""}  label="Education-history" variant="standard" sx={{ width: "100%", maxWidth: "500px" }} onChange={handleInputChange} >
                  {/* <MenuItem value="ICS">ICS</MenuItem>
                  <MenuItem value="CS">CS</MenuItem> */}
                    </TextField>
                </Grid>





                
                <Grid item xs={12} md={6}>
                              <Select   
                  id="scl"
                  name="skill"
                  label="skill"
                  value={select || ""} // Bind value to formData.skill
                  variant="standard"
                  sx={{ width: "100%", maxWidth: "500px" }}
                  onChange={handleInput}
              >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="webdevelopment">webdevelopment</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem> {/* Corrected typo */}
                  <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
              </Select>

            </Grid>
              </Grid>

               <Grid item xs={12} sx={{ textAlign: 'center', display:"flex" }}>
               <Button variant="contained" color="primary" type='submit' sx={{bgcolor:"black"}}>
                𝓼𝓾𝓫𝓶𝓲𝓽
              </Button>

               </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
     {/* <Link to={"/table"}>TABLE</Link>  */}
     <Footer/>
    </>
  )
}

export default Form;

