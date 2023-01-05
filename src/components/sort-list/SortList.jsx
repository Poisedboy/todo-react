import React from 'react';
import { useDispatch } from 'react-redux';
import { sortByA } from '../../redux/todoListSlice';

const SortList = () => {
    const dispatch = useDispatch();

    const sortHandle = (e) => {
        dispatch(sortByA());
    };

    return (
        <div>
            <button onClick={sortHandle}>Sort by a-z</button>
        </div>
    )
}

export default SortList;
