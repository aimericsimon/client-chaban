/**
 * Created by Aimeric on 09/11/2017.
 */
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import '../styles/App.css';
import {Button, Preloader} from 'react-materialize';
import List from '../components/list';


class SearchPage extends Component {
  constructor(props){
    super(props);
    const {match} = props;
    this.state = {
      data: []
    };
    this.formatageDate = this.formatageDate.bind(this);
    var currentLocation = window.location.href;
    var dateFrom = this.formatageDate(currentLocation.substring(currentLocation.indexOf("=") + 1,currentLocation.indexOf("to=") -1));
    console.log("date From : ",dateFrom);
    var dateTo = this.formatageDate(currentLocation.substring(currentLocation.indexOf("o=") + 2));
    console.log("date To : ",dateFrom);

    this.linkapi = `http://localhost:1337/?from=${dateFrom}&to=${dateTo}`;
  }
/*
 Formatage de la date entrée au format valide Européen jj-mm-aaaa
 */
  formatageDate(dateStr){
    var validDate = '';
    if(dateStr != ''){
      validDate = dateStr.split("-");
      return validDate[2]+ "/" +validDate[1]+ "/" +validDate[0].substring(2);
    }
  }

  componentDidMount(){
    fetch(this.linkapi)
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
  
  render() {
    return (

      <div><div>
        <span><Button><Link to="/">Retour</Link></Button></span>
      </div>
      <div>
          <h2>Resulats de la recherche</h2>
          {!this.state.data.length ?
            <Preloader flashing/> :
            <List data={this.state.data}/>
          }
      </div>
      </div>
    )
  }
}

export default SearchPage;
