import { useContext } from "react";

import dataContext from "./context";

/* using class component */
// class InputComponent extends Component {
//     // static contextType = dataContext;

//     render() {
//         return (
//             /* using Consumer */
//             // <Consumer>
//             //     {
//             //         value => {
//             //             return (
//             //                 <input 
//             //                     value={value.mail} 
//             //                     type="email" 
//             //                     className='form-control' 
//             //                     placeholder="name@example.com"/>
//             //             )
//             //         }
//             //     }
//             // </Consumer>

//             /* using contextType */
//             <input 
//                                 value={this.context.mail} 
//                                 type="email" 
//                                 className='form-control' 
//                                 placeholder="name@example.com"/>
//         )
//     }
// }

// InputComponent.contextType = dataContext;

/* using functional component */
const InputComponent = () => {
    const context = useContext(dataContext);

    return (
        <input 
            value={context.mail} 
            type="email" 
            className='form-control' 
            placeholder="name@example.com"
            onFocus={context.forceChangeMail}/>
    )
}

export default InputComponent;