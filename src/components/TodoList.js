import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Emoji from 'a11y-react-emoji'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    {this.props.tasks.map((el, key) =>
                    <ListGroup.Item key={key}> 
                        <Emoji symbol="✍"/>
                        {' '} 
                        {el.description}
                    </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        )
    }
}
