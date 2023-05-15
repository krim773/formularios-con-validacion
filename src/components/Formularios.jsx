import React, { useEffect, useState } from "react";
import Datos from "./Datos";
import Error from "./Error";

const Formularios = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //validacion
  const [error, setError] = useState(false);

  const [validNombre, setValidNombre] = useState(false);
  const [validApellido, setValidApellido] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [noCoinciden, setNoCoinciden] = useState(false);



  



  const handleSubmit = (e) => {
    e.preventDefault();

    

    if ([nombre, apellido, email, password, confirmPassword].includes("")) {
      setError(true);
      console.log("funciona");
    }
    if (nombre === '' && nombre.length < 2){
      setValidNombre(true)
    }
    if (apellido === '' && apellido.length < 2) {
      setValidApellido(true)
    }
    if (email === '' && email.length < 2) {
      setValidEmail(true)
    }
    if (password === '' && password.length < 8) {
      setValidPassword(true)
    }
    if (confirmPassword !== password ) {
      setNoCoinciden(true)
      return;
    }
    console.log(' ultimo log del submit');
    setError(false);
    setValidNombre(false);
    setValidApellido(false);
    setValidEmail(false);
    setValidPassword(false);
    setNoCoinciden(false);



  };

  return (
    <div className="container-formulario">
      <h2>formulario</h2>
      <form onSubmit={handleSubmit}>
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="label-box">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            className="input-container"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        { validNombre && <Error mensaje='Name no es valido'/>}


        <div className="label-box">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            className="input-container"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />          
        </div>
        { validApellido && <Error mensaje='Last Name no es valido'/>}



        <div className="label-box">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            className="input-container"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        { validEmail  && <Error mensaje='El email no es valido'/>}



        <div className="label-box">
          <label htmlFor="password-1">Password: </label>
          <input
            id="password-1"
            type="password"
            className="input-container"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        { validPassword && <Error mensaje='Debe poseer al menos 8 caracteres'/>}




        <div className="label-box">
          <label htmlFor="confirmPassword-1"> Confirm your password: </label>
          <input
            id="confirmPassword-1"
            type="password"
            className="input-container"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        { noCoinciden && <Error mensaje='las contraseñas no coinciden' />}


        <input type="submit" value="Sign up" />
      </form>

      <Datos
        nombre={nombre}
        apellido={apellido}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
      />
    </div>
  );
};

export default Formularios;
