import { useState } from "react";

import Form from "./Form";
import dataContext from "./context";

const {Provider} = dataContext;

function ContextExample() {
    const [data, setData] = useState({
        mail: "some@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({...data, mail: 'test@gmail.com'})
    }

    return (
        <Provider value={data}>
            <Form text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "name@example.com",
                    text: 'text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default ContextExample;