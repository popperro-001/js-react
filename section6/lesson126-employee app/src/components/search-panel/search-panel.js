import { Component } from 'react';
import './search-panel.css';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchLocal = (e) => {
        const term = e.target.value;

        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Search for employee" 
                value={this.state.term}
                onChange={this.onUpdateSearchLocal}/>
        )
    }
}

export default SearchPanel;