import EmployeeListItem from '../employee-list-item/employee-list-item';
import './employee-list.css';

const EmployeeList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;//decomposition of id and the rest of the props to itemProps
        return (
            // <EmployeeListItem name={item.name} salary={item.salary}/>
            <EmployeeListItem
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeeList;