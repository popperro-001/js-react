import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';



class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Mike Wazowski', salary: 800, increase: true, rise: true, id: 1},
                {name: 'James P. Sullivan', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Randall Boggs', salary: 5000, increase: false, rise: false, id: 3},
                {name: 'Boo', salary: 1500, increase: true, rise: false, id: 4},
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            /* Option 1 */
            const index = data.findIndex(elem => elem.id === id);            
            const before = data.slice(0, index);//copy array starting from 0 to index
            const after = data.slice(index +  1);//copy array starting from index+1 to the end
            const newArray1 = [...before, ...after];//create new array by joining two small arrays

            /* Option 2 */
            const newArray2 = data.filter(item => item.id !== id);//create new array except the deleted id

            return {
                data: newArray2
            }
        })
    }

    addItem= (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        /* Option 1 */
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const oldItem = data[index];
        //     const newItem = {...oldItem, increase: !oldItem.increase};
        //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArray
        //     }
        // })
        /* Option 2 */
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    searchEmployee = (items, term) => {
        if(term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }
        
    filterEmployee = (items, filter) => {
        switch(filter) {
            case 'promotion':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmployee(this.searchEmployee(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeeList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeeAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;