

import { useState } from "react";

import { store } from "../Redux/store";

import { addTodo } from "../Redux/action";

export const Todo = () => {

    const [text, setText] = useState("");
    console.log('text:', text)
    
    const handleInput = (event) => {
        console.log('event:', event)
        console.log('event:', event.target)
        console.log("event.taret.value :", event.target.value);
        setText(event.target.value);
    }
    const handleTodo = (event) => {
        event.preventDefault();
        console.log("text :", text);
        console.log('store:', store)
        store.dispatch(addTodo(text));
    }
    return (

        <div>
            <form action="" onSubmit={handleTodo}>
                <input onChange={handleInput} name="todo" type="text" />
                <input type="submit" value="Add Todo" />
            </form>
        </div>

    )
}