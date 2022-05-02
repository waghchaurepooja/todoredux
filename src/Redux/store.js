

import { legacy_createStore as createStore } from "redux";

import { reducer } from "./reducer";

const InitialState = {
    todos : [],
    counter : 1,
}

export const store = createStore(reducer, InitialState)


store.subscribe(() => {
    const value = store.getState();
    console.log('value:', value)
    console.log('value:', value.todos)
    const Todolist = value.todos
    console.log('Todolist:', Todolist)
    
    function append(Todolist) {
        document.querySelector("#Todolist").innerHTML = "";
        Todolist.map((element,index) => {
            console.log('element:',index,":", element)
            var Title = document.createElement("p");
    
            Title.innerHTML = element.title;
    
            var Status = document.createElement("p");

            Status.innerHTML = `${element.status ? "Done" : "Not Done"}`;
    
            var Toggle = document.createElement("button");
            Toggle.innerHTML = "Toggle";
            Toggle.addEventListener("click", function (){
                console.log(index);
    
                handlestatus(index);
            })
            document.querySelector("#Todolist").append(Title,Status,Toggle);
        })
    }

    append(Todolist);

    function handlestatus(index) {
        console.log('Todolist:', Todolist)
        var object = Todolist[index];

        console.log('object:', object)
        object["status"] = !object.status;
        console.log('object:', object)

        Todolist.splice(index,1,object);
        console.log('Todolist:', Todolist)

        append(Todolist);
    }
})