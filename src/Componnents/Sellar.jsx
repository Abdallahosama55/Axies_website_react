import Sellar1 from '../assets/sellar1.jpg'
import Sellar2 from '../assets/sellar2.jpg'
import Sellar3 from '../assets/sellar3.jpg'
import Sellar4 from '../assets/sellar4.jpg'
import Sellar5 from '../assets/sellar5.jpg'
import Sellar6 from '../assets/sellar6.jpg'
import Sellar7 from '../assets/sellar7.jpg'
import Sellar8 from '../assets/sellar8.jpg'
import '../styles/sellar.css'
function Sellar() {
    return (
        <div className='mt-[70px] container_padding'>
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000" data-aos-delay="300">
                <h1 className='font-bold text-white text-[30px]'>Top Sellar</h1>
            </div>
            <div className="avatars">
                <div className="flex sm:flex-wrap-reverse sm:justify-center">
                    <div className="p-[20px]  text-center " data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">

                        <img src={Sellar1} className="object-cover rounded-[30px]" />
                        <h3 className='text-white text-[15px] font-bold mt-[4px]'>Crispin Berry</h3>
                        <h6 className='text-white text-[12px] font-bold'>214.2ETH</h6>
                    </div>
                    <div className="p-[20px]  text-center" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <img src={Sellar2} className="object-cover rounded-[30px]" />
                        <h3 className='text-white text-[15px] font-bold mt-[4px]'>Crispin Berry</h3>
                        <h6 className='text-white text-[12px] font-bold'>214.2ETH</h6>
                    </div>
                    <div className="p-[20px]  text-center" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <img src={Sellar3} className="object-cover rounded-[30px]" />
                        <h3 className='text-white text-[15px] font-bold mt-[4px]'>Crispin Berry</h3>
                        <h6 className='text-white text-[12px] font-bold'>214.2ETH</h6>
                    </div>
                    <div className="p-[20px]  text-center" data-aos="fade-up-right" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <img src={Sellar4} className="object-cover rounded-[30px]" />
                        <h3 className='text-white text-[15px] font-bold mt-[4px]'>Crispin Berry</h3>
                        <h6 className='text-white text-[12px] font-bold'>214.2ETH</h6>
                    </div>
                    <div className="p-[20px]  text-center" data-aos="fade-up-left" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <img src={Sellar5} className="object-cover rounded-[30px]" />
                        <h3 className='text-white text-[15px] font-bold mt-[4px]'>Crispin Berry</h3>
                        <h6 className='text-white text-[12px] font-bold'>214.2ETH</h6>
                    </div>
                    <div className="p-[20px]  text-center" data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <img src={Sellar6} className="object-cover rounded-[30px]" />
                        <h3 className='text-white text-[15px] font-bold mt-[4px]'>Crispin Berry</h3>
                        <h6 className='text-white text-[12px] font-bold'>214.2ETH</h6>
                    </div>
                    <div className="p-[20px]  text-center" data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-duration="2000" data-aos-delay="300">
                        <img src={Sellar7} className="object-cover rounded-[30px]" />
                        <h3 className='text-white text-[15px] font-bold mt-[4px]'>Crispin Berry</h3>
                        <h6 className='text-white text-[12px] font-bold'>214.2ETH</h6>
                    </div>
                    <div className="p-[20px]  text-center" data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-duration="2000" data-aos-delay="300">
                        <img src={Sellar8} className="object-cover rounded-[30px]" />
                        <h3 className='text-white text-[15px] font-bold mt-[4px]'>Crispin Berry</h3>
                        <h6 className='text-white text-[12px] font-bold'>214.2ETH</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sellar