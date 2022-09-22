import './App.css';
// import { LoggedIn } from './components/state/LoggedIn';
// import { User } from './components/state/User';
import FormikSelect from './components/Form/FormikSelect';
import CustomSelect from './components/Form/CustomSelect';
import { Formik, Form } from 'formik';


function App() {
  const officeSizeOptions = [
		// { label: 'Select office size', value: '' },
		{ label: '2-person', value: '2-person' },
		{ label: '3-person', value: '3-person' },
		{ label: '4-person', value: '4-person' },
		{ label: '6-person', value: '6-person' },        
		{ label: '7-person', value: '7-person' },
		// { label: '8-person', value: '8-person' },
		// { label: '9-person', value: '9-person' },		
		// { label: '11-person', value: '11-person' },
		// { label: '12-person', value: '12-person' },        
		// { label: '14-person', value: '14-person' },
		// { label: '16-person', value: '16-person' },
	];

  return (
    <div className="App">
      {/* <User/> */}
      <h2>Hello</h2>
      <Formik
        initialValues={{select: ''}}
        onSubmit={(values: any) => {
          console.log(values)
        }}>
        <Form>
        <FormikSelect
        orientation='horizontal'
        name='select'
        id='select'
        label='select size'
        options={officeSizeOptions}
        isMulti={false}
        maxLimit={4}
        placeholder='Please select size of the office...'
        required
      />
          {/* <CustomSelect
            id='select'
            name='select'
            options={officeSizeOptions}
            isMulti={true}
            placeholder='Please select size...'/> */}
            
            <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
