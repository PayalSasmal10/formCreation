import React, { useState } from "react";

const FormCreation = () => {
  // const [inputChange, setInputChange] = useState({
  //   id: "",
  //   name: "",
  //   email: "",
  //   password: ""
  // });
  const [inputChangeName, setInputChangeName] = useState();
  const [inputChangeEmail, setInputChangeEmail] = useState();
  const [inputChangePassword, setInputChangePassword] = useState();

  const nameChangeHandler = (e) => {
    setInputChangeName(e.target.value);

  };

  const emailChangeHandler = (e) => {
    setInputChangeEmail(e.target.value);
  };

  const passChangeHandler = (e) => {
    setInputChangePassword(e.target.value);
  }
  // const onChangeHandler = (e) => {
  //   setInputChange(
  //     e.target.value)

  // };

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(inputChangeName);
    console.log(inputChangeEmail);
    console.log(inputChangePassword);

  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <span>Name</span>
          <input type="text" onChange={nameChangeHandler} name="name" />
        </div>
        <div>
          <span>Email</span>
          <input type="email" name="email" onChange={emailChangeHandler} />
        </div>
        <div>
          <span>Password</span>
          <input type="password" name="password" onChange={passChangeHandler}/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};
export default FormCreation;
