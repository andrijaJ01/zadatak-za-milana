import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import LoadingPage from './componenets/LoadingPage';
import NoData from './componenets/noData';
import './App.scss'; 
import './table.scss'; 
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchingNewJokes, setFetchingNewJokes] = useState(false); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); 
      const response = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
     
      setTimeout(() => {
        setData(response.data);
        setLoading(false); 
      }, 500); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleFetchNewJokes = async () => {
    try {
      setFetchingNewJokes(true); 
      const response = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
     
      setTimeout(() => {
        setData(response.data);
        setFetchingNewJokes(false); 
      },0); 
    } catch (error) {
      console.error('Error fetching new jokes:', error);
      setFetchingNewJokes(false); 
    }
  };

  if (loading || fetchingNewJokes) { // Render loading spinner if loading or fetchingNewJokes is true
    return <LoadingPage />;
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <p className="header-text m-0 text-center m-3">Random Jokes</p>
          
          {data.length === 0 ? (
            <NoData />
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr> 
                  <th>ID</th>
                  <th>Type</th>
                  <th>Setup</th>
                  <th>Punchline</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.type}</td>
                    <td>{item.setup}</td>
                    <td>{item.punchline}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          <Row className="button-row">
            <Col className="text-center">
              <Button onClick={handleFetchNewJokes} variant="primary">
                Get New Jokes
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
