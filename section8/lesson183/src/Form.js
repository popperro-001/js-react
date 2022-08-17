// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

// const validate = values => {
//     const errors = {};

//     if(!values.name) {
//         errors.name = 'Required field!'
//     } else if (values.name.length < 2) {
//         errors.name = 'Should be minimum 2 characters'
//     }

//     if(!values.email) {
//         errors.email = 'Required field!'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Wrong email format'
//     }

//     return errors;
// }

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
};

const MyCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
        <>
            <label className='checkbox'>
                <input type='checkbox' {...props} {...field}/>
                {children}
            </label>           
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
};

const CustomForm = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         amount: 0,
    //         currency: '',
    //         text: '',
    //         terms: false
    //     },
    //     // validate,
    //     validationSchema: Yup.object({
    //         name: Yup.string()
    //                 .min(2, 'Should be minimum 2 characters')
    //                 .required('Required field!'),
    //         email: Yup.string()
    //                 .email('Wrong email format')
    //                 .required('Required field!'),
    //         amount: Yup.number()
    //                     .min(5, 'Can not be less than 5')
    //                     .required('Required field!'),
    //         currency: Yup.string()
    //                     .required('Select currency'),
    //         text: Yup.string()
    //                 .min(10, 'Should be minimum 10 characters'),
    //         terms: Yup.boolean()
    //                 .required('Need to agree with terms')
    //                 .oneOf([true], 'Need to agree with terms')
    //     }),
    //     onSubmit: values => console.log(JSON.stringify(values, null, 2))
    // });

    return (
       <Formik
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'Should be minimum 2 characters')
                        .required('Required field!'),
                email: Yup.string()
                        .email('Wrong email format')
                        .required('Required field!'),
                amount: Yup.number()
                            .min(5, 'Can not be less than 5')
                            .required('Required field!'),
                currency: Yup.string()
                            .required('Select currency'),
                text: Yup.string()
                        .min(10, 'Should be minimum 10 characters'),
                terms: Yup.boolean()
                        .required('Need to agree with terms')
                        .oneOf([true], 'Need to agree with terms')
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
            >
            <Form className="form">
                <h2>Send donation</h2>                              
                <MyTextInput
                    label='Your name'
                    id="name"
                    name="name"
                    type="text"
                />                
                <MyTextInput
                    label='Your email'
                    id="email"
                    name="email"
                    type="email" 
                />                
                <MyTextInput
                    label='Amount'
                    id="amount"
                    name="amount"
                    type="number"                />
                <label htmlFor="currency">Currency</label>
                <Field
                    id="currency"
                    name="currency"
                    as='select'
                    >
                        <option value="">Select currency</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name='currency' component='div'/>
                <label htmlFor="text">Your message</label>
                <Field 
                    id="text"
                    name="text"
                    as='textarea'
                />
                <ErrorMessage className="error" name='text' component='div'/>                
                <MyCheckBox
                    name='terms'>
                        Do you agree with private policy terms?
                </MyCheckBox>
                <button type="submit">Send</button>
            </Form>
       </Formik>
    )
}

export default CustomForm;