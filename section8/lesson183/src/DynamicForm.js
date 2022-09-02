import { Formik, Form, Field, ErrorMessage, useField, FieldArray } from 'formik';

const DynamicForm = () => {
    const dataArray = ['a', 'b', 'c', 'd', 'e']
    return (
        <div>
        <h1>Education</h1>
        <Formik
          initialValues={{ education: ["a"],
                         work:['a']}}
          onSubmit={values =>
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500)
          }
          render={({ values }) => (
            <Form>
              <FieldArray
                name="education"
                render={arrayHelpers => (
                  <>
                    {values.education && values.education.length > 0 ? (
                      values.education.map((edu, index) => (
                        <div key={index}>
                            <Field name={`education_${edu}_school`} />
                            
                            <Field                            
                            name={`education_${edu}_degree`}
                            as='select'
                            >
                                <option value="">Select degree</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Master">Master</option>
                                <option value="Phd">Phd</option>
                            </Field>

                            <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                            -
                            </button>
                            {index < 2 ? (
                            <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index + 1, dataArray[index + 1])} // insert an empty string at a position
                            >
                            +
                            </button>
                            ) : null}
                        </div>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push("")}>
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                    
                  </>
                )}
              />
              <h1>Work</h1>
              <FieldArray
                name="work"
                render={arrayHelpers => (
                  <>
                    {values.work && values.work.length > 0 ? (
                      values.work.map((job, index) => (
                        <div key={index}>
                            <Field name={`work_${job}_company`} />
                            
                            <Field                            
                            name={`work_${job}_position`}
                            as='select'
                            >
                                <option value="">Select position</option>
                                <option value="Worker">Worker</option>
                                <option value="Manager">Manager</option>
                                <option value="CEO">CEO</option>
                            </Field>

                            <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                            -
                            </button>
                            {index < 4 ? (
                            <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index + 1, dataArray[index + 1])} // insert an empty string at a position
                            >
                            +
                            </button>
                            ) : null}
                        </div>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push("")}>
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                    
                  </>
                )}
              />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>
          )}
        />
      </div>
    )
}

export default DynamicForm;