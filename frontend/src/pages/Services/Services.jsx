import Symtom from '../../assets/Logo/symptom.jpg'
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from 'react-router-dom'

const Service = () => {
      const disease = localStorage.getItem('disease');
      
      const notify = () => {
        toast.success("Check Disease First!")
      }

    return(
        <>
        <ToastContainer/>
        <div className='mx-auto max-w-7xl px-4'>
            <div className='flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row'>
                <div className='space-y-6'>
                    <p className='text-sm font-semibold md:text-base'>
                        Join Us&rarr;
                    </p>
                    <p className='text-3xl font-semibold 
                     md:text-4xl' style={{color : '#33805D'}}>
                        Predict your Disease Now
                    </p>
                    <p className='text-base text-gray-600 md:text-lg'>
                    Take control of your health - try our symptom checker today and stay informed about your well-being!
                    </p>
                    <br />
                    <NavLink to="/input">
                     <button
                     type='button'
                     className='cursor-pointer mr-4 rounded-md bg-black px-3 py-2.5 text-sm 
                     font-semibold text-white shadow-sm hover:bg-black/80 '
                     style={{backgroundColor: "#33805D"}}
                     >
                        Check Disease
                     </button>
                    </NavLink>
                    {
                        disease ?
                        <NavLink to='/result'>
                            <button
                            type='button'
                            className='cursor-pointer rounded-md bg-black px-3 py-2.5 text-sm
                            font-semibold text-white shadow-sm hover:bg-black/80 '
                            style={{backgroundColor: "#33805D"}}
                            >
                              Show Result
                            </button>
                        </NavLink>
                        :
                        <button
                            type='button'
                            className='cursor-pointer rounded-md bg-black px-3 py-2.5 text-sm
                            font-semibold text-white shadow-sm hover:bg-black/80 '
                            style={{backgroundColor: "#33805D"}}
                            onClick={notify}
                            >
                              Show Result
                        </button>
                    }
                    </div>
                    <div className='md:mt-0 mt-10 w-full'>
                        <img src={Symtom} alt="img" 
                        className='rounded-lg'
                        />
                    </div>
            </div>
        </div>
        </>
    )
}

export default Service;