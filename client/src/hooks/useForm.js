// write your custom hook here to control your checkout form
import {useState} from "react";

 export default function(initialState, submit){
     const [formData, setFormData] = useState(initialState);

     const updateFormData = e =>{
         setFormData({
             ...formData,
             [e.target.name]: e.target.value
         });
     }

     const handleSubmit = e => {
         e.preventDefault();
         submit(formData);
     }

     return [formData, updateFormData, handleSubmit];
 } 
