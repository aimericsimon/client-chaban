/**
 * Created by Aimeric on 09/11/2017.
 */
import React, {Component} from 'react';
import {Card} from 'react-materialize';

class ItemDetails extends Component{
  render() {
      return (
          <div>
              <Card title={this.props.date}>
                <div>{this.props.start}</div>
                <div>{this.props.end}</div>
                <div>Raison : {this.props.reason}</div>
              </Card>
          </div>
      );
  }
}

export default ItemDetails;
