// write your custom hook here to control your checkout form
import {useState} from "react";

 export default function(initialState, submit){
     const [formData, setFormData] = useState({});

     const updateFormData = e =>{
         setFormData({
             ...formData,
             [e.target.name]: e.target.value
         });
     }

     const handleSubmit = (e, action) => {
         e.preventDefault();
         action(formData);
     }

     return [formData, updateFormData, handleSubmit];
 } 
