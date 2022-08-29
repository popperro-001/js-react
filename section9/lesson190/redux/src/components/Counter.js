const Counter = ({counter, inc, dec, rnd, res}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={res} className="btn btn-primary">RES</button>
            <button onClick={dec} className="btn btn-danger">DEC</button>
            <button onClick={inc} className="btn btn-success">INC</button>
            <button onClick={rnd} className="btn btn-warning">RND</button>
        </div>
    )
};

export default Counter;