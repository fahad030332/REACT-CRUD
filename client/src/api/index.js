
import axios from 'axios'

export const updateDBPost = async (payload
   
  ) => {
    console.log(payload)
    const res = await axios.post(
      'https://script.google.com/macros/s/AKfycbxVBZDJMjpbi6273H-mAffGMVntsCKymEzGxRC31J6GjE-qK1XJARFiVayIc8YZ9Pq0/exec',
      {
        payload,
       
      },
      {
        headers: {
          "Content-Type": "text/plain",
        },
      },
    );
    console.log({ res });
    if (res.status >= 200 && res.status < 400) {
      return res.data;
    }
  
    throw res.data.error;
  };
  



  export const updateDbGet = async (queryParams) => {
    const res = await axios.get("https://script.google.com/macros/s/AKfycbxVBZDJMjpbi6273H-mAffGMVntsCKymEzGxRC31J6GjE-qK1XJARFiVayIc8YZ9Pq0/exec", { params: queryParams });
    console.log({ res });
    if (res.status >= 200 && res.status < 400) {
      return res.data;
    }
  
    throw res.data.error;
  };
  