
import express from 'express';
import axios from "axios"

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.post('/submit-form', async (req, res) => {
  try {
    console.log('Form data received:', req.body);
    const { formData } = req.body;
  
    const response = await axios.post('https://script.google.com/macros/s/AKfycbxVBZDJMjpbi6273H-mAffGMVntsCKymEzGxRC31J6GjE-qK1XJARFiVayIc8YZ9Pq0/exec', { formData });

    console.log('Response from Google Apps Script:', response.data);
    res.send('Form data received and forwarded successfully to Google Apps Script!');
  } catch (error) {
    console.error('Error forwarding form data to Google Apps Script:', error);
    res.status(500).send('Error forwarding form data to Google Apps Script');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
