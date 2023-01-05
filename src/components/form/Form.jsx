import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../redux/todoListSlice';
import styles from './form.module.css';

const Form = () => {
    const [title, setTitle] = useState('');
    const dispacth = useDispatch();


    const submitTodo = (e) => {
        e.preventDefault();
        const todo = { id: Math.random() * 10, title, done: false };
        dispacth(saveTodo(todo));
        setTitle(prevState => '');
    };
    
    return (
        <form onSubmit={submitTodo} className={styles.form}>
            <input type='text' onChange={e => setTitle(prevState => e.target.value)} value={title}></input>
            <button type='submit' disabled={title.length < 2}>ADD</button>
        </form>
    )
};

export default Form;
