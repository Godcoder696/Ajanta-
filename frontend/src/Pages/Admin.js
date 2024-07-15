import React, { useState } from 'react';
import AdminLayout from './Components/Admin/AdminLayout';
// import {v2 as cloudinary} from 'cloudinary';

// cloudinary.config({

// })

function Admin() {
  let [file,setFile]= useState("");
  
  return (
    <>
      {/* <input type="file" onChange={onUpload}/>
      <input type="submit" onClick={fileUpload}/>
      */}
      <AdminLayout/>
    </>
  )
}

export default Admin
