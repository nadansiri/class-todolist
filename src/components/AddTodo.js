import React from 'react';
import {InputGroup, FormControl, Button} from "react-bootstrap"

const AddTodo = ({handleAdd, handleInput, newTodo}) => {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Add task here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => handleInput(e)}
                value={newTodo}
                />
                <InputGroup.Append>
                    <Button variant="dark" onClick={() => handleAdd({description : newTodo})}>todo</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default AddTodo
