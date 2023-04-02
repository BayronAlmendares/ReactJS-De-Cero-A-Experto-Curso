import React, { useState } from 'react'
import { useEffect } from 'react';

export const SimpleForm = () => {
   
    const [formState, setFormState] = useState({
        username: 'BayronMiguel',
        email: 'testdeemail@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( ()=> {console.log("uso de useEffect")}, [] )
    useEffect( ()=> {console.log("el formState changed")}, [formState] )
    useEffect( ()=> {console.log("el Email changed")}, [email] )

  return (
    <>
    <h1>FORMULARIO SIMPLE </h1>
    
    <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username" 
          value ={ username }
          onChange={onInputChange}
    />
          

    <input
        type = "email"
        className = "form-control mt-2"
        placeholder = "ing.bayronalmendares@gmail.com"
        name="email"
        value = {email}
        onChange={onInputChange}
    />         

    </>


  )
}
