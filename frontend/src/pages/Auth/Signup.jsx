import { useEffect, useState } from "react";
import { useNavigate  , NavLink} from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

const baseurl = import.meta.env.VITE_BASE_URL



const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [cno, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const auth = localStorage.getItem('user');
  useEffect(() => {
    if (auth){
        navigate('/');
    }
  } , [auth , navigate])


  const collectData = async () => {
    const errors = {};

    if(!name.trim()){
        errors.name = "Name is required";
    }
    if(!email.trim()){
        errors.email = "Email is required";
    }else if(!/\S+@gmail\.com/.test(email)){
        errors.email = "Email is invalid";
    }

    if(!cno.trim()){
        errors.cno = "Contact number is required";
    }else if(!/^\d{10}$/.test(cno)){
        errors.cno = "Contact number must be 10 digits";
    }

    if(!gender){
        errors.gender = "Gender is required";
    }

    if(!password.trim()){
        errors.password = "Password is required";
    }else if(password.length < 6){
        errors.password = "Password must be at least 6 characters";
    }

    if(Object.keys(errors).length === 0){
        console.warn(name, email, dob, cno , gender, password);
        let result = await fetch(`${baseurl}/signup` , {
            method : 'post',
            body : JSON.stringify({name , email , dob , cno , gender , password}),
            headers : {
                'Content-Type' : 'application/json'
            },
        });

        if(result.status == 400){
            toast.error('Email already exist !!');
            setEmail('');
        }

        result = await result.json();


        if(result.name){
            localStorage.setItem("user" , JSON.stringify(result));
            navigate('/')
        }
    }else{
        setErrors(errors);
    }
   
  };

    return(
        <>
        <ToastContainer/>
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6
            sm:py-16 lg:px-8 lg:py-24 h-full">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm overflow-auto">
                    <h2 className="text-center text-2xl font-bold leading-tight text-black"> 
                          Sign up to create account
                    </h2>
                    <p className="mt-2 text-center text-base text-gray-600">
                        Already have an account?{' '}
                        <NavLink to='/signin' className='font-medium text-black'>
                            Sign In
                        </NavLink>
                    </p>
                    <form action="" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name"
                                className="text-base font-medium text-gray-900"
                                >
                                    {' '}
                                    Full Name{' '}
                                </label>
                                <div className="mt-2">
                                    <input type="text" 
                                    className="flex w-full h-10 rounded-md border border-gray-300 
                                    bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                                    id="name"
                                    value={name}
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                    />
                                   {errors.name && <p className="text-red-500">{errors.name}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email"
                                className="text-base font-medium text-gray-900"
                                >
                                    {' '}
                                     Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input type="email" 
                                    className="flex w-full h-10 rounded-md border border-gray-300 
                                    bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                                    id="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                   {errors.email && <p className="text-red-500">{errors.email}</p>}
                                </div>
                            </div>
                             <div>
                                <label htmlFor="dob"
                                className="text-base font-medium text-gray-900"
                                >
                                    {' '}
                                    Date of Birth{' '}
                                </label>
                                <div className="mt-2">
                                    <input type="date" 
                                    className="flex w-full  h-10 rounded-md border border-gray-300 
                                    bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                                    id="dob"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    />
                                   {errors.dob && <p className="text-red-500">{errors.dob}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact"
                                className="text-base font-medium text-gray-900"
                                >
                                    {' '}
                                    Contact Number{' '}
                                </label>
                                <div className="mt-2">
                                    <input type="tel" 
                                    className="flex w-full h-10 rounded-md border border-gray-300 
                                    bg-transparent px-3 py-2 text-sm placeholder:text-gray-400"
                                    id="contact"
                                    placeholder="Contact cno"
                                    value={cno}
                                    onChange={(e) => setNumber(e.target.value)}
                                    />
                                   {errors.cno && <p className="text-red-500">{errors.cno}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="gender"
                                className="text-base font-medium text-gray-900"
                                >
                                    {' '}
                                    Gender{' '}
                                </label>
                                <div className="mt-2">
                                    <select
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                                        id="gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.gender && <p className="text-red-500">{errors.gender}</p>}
                                </div>
                            </div>
                            <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-base font-medium text-gray-900">
                                    {' '}
                                    Password{' '}
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                onClick={collectData}
                                >
                                Create Account <ArrowRight className="ml-2" size={16} />
                            </button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default SignUp;