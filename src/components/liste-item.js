import React, {Component} from 'react';
import {Card} from 'react-materialize';
import {Link} from 'react-router-dom';

class ListItem extends Component{
    render() {
        return (
            <div>
                <Card title={this.props.date}>
                    <div>{this.props.start}</div>
                    <div>{this.props.end}</div>
                    <div><Link to={`/id/${this.props.id}`}>
                        Details
                    </Link></div>
                </Card>
            </div>
        );
    }
}

export default ListItem;
