import React, { Component } from 'react';
import ErrorBoundary  from '../components/error-handler';

import {
  Link
} from 'react-router-dom'
import '../styles/App.css';
import {Button, Preloader} from 'react-materialize';
import List from '../components/list';


class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      dateFrom:[],
      dateTo:[]
    };
    this.updateDateFrom = this.updateDateFrom.bind(this);
    this.updateDateTo = this.updateDateTo.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:1337')
    .then((res) => {
      console.log('Server response', res);
      return res.json()
    })
    .then(jsonData => {
      this.setState({
          data : jsonData
      });
      console.log('DATA FROM API', jsonData);
    })
  }

  updateDateFrom(evt){
    this.setState({
        dateFrom: evt.target.value
    });
 }

 updateDateTo(evt) {
  this.setState({
    dateTo: evt.target.value
  });
}

  render() {
    return ( 
        <ErrorBoundary>
      <div>
        <div>
          <h4>Recherche de fermeture par période :</h4>
              <span>Date début<input type="date" s={6} label="Date de début" id="dateFrom" value={this.state.dateFrom} onChange={this.updateDateFrom}/></span>
              <span>Date fin<input type="date" s={6} label="Date de fin"  id="dateTo" value={this.state.dateTo} onChange={this.updateDateTo}/></span>
              <span><Button><Link to={`/search?from=${this.state.dateFrom}&to=${this.state.dateTo}`}>Rechercher !</Link></Button></span>
        </div>
        <div>
          <h2>Prochaines Fermetures</h2>
          {!this.state.data.length ?
            <Preloader flashing/> :
            <List data={this.state.data}/>
          }
          </div>
      </div>
    </ErrorBoundary>
    )
  }
}

export default HomePage;
