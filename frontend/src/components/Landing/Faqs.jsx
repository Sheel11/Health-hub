import { useState } from "react"
import { CheckCircle, ChevronDown, ChevronUp,  Star, } from 'lucide-react'

const Faq = (props) => {
    const [toggleFaq , setFaq] = useState(false);
    return(
        <>
        <div className='cursor-pointer rounded-md border border-gray-400 transition-all duration-200'>
                            <button
                            type='button'
                            className='cursor-pointer flex w-full items-center justify-between px-4 py-5 sm:p-6'
                            onClick={() => setFaq(!toggleFaq)}
                            >
                                <span className='flex text-lg font-semibold text-black'
                                style={{color : '#116D6E'}}
                                >{props.question}</span>
                                {toggleFaq ? <ChevronUp className='h-5 w-5 text-gray-500'/> : <ChevronDown className='h-5 w-5 text-gray-500'/> }
                            </button>
                            {toggleFaq && (
                                <div className='px-4 pb-5 sm:px-6'>
                                    <p className='text-gray-500'>
                                        {props.answer}
                                    </p>
                                </div>
                            )}

                        </div>
        </>
    )
}

export default Faq;