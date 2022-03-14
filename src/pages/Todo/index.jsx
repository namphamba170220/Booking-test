import React, { useState } from 'react';
import TodoList from './component/TodoList';


TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    const initTodoList = [
        {
            id : 1,
            title:'code',
            status: 'new',
        },
        {
            id:2,
            title:'sleep',
            status : 'completed',
        },
        {
            id:3,
            title:'eat',
            status: 'new',
        },
    ]

    const  [todoList, setTodoList] = useState(initTodoList);
    const [fileterStatus, setFilterStatus] = useState('all');
    const handelTodoClick = (todo,index) => {
        console.log(todo,index);

        //clone current array to the new one
        const newTodoList = [...todoList];
        //toggle state 

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };

        // update todo list

        setTodoList(newTodoList);
    }

    const handelShowAllClick = () => {
        setFilterStatus('all');
    }

    const handelShowCompleted = () => {
        setFilterStatus('completed');
    } 

    const handelShowNew = () => {
        setFilterStatus('new');
    }

    const renderTodoList = todoList.filter(todo => fileterStatus ==='all' || fileterStatus === todo.status);


    return (
        <div>
            <h3>Todo Form</h3>
            Todo List
            <TodoList todoList={renderTodoList} onTodoClick={handelTodoClick}/>
            <button onClick={handelShowAllClick}>show all</button>
            <button onClick={handelShowCompleted}>show completed</button>
            <button onClick={handelShowNew}>show new</button>
        </div>
    );
}

export default TodoFeature;