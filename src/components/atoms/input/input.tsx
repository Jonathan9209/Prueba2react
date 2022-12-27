import "./input.scss"


const Input = () => {

    return <input 
    onChange={()=> console.log("está escribiendo")}
    className="input" placeholder="Gift Url"/>;
};

export default Input;