import React from 'react';
import styles from './todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todoListSlice';

export const Todo = ({ title, done, id }) => {
    const dispatch = useDispatch();

    const checkHandle = () => {
        dispatch(deleteTodo(id));
    }
    return (
        <div className={styles.todo}>
            <h4>{title}</h4>
            <button onClick={checkHandle}>X</button>
        </div>
    )
}
