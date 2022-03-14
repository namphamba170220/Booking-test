import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);
    const handelIncreaseClick = () => {
        const action = increase(); //action ccreator
        dispatch(action);
    }

    const handelDecreaseClick = () => {
        const action = decrease();
        dispatch(action); 
    }
    return (
        <div>
            counter:{count}
            <button onClick={handelIncreaseClick}>increase</button>
            <button onClick={handelDecreaseClick}>decrease</button>
        </div>
    );
}

export default CounterFeature;