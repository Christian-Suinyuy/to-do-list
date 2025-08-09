import { useState } from "react"
import './App.css'
function List(){
    let [toDo, setTodo] =  useState('')
    let [list, setList] = useState([])
    
    let settingTodo = (event)=>{
        setTodo(event.target.value)
    }
    
    const addingToList = ()=>{
        if(toDo){ 
            setList(l=>l=[...l, {toDo, completed: false, edit:false}])
            setTodo("")
            document.querySelector('.todo-input').value = ''
        }
    }

    function remove(index){
        setList(list.filter((_, i) =>i != index))
    }

    let edit = (index)=>{
        list[index].edit = !list[index].edit
         setList(l=> l.filter(()=> 1))
    }

   let update = (index)=>{
   
    list[index].toDo = document.querySelector('#corrected').value
    setList(l=> l.filter(()=> 1))

   }

    let completed = (index)=>{
         list[index].completed = !list[index].completed
         setList(l=> l.filter(()=> 1))
    }


    return(
        <div className="parent-container">
            <h1>To-Do List App</h1>
            <div className="inputArea">
                <input type="text"  onChange={settingTodo} className="todo-input"/>
                <button onClick={addingToList} className="adding">Add</button>
            </div>
            
            {list.map((todo,index)=>{
                if(todo.edit){
                    return(<div key={index} className="item">
                                <input value={list[index].toDo} type="text" id="corrected" onChange={()=>update(index)}/>
                                <button onClick={()=>{
                                    list[index].toDo =document.querySelector('#corrected').value; 
                                    edit(index) }}>Ok</button>
                            </div>)

                }
                return(

                    <div key={index} className = {todo.completed ? " item completed" : "item"}>
                        <h2>{todo.toDo}</h2>
                        <button onClick={()=>completed(index)}>completed</button>
                        <button onClick={()=>edit(index)}>Edit</button>
                        <button onClick={()=>remove(index)}>remove</button>
                    </div>
                )
            })}
                
        </div>
    )
}

export default List