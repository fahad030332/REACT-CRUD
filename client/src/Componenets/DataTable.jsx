import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  
} from "@mui/material";
import { updateDbGet } from "../api";
import { updateDBPost } from "../api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DataTable = () => {
  const [editMode, setEditMode] = useState({});
  const [editedData, setEditedData] = useState({});
  const [data, setData] = useState([]);
  console.log(data);
  console.log(editedData)
  useEffect(() => {
    const fetctData = async () => {
      try {
        const queryParams = { ID: "12345", endpoint: "getsheetData" };
        const res = await updateDbGet(queryParams);
        // console.log(res)
        setData(res);
      } catch (error) {
        console.error("Error fetching data from sheet:", error);
      }
    };
    fetctData();
  }, []);

  const handleEdit = (id) => {
    console.log("Editing Id", id);
    setEditMode((prevState) => ({ ...prevState, [id]: true }))
    setEditedData((prevState) => ({
      ...prevState,
      [id]: { ...data.find((row) => row[0] === id) }, //[],[],[]
    }));
  };

  const handleChange = (e, id, key) => {
    console.log(e);
    console.log(id);
    console.log(key);

    const { value } = e.target;
    setEditedData((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [key]: value,
      },
    }));
  };

    // var edit={
    // 1234556 :{
    //   0:"kucudi",
    //   1:"djncsdk",
    //   3:"kknvfdlk",
    //   4:12344,
    //    }  
  

    // }





  const handleSave = async (id) => {
    try {
      console.log("Updating row:", id);

      const updatedData = data.map((row) =>
        row[0] === id ? Object.values(editedData[id]) : row
      );
      console.log("Updated data:", updatedData);
      setData(updatedData);

      console.log("Saving data to backend:", editedData[id]);
      const res = await updateDBPost(editedData[id]);
      console.log("Backend response:", res);

      console.log("Exiting edit mode");
      setEditMode((prevState) => ({ ...prevState, [id]: false })); //...{name:'mjk}=>{name:'mjk'',}
    } catch (error) {
      console.error("Error updating row:", error);
    }
  };
   
  const handleDelete = async (id) => {
    try {
      const updatedData = data.filter((row) => row[0] !== id);
      setData(updatedData);

      // console.log(id)
      const res = await updateDBPost({ id });
      // console.log('Row deleted successfully:', res);
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  };

  return (
    <>
      <Nav />
      <Box sx={{ paddingTop: "50px" }}>
        <Link to={"/"}><ArrowBackIcon/></Link>
      </Box>
      <Box mt={4} mx="auto" maxWidth={1400}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead  sx={{
            '&:hover': {
             boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
             transform: 'translateY(-5px)',
              transition: 'all 0.16s ease',
             },
             border:"4px "
            }}
>
              <TableRow>
                <TableCell>𝓘𝓓</TableCell>
                <TableCell>𝓕𝓲𝓻𝓼𝓽-𝓝𝓪𝓶𝓮</TableCell>
                <TableCell>𝓛𝓪𝓼𝓽-𝓝𝓪𝓶𝓮</TableCell>
                <TableCell>𝓔𝓶𝓪𝓲𝓵</TableCell>
                <TableCell>𝓟𝓱𝓸𝓷𝓮</TableCell>
                <TableCell>𝓐𝓭𝓭𝓻𝓮𝓼𝓼</TableCell>
                <TableCell> 𝓔𝓭𝓾𝓬𝓪𝓽𝓲𝓸𝓷</TableCell>
                <TableCell> 𝓢𝓴𝓲𝓵𝓵</TableCell>
                <TableCell>𝓐𝓬𝓽𝓲𝓸𝓷</TableCell>
              </TableRow>
            </TableHead>
            <TableBody   sx={{
             '&:hover': {
              boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
              transform: 'translateY(-5px)',
               transition: 'all 0.6s ease',
                },
              }}
>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>
                      {editMode[row[0]] ? (
                        <TextField
                          value={editedData[row[0]][cellIndex]}
                          onChange={(e) => handleChange(e, row[0], cellIndex)}
                        />
                      ) : (
                        cell
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    {editMode[row[0]] ? (
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<SaveIcon />}
                        onClick={() => handleSave(row[0])}
                      ></Button>
                    ) : ( 
                      <>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<EditIcon />}
                          onClick={() => handleEdit(row[0])}
                        ></Button>
                        <Button
                          variant="outlined"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDelete(row[0])}
                        ></Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default DataTable;
