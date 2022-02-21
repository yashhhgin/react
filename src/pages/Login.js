import React, {useState} from "react";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import './../config/firebase'

function Login(){

    const [form,setForm] = useState({email:"",password:""});

    const [isLoading,setIsLoading] = useState(false);
    const [errors,setErrors] = useState("");

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        if(isLoading) return;

        setErrors("")

        setIsLoading(true);

        const auth = getAuth();

        signInWithEmailAndPassword(auth,form.email,form.password)
            .then(() => {
                setIsLoading(false);
                history.replace("/");
            }).catch((e) => {
                setErrors(e.message);
                setIsLoading(false);
            })
    }

    function handleForm(e){
        setForm({...form,[e.target.name]:e.target.value});
    }

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
                <form className="m-5 w-10/12" onSubmit={handleSubmit}>
                    {
                        errors !== "" && <p>{errors}</p>
                    }
                    <h1 className="w-full text-4xl tracking-widest text-center my-6">
                        Login
                    </h1>
                    <div className="w-full my-6">
                        <input value={form.email} type="email" className="p-2 rounded shadow w-full text-black" placeholder="Email or Username" name="email" onChange={handleForm}/>
                    </div>
                    <div className="w-full my-6">
                        <input value={form.password} type="password" className="p-2 rounded shadow w-full text-black" placeholder="password" name="password" onChange={handleForm}/>
                    </div>
                    <div className="w-full my-10">
                        <button type="submit" className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
                            {
                                isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : "login"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login