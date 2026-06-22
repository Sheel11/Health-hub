import Img1 from '../../assets/Logo/img1.png'
import Book from '../../assets/Logo/book.png'
import Experience from '../../assets/Logo/experience.png'
import Schedule from '../../assets/Logo/schedule.png'
import Thumb from '../../assets/Logo/thumb.png'
import Frame from '../../assets/Logo/frame.png'
// import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import Faq from '../../components/Landing/Faqs'
import {ToastContainer } from 'react-toastify'


const Landing = () => {
    return(
        <div className='w-full'>
            <ToastContainer/>
            <div className='w-full bg-white'>
                <div className='mx-auto max-w-xxl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
                 <div className='flex flex-col justify-center px-4 py-12 md:py-16 lg:gap-x-6 lg:px-6 lg:col-span-6 lg:py-24 xl:col-span-6'>
                    <h1 className='mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl text-center' style={{color : '#33805D'}}>
                        The next Generation of care for children and Families          
                    </h1>
                    <p className='mt-8 text-lg text-gray-700 text-center'>
                     Get 24/7 on demand Virtual care. Or book same/next appoinments online.
                    </p>
                 </div>
                 <div className='lg:col-span-5 lg:-mr-8 xl:col-span-6'>
                    <img 
                    className='aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3]
                    lg:h-[700px]  xl:aspect-[16/9]'
                    src={Img1} 
                    alt="hero section img" 
                    height={500}
                    width={850}
                    />
                 </div>
                </div>
            </div>
            {/* Features Section Start  */}
            <div className='mx-auto my-0 max-w-full px-2 lg:px-8'>
                <div className='grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4'>
                     <div>
                        <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100'>
                            <img src={Thumb} alt="img of thumb" 
                            className='h-23 w-23 '/>
                        </div>
                        <h3 className='mt-8 text-lg font-semibold text-black'>Experience</h3>
                        <p className='mt-4 text-sm text-gray-600'>
                            Combined, our doctor have great experience. They are ready to put it to action for you!
                        </p>
                    </div>
                    <div>
                        <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100'>
                            <img src={Book} alt="img of thumb" 
                            className='h-23 w-23 '/>
                        </div>
                        <h3 className='mt-8 text-lg font-semibold text-black'>Easy Booking</h3>
                        <p className='mt-4 text-sm text-gray-600'>
                            Booking an appointment at our healthHub is as easy as doing 2 clicks !
                        </p>
                    </div>
                    <div>
                        <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100'>
                            <img src={Experience} alt="img of thumb" 
                            className='h-23 w-23 '/>
                        </div>
                        <h3 className='mt-8 text-lg font-semibold text-black'>Flexible</h3>
                        <p className='mt-4 text-sm text-gray-600'>
                            Available during holidays besides working 24/7 during the regular days. In case of emergencies we accept weekend bookings.
                        </p>
                    </div>
                    <div>
                        <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100'>
                            <img src={Schedule} alt="img of thumb" 
                            className='h-23 w-23 '/>
                        </div>
                        <h3 className='mt-8 text-lg font-semibold text-black'>Best Results</h3>
                        <p className='mt-4 text-sm text-gray-600'>
                            We treated many patients across India and obtained excellent feedbacks. 
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQS  */}
            <section className='mx-auto bg-gray-50 px-2 py-10 md:px-0'>
                  <div>
                    <div className='mx-auto max-w-2xl lg:text-center'>
                        <h2 className='text-3xl font-bold leading-tight
                        text-black sm:text-4xl lg:text-5xl' style={{color : '#116D6E'}}>
                            Why Choose Healthhub?
                        </h2>
                        <p className='mt-4 max-w-xl text-base leading-relaxed
                        text-gray-600 lg:mx-auto'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
                        </p>
                    </div>
                    <div className='mx-auto mt-8 max-w-3xl space-y-4 md:mt-16'>
                        <Faq question='How do I get started?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                        iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?'/>
                        <Faq question='What is the difference between a free and paid account?
                         ' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                        iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?'/>
                       <Faq question='What is the difference between a free and paid account?
                         ' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                        iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?'/>
                       <div>
                        <p className='mt-6 text-center text-gray-600'>Can't find what you're looking for?
                            <a href='/contact' className='font-semibold text-black hover:underline'> Contact our support
                            </a>
                        </p>
                       </div>
                    </div>
                  </div>
            </section>

            {/* Pricing Section Start  */}
            <div className='w-full bg-white'>
                <div className='mx-auto max-w-xxl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
                  <div className='lg:col-span-5 lg:-mr-8 xl:col-span-6'>
                    <img 
                    className='aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3]
                    lg:h-[600px]  xl:aspect-[16/9]'
                    src={Frame} 
                    alt="hero section img" 
                    height={10}
                    width={700}
                    />
                 </div>
                 <div className='flex flex-col justify-center px-4 py-12 md:py-16 lg:gap-x-6 lg:px-6 lg:col-span-6 lg:py-24 xl:col-span-6'>
                    <h1 className='mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl' style={{color : '#33805D'}}>
                        Complete Medical Solutions in One Place                    
                    </h1>
                    <p className='mt-8 text-lg text-gray-700'>
                     At Heathcare we offer our customers access to latest developments in medicare we continuously expand our services to better serve patients with dignity and respect.                    </p>
                 </div>
                
                </div>
            </div>
        </div>
    )
}

export default Landing;