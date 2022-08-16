import { createContext } from "react";

const dataContext = createContext({
    mail: "some@example.com",
    text: 'some text',
    forceChangeMail: () => {}
});

export default dataContext;