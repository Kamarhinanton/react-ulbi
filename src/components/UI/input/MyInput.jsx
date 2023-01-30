import React from 'react';
import classes from "./MyInput.module.css";

const MyInput = (props) => {
  return (
    <input className={classes.myInput} {...props}/>
  );
};

export default MyInput;


// const MyInput = React.forwardRef((props, ref) => {
//   return (
//     <input ref={ref} className={classes.myInput} {...props}/>
//   );
// });
//
// export default MyInput;