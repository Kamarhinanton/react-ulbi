import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
      <MyButton onClick = {logout}>Exit</MyButton>
    </div>
  );
};

export default Navbar;