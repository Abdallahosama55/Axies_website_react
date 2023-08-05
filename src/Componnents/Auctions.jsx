import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carditem from '../assets/carditem.jpg'
import carditem2 from '../assets/carditem2.jpg'
import carditem3 from '../assets/carditem3.jpg'
import Heart from '../assets/heart.svg'
import avatar from '../assets/avatar.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import Modal from './modal'
// import Modal from 'react-modal';
import '../styles/auctions.css'
// import './slider.css'
function Auctions() {
    const current = new Date();
    const seconds = current.getSeconds()
    const date = `${current.getDay()}:${current.getMinutes()}:${current.getHours()}:${seconds}`;

    setInterval(seconds, 1000);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [showModal, setShowModal] = useState(false)
    return (
        <div className='relative'>
            {showModal && <Modal close={setShowModal} />}
            <div className='container_padding mt-[60px] relative'>
                <div className='flex title_div  justify-between items-center w-[100%] sm:flex-wrap-reverse'>
                    <h3 className='text-[30px] font-bold text-white ml-[15px]'>Live Auctions</h3>
                    <div>
                        <h3 className='text-[15px]  font-bold text-white ml-[15px] relative'>
                            <a href="#" className='after_title relative'>
                                EXPLORE MORE
                            </a>
                        </h3>
                    </div>
                </div>
                <Carousel responsive={responsive} showDots={false} className='relative text-white mt-[30px]' transitionDuration={60} >
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1200">
                        <div className='inside_item relative '>
                            <button onClick={() => setShowModal(true)} className='text-black hover_div w-[150px] p-[10px] text-bold bg-white rounded-[20px] flex items-center justify-center absolute top-[30%] text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#4b50e6" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px]' />
                                100</span>
                            <img src={carditem} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                            <span className=' colored_span rounded-[20px] p-[6px] text-bold text-[20px] bg-[#343444] w-[170px]  pr-[20px] pl-[20px]  justify-between absolute items-center top-[87%] flex left-[32%] text-center sm:top-[80%] sm:left-[21%]'>
                                <svg className='svg_color' data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M12,4a9,9,0,1,0,9,9A9,9,0,0,0,12,4Zm0,16a7,7,0,1,1,7-7A7,7,0,0,1,12,20ZM21.19,3.81A12.88,12.88,0,0,0,17.06,1l-.78,1.84a11.08,11.08,0,0,1,3.5,2.36,11.43,11.43,0,0,1,1.87,2.49l1.75-1A13.19,13.19,0,0,0,21.19,3.81Zm-13.47-1L6.94,1A12.88,12.88,0,0,0,2.81,3.81,13.19,13.19,0,0,0,.6,6.74l1.75,1A11.43,11.43,0,0,1,4.22,5.22,11.08,11.08,0,0,1,7.72,2.86ZM15,10.15H9v1.7h2.67l-2.84,4H15v-1.7H12.12Z" /></svg> {date}
                            </span>
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    Hamlet Contemplates Contemplates....
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={avatar} className='object-cover rounded-[10px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>SalvaDorDail</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300" >
                        <div className='inside_item relative '>
                            <button onClick={() => setShowModal(true)} className='text-black hover_div w-[150px] p-[10px] text-bold bg-white rounded-[20px] flex items-center justify-center absolute top-[30%] text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#4b50e6" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px]' />
                                100</span>
                            <img src={carditem2} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                            <span className=' colored_span rounded-[20px] p-[6px] text-bold text-[20px] bg-[#343444] w-[170px]  pr-[20px] pl-[20px]  justify-between absolute items-center top-[87%] flex left-[32%] text-center sm:top-[80%] sm:left-[21%]'>
                                <svg className='svg_color' data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M12,4a9,9,0,1,0,9,9A9,9,0,0,0,12,4Zm0,16a7,7,0,1,1,7-7A7,7,0,0,1,12,20ZM21.19,3.81A12.88,12.88,0,0,0,17.06,1l-.78,1.84a11.08,11.08,0,0,1,3.5,2.36,11.43,11.43,0,0,1,1.87,2.49l1.75-1A13.19,13.19,0,0,0,21.19,3.81Zm-13.47-1L6.94,1A12.88,12.88,0,0,0,2.81,3.81,13.19,13.19,0,0,0,.6,6.74l1.75,1A11.43,11.43,0,0,1,4.22,5.22,11.08,11.08,0,0,1,7.72,2.86ZM15,10.15H9v1.7h2.67l-2.84,4H15v-1.7H12.12Z" /></svg> {date}
                            </span>
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    Hamlet Contemplates Contemplates....
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={avatar2} className='object-cover rounded-[10px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>SalvaDorDail</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300" >
                        <div className='inside_item relative '>
                            <button onClick={() => setShowModal(true)} className='text-black hover_div w-[150px] p-[10px] text-bold bg-white rounded-[20px] flex items-center justify-center absolute top-[30%] text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#4b50e6" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px]' />
                                100</span>
                            <img src={carditem3} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                            <span className=' colored_span rounded-[20px] p-[6px] text-bold text-[20px] bg-[#343444] w-[170px]  pr-[20px] pl-[20px]  justify-between absolute items-center top-[87%] flex left-[32%] text-center sm:top-[80%] sm:left-[21%]'>
                                <svg className='svg_color' data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M12,4a9,9,0,1,0,9,9A9,9,0,0,0,12,4Zm0,16a7,7,0,1,1,7-7A7,7,0,0,1,12,20ZM21.19,3.81A12.88,12.88,0,0,0,17.06,1l-.78,1.84a11.08,11.08,0,0,1,3.5,2.36,11.43,11.43,0,0,1,1.87,2.49l1.75-1A13.19,13.19,0,0,0,21.19,3.81Zm-13.47-1L6.94,1A12.88,12.88,0,0,0,2.81,3.81,13.19,13.19,0,0,0,.6,6.74l1.75,1A11.43,11.43,0,0,1,4.22,5.22,11.08,11.08,0,0,1,7.72,2.86ZM15,10.15H9v1.7h2.67l-2.84,4H15v-1.7H12.12Z" /></svg> {date}
                            </span>
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    Hamlet Contemplates Contemplates....
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={avatar3} className='object-cover rounded-[10px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>SalvaDorDail</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Auctions