import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css'




const init = () => {

    return JSON.parse(localStorage.getItem('todo')) || [];

    // return  [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];



}
export const TodoApp = () => {



    const [todo, dispatch] = useReducer(todoReducer, [], init);

  

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    },[todo]);

    const handleDelete = (todoId) => {
        console.log(todoId);


        const action = {
            
            type: 'delete',
            payload: todoId

        };

        dispatch(action);


    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId 
        })
    }

    const handleAddTodo = (newTodo) => {
        
        const action = {
            
            type: 'add',
            payload: newTodo

        };

        dispatch(action);
    }



    console.log(todo);



  return(

      <div>
          <h1>Todo App ({todo.length}) </h1>
          <hr/>

        <div className='row'>

            <div className='col-7'>

                <TodoList 
                todo={todo}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />



            </div>

            <div className='col-5'>
                
               <TodoAdd handleAddTodo={handleAddTodo}/>

            </div>

        </div>
        
      </div>
  ) 
};
