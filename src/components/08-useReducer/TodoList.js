import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todo,handleDelete,handleToggle}) => {


  return(

    <ul className='list-group list-group-flush'>
    {
                todo.map(( todo, index) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        index={index}
                    />
                ))
            };
        </ul>
  )
};
