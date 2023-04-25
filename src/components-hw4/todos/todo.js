import React from 'react';

const Todo = ({item}) => {
    return (
        <div>
            <h4>Todos</h4>
            <h5>id: {item.id}</h5>
            <h5> title: {item.title}</h5>
            <h5>completed: {item.completed.toString()}</h5>
        </div>
    );
};

export default Todo;