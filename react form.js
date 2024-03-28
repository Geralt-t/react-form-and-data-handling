export default function Form() {
    const [formData, setFormData] = useState({name: "",email: "",message: ""});
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
    };
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
        <button type="submit">Submit</button>
        </form>
        );
       }
       function MyForm() {
        const [inputValue, setInputValue] = useState('');
        const [inputError, setInputError] = useState(null);
        function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value);
        if (value.length < 5) {
        setInputError('Input must be at least 5 characters');
        } else {
        setInputError(null);
        }
        }
        function handleSubmit(event) {
            event.preventDefault();
            if (inputValue.length >= 5) {
            // submit form
            } else {
            setInputError('Input must be at least 5 characters');
            }
            }
            return (
            <form onSubmit={handleSubmit}>
            <label>
            Fruit:
            <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
            <button type="submit">Submit</button>
            </form>
            );
           }
           import { useRef } from "react";
export default function Uncontrolled() {
 const selectRef = useRef(null);
 const checkboxRef = useRef(null);
 const inputRef = useRef(null);
 function handleSubmit(event) {
 event.preventDefault();
 console.log("Input value:", inputRef.current.value);
 console.log("Select value:", selectRef.current.value);
 console.log("Checkbox value:", checkboxRef.current.checked);
 }
 return (
    <form onSubmit={handleSubmit}>
    <label>
    <p>Name:</p>
    <input ref={inputRef} type="text" />
    </label>
    <label>
    <p>Favorite color:</p>
    <select ref={selectRef}>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    </select>
    </label>
    <label>
    Do you like React?
    <input type="checkbox" ref={checkboxRef} />
    </label>
    <button type="submit">Submit</button>
    </form>
    );
   }
   import { useForm } from 'react-hook-form';
   function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
    console.log(data);
    };
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Email</label>
    <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
    {errors.email && <p>Email is required and must be valid</p>}
    <label>Password</label>
    <input type="password" {...register("password", { required: true })} />
    {errors.password && <p>Password is required</p>}
    <button type="submit">Submit</button>
    </form>
    );
   }
      
           