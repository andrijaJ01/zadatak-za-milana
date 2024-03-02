import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingPage.scss'; 


const LoadingPage = () => {
  return (
    <section className="d-flex justify-content-center align-items-center loading-container">
      <Spinner animation="border" role="status"/>
      <span>Loading...</span>
    </section>
  );
};

export default LoadingPage;