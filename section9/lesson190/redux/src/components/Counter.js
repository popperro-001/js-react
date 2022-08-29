import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import * as actions from '../actions';

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

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return  bindActionCreators(actions, dispatch)    
// };

export default connect(mapStateToProps, actions)(Counter);