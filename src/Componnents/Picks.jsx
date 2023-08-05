import Heart from '../assets/heart.svg'
import Sellar1 from '../assets/sellar1.jpg'
import Sellar2 from '../assets/sellar2.jpg'
import Sellar3 from '../assets/sellar3.jpg'
import Sellar4 from '../assets/sellar4.jpg'
import Sellar5 from '../assets/sellar5.jpg'
import Sellar6 from '../assets/sellar6.jpg'
import Sellar7 from '../assets/sellar7.jpg'
import Sellar8 from '../assets/sellar8.jpg'
import pick1 from '../assets/picks/pick1.jpg'
import pick2 from '../assets/picks/pick2.jpg'
import pick3 from '../assets/picks/pick3.jpg'
import pick4 from '../assets/picks/pick4.jpg'
import pick5 from '../assets/picks/pick5.jpg'
import pick6 from '../assets/picks/pick6.jpg'
import pick7 from '../assets/picks/pick7.jpg'
import pick8 from '../assets/picks/pick8.jpg'
import '../styles/auctions.css'
function Picks() {
    return (
        <div className='Picks mt-[50px]'>
            <div className='container_padding'>
                <div className='flex title_div  justify-between items-center w-[100%] sm:flex-wrap-reverse' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                    <h3 className='text-[30px] font-bold text-white' >Today's Picks</h3>
                    <div>
                        <h3 className='text-[15px]  font-bold text-white ml-[15px] relative'>
                            <a href="#" className='after_title relative'>
                                EXPLORE MORE
                            </a>
                        </h3>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-2 mt-[40px] text-white sm:grid-cols-1'>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <div className='inside_item relative '>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px] text-white' />
                                100</span>
                            <img src={pick1} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    The RenaiXance Risin...
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={Sellar1} className='object-cover rounded-[10px] w-[40px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>Salva</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div className='button mt-[20px]'>
                            <button className='place_pid text-black w-[150px] p-[10px] text-bold  rounded-[20px] flex items-center justify-center  text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="400">
                        <div className='inside_item relative '>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px] text-white' />
                                100</span>
                            <img src={pick2} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    The RenaiXance Risin...
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={Sellar2} className='object-cover rounded-[10px] w-[40px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>Salva</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div className='button mt-[20px]'>
                            <button className='place_pid text-black w-[150px] p-[10px] text-bold  rounded-[20px] flex items-center justify-center  text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="500">
                        <div className='inside_item relative '>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px] text-white' />
                                100</span>
                            <img src={pick3} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    The RenaiXance Risin...
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={Sellar3} className='object-cover rounded-[10px] w-[40px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>Salva</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div className='button mt-[20px]'>
                            <button className='place_pid text-black w-[150px] p-[10px] text-bold  rounded-[20px] flex items-center justify-center  text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="600">
                        <div className='inside_item relative '>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px] text-white' />
                                100</span>
                            <img src={pick4} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    The RenaiXance Risin...
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={Sellar4} className='object-cover rounded-[10px] w-[40px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>Salva</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div className='button mt-[20px]'>
                            <button className='place_pid text-black w-[150px] p-[10px] text-bold  rounded-[20px] flex items-center justify-center  text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-2 mt-[40px] text-white sm:grid-cols-1'>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="700">
                        <div className='inside_item relative '>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px] text-white' />
                                100</span>
                            <img src={pick5} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    The RenaiXance Risin...
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={Sellar5} className='object-cover rounded-[10px] w-[40px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>Salva</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div className='button mt-[20px]'>
                            <button className='place_pid text-black w-[150px] p-[10px] text-bold  rounded-[20px] flex items-center justify-center  text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="800">
                        <div className='inside_item relative '>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px] text-white' />
                                100</span>
                            <img src={pick6} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    The RenaiXance Risin...
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={Sellar6} className='object-cover rounded-[10px] w-[40px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>Salva</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div className='button mt-[20px]'>
                            <button className='place_pid text-black w-[150px] p-[10px] text-bold  rounded-[20px] flex items-center justify-center  text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="900">
                        <div className='inside_item relative '>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px] text-white' />
                                100</span>
                            <img src={pick7} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    The RenaiXance Risin...
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={Sellar7} className='object-cover rounded-[10px] w-[40px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>Salva</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div className='button mt-[20px]'>
                            <button className='place_pid text-black w-[150px] p-[10px] text-bold  rounded-[20px] flex items-center justify-center  text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="1000">
                        <div className='inside_item relative '>
                            <span className='w-[70px] flex justify-center p-[5px] rounded-[5px] bg-black absolute top-[20px] right-[10px]'>
                                <img src={Heart} className='w-[24px] text-white' />
                                100</span>
                            <img src={pick8} className='object-cover rounded-[20px] w-[100%] ' alt="slider" />
                        </div>
                        <div className='Button_side flex w-[100%] mt-[20px] justify-between'>
                            <h5 className='text-white  font-semibold text-[15px]'>
                                <a href="#">
                                    The RenaiXance Risin...
                                </a>
                            </h5>
                            <span className='pt-[3px] bg-[#5142FC] flex justify-center items-center w-[50px] text-[12px] text-center rounded-[4px] font-semibold'>BSC</span>
                        </div>
                        <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                            <div className='avatr_image flex'>
                                <div className='avatar'>
                                    <img src={Sellar8} className='object-cover rounded-[10px] w-[40px]' />
                                </div>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Creator</h5>
                                    <h3 className='font-bold text-[16px] text-white'>Salva</h3>
                                </div>
                            </div>

                            <div className='ethrum'>
                                <div className='name mt-[3px] ml-[10px]'>
                                    <h5 className='text-[12px] text-[#8A8AA0]'>Current Bid</h5>
                                    <h3 className='font-bold text-[18px] text-white'>4.89 ETH</h3>
                                </div>
                            </div>
                        </div>
                        <div className='button mt-[20px]'>
                            <button className='place_pid text-black w-[150px] p-[10px] text-bold  rounded-[20px] flex items-center justify-center  text-center flex left-[33%]'>
                                <svg viewBox="0 0 448 512" width="17px" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M416 160h-72V120C344 53.83 290.2 0 224 0S104 53.83 104 120V160H32C14.33 160 0 174.3 0 192v240C0 476.2 35.82 512 80 512h288c44.18 0 80-35.82 80-80V192C448 174.3 433.7 160 416 160zM152 120C152 80.3 184.3 48 224 48s72 32.3 72 72V160h-144V120zM128 248C114.8 248 104 237.3 104 224S114.8 200 128 200S152 210.8 152 224S141.3 248 128 248zM320 248c-13.25 0-24-10.75-24-24S306.8 200 320 200S344 210.8 344 224S333.3 248 320 248z" /></svg>
                                <h5 className='font-bold ml-[10px] mt-[4px]'>Place Bid</h5>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Picks