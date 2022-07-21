import './app-filter.css';


const AppFilter = (props) => {
    const {filter, onFilterSelect} = props;

    const buttonsData = [
        {name: 'all', label: 'All employees', colored: false},
        {name: 'promotion', label: 'For promotion', colored: false},
        {name: 'moreThan1000', label: 'Salary more $1000', colored: true}
    ]

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = colored ? {color: 'red'} : null;
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => onFilterSelect(name)}
                style={style}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}            
        </div>
    )
}

export default AppFilter;