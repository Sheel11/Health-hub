import { useEffect, useState } from 'react'
import '../../index.css'
import {toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import contact from '../../assets/Logo/contact1.jpg'

const baseurl = import.meta.env.VITE_BASE_URL

const Contact = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [cno, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isloggedin, setIsLoggedIn] = useState(false);
    const [userdata, setUserData] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
            const userData = JSON.parse(auth);
            setIsLoggedIn(true);
            setUserData(userData || '');
            setEmail(userData.email || '');
            setNumber(userData.cno || '');
        }else{
            setIsLoggedIn(false);
            setUserData(" ");
        }
    } , [])

    const collectData = async() => {
        console.warn(name ||userdata.name , email || userdata.email , cno || userdata.cno , message);
        let result = await fetch(`${baseurl}/contact`,{
            method : 'post',
            body : JSON.stringify({name , email , cno , message}),
            headers : {
                'Content-Type' : 'application/json'
            },
        })

        result = await result.json();
        console.warn(result);

        if(result.name){
            setUserData("");
            setEmail("");
            setNumber("");
            setMessage("");
            setNumber("");
            setName("");
            toast.success("Message send successfully" , {

                onClose : () => navigate('/contact'),
            });
        }

    }



    return(
        <>
        <ToastContainer/>
        <section>
          <div>
            <div className='flex flex-col space-y-8 pb-10 pt-12 md:pt-24'>
                <p className='text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10'>
                   Feel free to send us a message
                </p>
                <p className='mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl'>
                    We value your feedback!Share your experience with us so we can improve our services and make them better for you
                </p>
            </div>
            <div className='mx-auto max-w-7xl py-12 md:py-24'>
                <div className='grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2'>
 
                 {/* Contact form   */}
                <div className='flex items-center justify-center'>
                    <div className='px-2 md:px-12'>
                        <p className='text-2xl font-bold text-gray-900 md:text-4xl'>
                            Get in touch
                        </p>
                        <p className='mt-4 text-lg text-gray-600'>
                            Our friendly team would love to hear from you.
                        </p>
                        <form action="" className='mt-8 space-y-4'>
                          <div className='grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2'>
                             <div className='grid w-full items-center gap-1.5'>
                                <label htmlFor="first_name" 
                                className='text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed
                                peer-disabled:opacity-70'
                                >
                                    First Name
                                </label>
                                <input type="text"
                                className=' h-10 w-full rounded-md border border-gray-300
                                bg-transparent px-3 py-2 text-sm placeholder:text-gray-400
                                disabled:cursor-not-allowed disabled:opacity-50'
                                id='first_name'
                                placeholder='First Name'
                                onChange={(e) => setName(e.target.value)}
                                value={isloggedin ? userdata.name || name : name}
                                disabled = {isloggedin}
                                />
                             </div> 
                         </div>
                             <div className='grid w-full items-center gap-1.5'>
                                <label htmlFor="email" 
                                className='text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed
                                peer-disabled:opacity-70'
                                >
                                    Email
                                </label>
                                <input type="email"
                                className=' h-10 w-full rounded-md border border-gray-300
                                bg-transparent px-3 py-2 text-sm placeholder:text-gray-400
                                disabled:cursor-not-allowed disabled:opacity-50'
                                id='email'
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={isloggedin ? userdata.email || email : email}
                                disabled = {isloggedin}
                                />
                             </div> 
                             <div className='grid w-full items-center gap-1.5'>
                                <label htmlFor="phone_number" 
                                className='text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed
                                peer-disabled:opacity-70'
                                >
                                    Phone Number
                                </label>
                                <input type="tel"
                                className=' h-10 w-full rounded-md border border-gray-300
                                bg-transparent px-3 py-2 text-sm placeholder:text-gray-400
                                disabled:cursor-not-allowed disabled:opacity-50'
                                id='phone_number'
                                placeholder='Phone Number'
                                onChange={(e) => setNumber(e.target.value)}
                                value={isloggedin ? userdata.cno || cno : cno}
                                disabled = {isloggedin}
                                />
                             </div> 
                             <div className='grid w-full items-center gap-1.5'>
                                <label htmlFor="message" 
                                className='text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed
                                peer-disabled:opacity-70'
                                >
                                    Message
                                </label>
                                 <textarea name="" id="message"
                                 className='flex h-10 w-full rounded-md border border-gray-300
                                 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400'
                                 placeholder='Leave us a message'
                                 onChange={(e) => setMessage(e.target.value)}
                                 value={message}
                                 cols={2}
                                 ></textarea>
                             </div> 
                             <button
                             type='button'
                             className='cursor-pointer w-full rounded-md bg-black px-3
                             py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80'
                             onClick={collectData}
                             >
                             Send Message
                             </button>
                        </form>
                    </div>
                </div>
                    <img
                    alt="Contact us"
                    className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                    src={contact}
                    />
                </div>
            </div>
            <hr className='mt-6 text-gray-300'/>
           </div>  
        </section>

        <div>

        </div>
        </>
    )
}

export default Contact;
