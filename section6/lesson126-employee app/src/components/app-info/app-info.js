import './app-info.css';


const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employee's registry in the Monster Inc.</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Upcomig bonus for: {increased}</h2>
        </div>
    );
}

export default AppInfo;