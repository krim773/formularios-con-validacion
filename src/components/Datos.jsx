import React from 'react'

const Datos = ({ nombre, apellido, email, password, confirmPassword }) => {
  return (
    <>
      <h2>Your Form Data</h2>
      <div>
        <p>First Name: {nombre} </p>
        <p>Last Name: {apellido}</p>
        <p>Email: {email} </p>
        <p>Password: {password} </p>
        <p>Confirm Password: {confirmPassword} </p>
      </div>
    </>
  )
}

export default Datos
