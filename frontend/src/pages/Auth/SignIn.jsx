import Login from '../../assets/Logo/login.jpg';
import { ToastContainer , toast } from 'react-toastify';
import { useNavigate , NavLink } from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import { useEffect, useState } from 'react';
import Google from '../../assets/Logo/google.svg'

const baseurl = import.meta.env.VITE_BASE_URL



const SignIn = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        if(!email.trim()){
            toast.error('Please enter your email');
            return;
        }
        if(!password.trim()){
            toast.error("Please enter your password");
            return;
        }

        try {
            const response = await fetch(`${baseurl}/sigin` , {
                method : 'Post',
                body : JSON.stringify({email , password}),
                headers : {
                    'Content-Type' : 'application/json'
                }
            });

            const result = await response.json();
            console.log(result);

            if(result.name){
                localStorage.setItem('user' , JSON.stringify(result));
                toast.success("Logged In Successfully" , {
                    onClose : () => navigate('/services'),
                    autoClose : 1000,
                });
            }else{
                toast.error("Invalid Credentials");
            }
        }catch(error){
            console.log("error during login:" , error);
            toast.error("An error occured during login");
        }
    }


    return (
        <>
        <ToastContainer />
        <div className='mx-auto max-w-full md:py-10'>
                <div className='w-full grid items-center py-12 justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2'>
 
                 {/* Contact form   */}
                <div className='w-full flex items-center justify-center'>
                    <div className='w-full px-10'>
                        <p className='text-2xl font-bold text-green-700 md:text-4xl'>
                            Sign in
                        </p>
                        <p className='mt-2 text-sm text-gray-600'>
                            Don't have an account?{' '}
                            <NavLink to='/signup'>
                            <a href="#" className='hover:underline font-semibold text-green-700'>
                                create a free account
                            </a>
                            </NavLink>
                        </p>
                        <form action="" className='mt-8 space-y-4'>
                             <div className='grid w-full items-center gap-1.5'>
                                <label htmlFor="email" 
                                className='text-sm  leading-none text-gray-700 font-semibold'
                                >
                                    Email adderess
                                </label>
                                <input type="email"
                                className=' h-10 w-full rounded-md border border-gray-300
                                bg-transparent px-3 py-2 text-sm placeholder:text-gray-400'
                                id='email'
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                />
                             </div> 
                             <div className='grid w-full items-center gap-1.5'>
                                <div className='flex items-center justify-between'>
                                    <label htmlFor="password" 
                                        className='text-sm font-medium leading-none text-gray-700 
                                        peer-disabled:opacity-70'
                                        >
                                        Password
                                    </label>
                                    <NavLink to='/contact' className='text-sm hover:underline text-gray-700 font-semibold'>
                                    Contact Us?
                                    </NavLink>
                                </div>
                                <input type="password"
                                className=' h-10 w-full rounded-md border border-gray-300
                                bg-transparent px-3 py-2 text-sm placeholder:text-gray-400
                                disabled:cursor-not-allowed disabled:opacity-50'
                                id='password'
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                />
                             </div> 
                             <button
                             type='button'
                             className='cursor-pointer inline-flex items-center justify-center w-full rounded-md bg-green-700 px-3
                             py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80'
                             onClick={handleLogin}
                             >
                             Get started <ArrowRight className='ml-2' size={16} />
                             </button>
                             <button
                             type='button'
                             className='cursor-pointer inline-flex items-center justify-center w-full rounded-md border-1 px-3
                             py-2 text-sm font-medium bg-transparent shadow-sm hover:bg-black/40'
                            //  onClick={collectData}
                             >
                             <img src={Google} alt="icon" width={25} height={35} className='mr-2' />{" "} Sign in with Google
                             </button>
                        </form>
                    </div>
                </div>
                    <img
                    alt="Contact us"
                    className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                    src={Login}
                    />
                </div>
            </div>
            <span></span>
        </>
    )
}

export default SignIn;
