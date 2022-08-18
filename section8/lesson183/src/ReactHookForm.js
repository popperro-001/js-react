import { useForm } from "react-hook-form";



const ReactHookForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });    

    return(
        <div>
            <div >Hello</div>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);                
            })}>
                <input {... register("firstName", {required: 'This is required!'})} placeholder="First Name"/>
                <p>{errors.firstName?.message}</p>
                <input {... register("lastName", {required: 'This is required!', minLength: {value: 3, message: 'Min length is 3'}})} placeholder="Last Name"/>
                <p>{errors.lastName?.message}</p>
                <select {...register("gender", {required: 'This is required!'})}>
                    <option value="">Select gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>                    
                </select>
                <p>{errors.gender?.message}</p>
                <input type="number" {...register("age", {min: 18, max:99})}/>
                <p>{errors.age?.message}</p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ReactHookForm;