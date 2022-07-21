import './app-filter.css';


const AppFilter = (props) => {
    const {filter, onFilterSelect} = props;

    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'promotion', label: 'For promotion'},
        {name: 'moreThan1000', label: 'Salary more $1000'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => onFilterSelect(name)}>
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