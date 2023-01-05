import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Todo } from '../todo/Todo';
import styles from './todolist.module.css';

export const TodoList = () => {
    const list = useSelector(state => state.todoList.todoList);
    const [query, setQuery] = useState('');

    if (query) {
        var matchedTodo = list.filter(todo => {
            let res = todo.title.match(query);
            return res;
        })
        console.log(matchedTodo)
    }

    return (
        <div className={styles.list}>
            <div>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search for a task...' />
                {(!query && !matchedTodo) ? <h4>search result</h4> : <h1>{matchedTodo[0].title}</h1>}
            </div>
            <div>
                
            </div>
            {list.map(todo => {
                return <div key={todo.id}><Todo title={todo.title} done={todo.done} id={todo.id} /></div>
            })}
        </div>
    )
}
