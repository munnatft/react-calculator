import React from 'react';
import { Link } from 'react-router-dom';
import error from './error.jpg';
import classes from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={classes.error}>
      <img className={classes.img} src={error} alt="error-page" />
      <div className={classes.message}>Arithmetic Exception Error Occurred - You cannot divide number by 0.</div>
      <div>
          <Link to="/" className={classes.home}>Go to Home Page</Link>
      </div>
    </div>
  )
}


export default ErrorPage;
