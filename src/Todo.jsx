import { useState } from "react"
import './App.css'
function List(){
    let [toDo, setTodo] =  useState('')
    let [list, setList] = useState([])
    
    let settingTodo = (event)=>{
        setTodo(event.target.value)
    }
    
    const addingToList = ()=>{
        setList(l=>l=[...l, {toDo, completed: false, edit:false}])
        setTodo("")
        document.querySelector('.todo-input').value = ''
    }

    function remove(index){
        setList(list.filter((_, i) =>i != index))
    }

    let edit = (index)=>{
        list[index].edit = !list[index].edit
         console.log(list[index].edit)
         setList(l=> l.filter(()=> 1))
    }

    let editHtml= (index)=>{
        return(
            <div className="item">
                <input value={list[index].toDo} type="text" id="correced"/>
                <button onClick={()=>{list[index].toDo =document.querySelector('#selected').value; edit(index) }}>Ok</button>
            </div>
        )
    }

    let contentHtml = (todo)=>{
        return (
            <div key={index} className = {todo.completed ? " item completed" : "item"}>
                    <h2>{todo.toDo}</h2>
                    <button onClick={()=>completed(index)}>completed</button>
                    <button onClick={()=>edit(index)}>Edit</button>
                    <button onClick={()=>remove(index)}>remove</button>
                </div>
        )
    }

    let completed = (index)=>{
         list[index].completed = !list[index].completed
         console.log(list[index].completed)
         setList(l=> l.filter(()=> 1))
    }


    return(
        <div className="parent-container">
            <div className="inputArea">
                <input type="text"  onChange={settingTodo} className="todo-input"/>
                <button onClick={addingToList} className="adding">Add</button>
            </div>
            
            {list.map((todo,index)=>{
                if(todo.edit){
                    return(<div key={index} className="item">
                                <input value={list[index].toDo} type="text" id="corrected"/>
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