import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';



function App(){

    const data = [
        {name: 'Mike Wazowski', salary: 800, increase: true, id: 1},
        {name: 'James P. Sullivan', salary: 3000, increase: false, id: 2},
        {name: 'Randall Boggs', salary: 5000, increase: false, id: 3},
        {name: 'Boo', salary: 1500, increase: true, id: 4},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeeList data={data}/>

            <EmployeeAddForm/>
        </div>
    );
}

export default App;