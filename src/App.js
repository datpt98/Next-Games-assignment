import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { initializeDatas } from './reducers/dataReducer';

import { useInterval } from './useInterval';

const App = (props) => {
  const [ counter, setCounter ] = useState(0);

  useEffect(() => {
    props.initializeDatas();
  }, [])

  useInterval(() => {
    props.initializeDatas();
    setCounter(counter+1);
  }, 600000);

  const incidents = props.value.datas;


  return(
    <div className="App">
      <h1>Incidents from Datadog</h1>
      <h4>Datas have been automatically updated {counter} times in every 10 minutes</h4>
      {
        incidents.map((incident, id) => <p>{id + 1}. {incident.name}</p>)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state, 
  }
}

const mapDispatchToProps = {
  initializeDatas
}

export default connect(mapStateToProps, mapDispatchToProps)(App);