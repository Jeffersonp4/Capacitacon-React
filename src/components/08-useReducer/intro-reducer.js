

const initialState = [{
    id:1,
    todo: 'Comprar Pan',
    done: false

}];


const TodoReducer = (state = initialState,action) => {

    if (action?.type === 'agregar') {

        return [...state, action.payload];
        
    }

    return state;
}

let todos = TodoReducer();


const newTodo = {

    id:2,
    todo: 'Comprar leche',
    done: false
}

const action = {

    type: 'agregar',
    payload: newTodo
}

todos = TodoReducer(todos,action);

console.log(todos)