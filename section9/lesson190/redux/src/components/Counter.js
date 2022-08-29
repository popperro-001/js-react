import { useSelector, useDispatch } from "react-redux";
import {inc, dec, res, rnd} from '../actions';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(res())} className="btn btn-primary">RES</button>
            <button onClick={() => dispatch(dec())} className="btn btn-danger">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-success">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-warning">RND</button>
        </div>
    )
};

export default Counter;