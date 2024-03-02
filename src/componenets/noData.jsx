import React from 'react';
const NoData = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <h1>503 Service Unavailable</h1>
      <p>Sorry, the service providing data you are looking for is not available.</p>
      <button onClick={reloadPage}>Reload Page</button>
      </>
  );
};

export default NoData;