import React, {Component} from 'react';

import ListItem from './liste-item';




class List extends Component{
    render() {
        return (
            <div>
                {this.props.data.map(row => <ListItem date={row.date} start={row.start} end={row.end} id={row.id}/>)}
            </div>
        );
    }
}

export default List;
