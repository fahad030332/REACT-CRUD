import { Box, Typography } from '@mui/material'
import React from 'react'
import HomeNav from './HomeNav'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import png from "./images/p.jpg"

export default function Home() {
  return (
    <>
    <HomeNav/>
    <Box sx={{ paddingTop: "50px" }}>
        <Link to={"/"}><ArrowBackIcon/></Link>
      </Box>
      <Typography align='center'>
    <span style={{ fontWeight: 'bold', color: 'red',fontSize:"80px" }}>FREE</span>
    <span style={{fontWeight: 'bold', color: 'black',fontSize:"60px"  }}> PALESTINE</span>
</Typography>

    <Box height="1000px" width="1000px" display="flex1">
    <img src={png} alt="pic" />
    </Box>
    
    </>
  )
}
