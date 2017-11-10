import React, { Component } from 'react';
import ErrorBoundary  from '../components/error-handler';
import {
  Link
} from 'react-router-dom'
import {Button, Preloader} from 'react-materialize';
import ItemDetails from '../components/item-details';
import '../styles/index.css';

class SinglePage extends Component {

  _defineThis(theProps){
    const {match} = theProps;
    this.state = {
      data: [],
      prev: Number(match.params.id) - 1,
      next: Number(match.params.id) + 1
    }
    this.id = match.params.id;
    this.linkapi = `http://localhost:1337/${this.id}`
  }

  constructor(props){
    super(props);
    this._defineThis(this.props);
  }

  componentWillReceiveProps(nextProps) {
      this._defineThis(nextProps);
      this.componentDidMount();
  }

  componentDidMount(){
    fetch(this.linkapi)
    .then((res) => {
      console.log('Server response', res);
      return res.json()
    })
    .then(jsonData => {
      this.setState({
          data: jsonData
      });
      console.log('DATA FROM API', jsonData);
    })
  }

  render() {
    return (
        <ErrorBoundary>
        <div>
          <div>
            <span><Button><Link to="/">Retour</Link></Button></span>
          </div>
          <div>
            <span><Button><Link to={`/id/${this.state.prev}`}>Precedent</Link></Button></span>
            <span><Button><Link to={`/id/${this.state.next}`}>Suivant</Link></Button></span>
          </div>
              {!this.state.data.date ?
                <Preloader flashing/> :
                  <div>
                      <ItemDetails date={this.state.data.date}
                        start={this.state.data.start}
                        end={this.state.data.end}
                        id={this.state.data.id}
                        reason={this.state.data.reason}/>
                  </div>
              }
        </div>
        </ErrorBoundary>
    );
  }
}

export default SinglePage;
