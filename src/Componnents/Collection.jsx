import React from 'react'
// import Heart from '../assets/heart.svg'
import Collaction1 from '../assets/collaction/colaction1.jpg'
import Collaction2 from '../assets/collaction/coll2.jpg'
import Collaction3 from '../assets/collaction/coll3.jpg'
import Collaction4 from '../assets/collaction/coll4.jpg'
import Collaction5 from '../assets/collaction/coll5.jpg'
import Collaction6 from '../assets/collaction/coll6.jpg'
import Collaction7 from '../assets/collaction/coll7.jpg'
import Collaction8 from '../assets/collaction/coll8.jpg'
import Collaction9 from '../assets/collaction/coll9.jpg'
import Collaction10 from '../assets/collaction/coll10.jpg'
import Collaction11 from '../assets/collaction/coll11.jpg'
import Collaction12 from '../assets/collaction/coll12.jpg'
import Sellar2 from '../assets/sellar2.jpg'
import Sellar3 from '../assets/sellar3.jpg'
import Sellar4 from '../assets/sellar4.jpg'
function Collection() {
    return (
        <div className='Collection mt-[40px]'>
            <div className='container_padding'>
                <div className='flex title_div   justify-between items-center w-[100%] sm:flex-wrap-reverse' data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                    <h3 className='text-[30px] font-bold text-white ml-[15px]'>Popular Collection
                    </h3>
                    <div>
                        <h3 className='text-[15px]  font-bold text-white ml-[15px] relative'>
                            <a href="#" className='after_title relative'>
                                EXPLORE MORE
                            </a>
                        </h3>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2 mt-[30px] sm:grid-cols-1'>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px] sm:mt-[10px]' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <div className='inside_item relative '>
                            <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                                <div className='avatr_image flex'>
                                    <div className='avatar'>
                                        <img src={Sellar3} className='object-cover rounded-[10px] w-[60px]' />
                                    </div>
                                    <div className='name mt-[3px] ml-[10px]'>
                                        <h5 className='text-[18px] font-bold text-white'>Creative Art Collection</h5>
                                        <h3 className='text-[16px] text-white'><span className='text-[#8A8AA0] text-[14px]'>Created by</span>Raphla Garrawy</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-[17px] gap-2 sm'>
                            <div className='div_1'>
                                <img src={Collaction1} className='h-[91%] w-[100%] object-cover rounded-[10px]' />
                            </div>
                            <div className='div_2 h-[100%]'>
                                <div className='top_images flex'>
                                    <img src={Collaction2} className='h-[20%] w-[50%] object-cover rounded-[10px]' />
                                    <img src={Collaction3} className='h-[20%] w-[50%] ml-2  object-cover rounded-[10px]' />
                                </div>
                                <div className='mt-2 h-[70%]'>
                                    <img src={Collaction4} className=' object-cover rounded-[10px]' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]  sm:mt-[10px]' data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <div className='inside_item relative '>
                            <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                                <div className='avatr_image flex'>
                                    <div className='avatar'>
                                        <img src={Sellar2} className='object-cover rounded-[10px] w-[60px]' />
                                    </div>
                                    <div className='name mt-[3px] ml-[10px]'>
                                        <h5 className='text-[18px] font-bold text-white'>Creative Art Collection</h5>
                                        <h3 className='text-[16px] text-white'><span className='text-[#8A8AA0] text-[14px]'>Created by</span>Raphla Garrawy</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-[17px] gap-2'>
                            <div className='div_1'>
                                <img src={Collaction5} className='h-[91%] w-[100%] object-cover rounded-[10px]' />
                            </div>
                            <div className='div_2 h-[100%]'>
                                <div className='top_images flex'>
                                    <img src={Collaction6} className='h-[20%] w-[50%] object-cover rounded-[10px]' />
                                    <img src={Collaction7} className='h-[20%] w-[50%] ml-2  object-cover rounded-[10px]' />
                                </div>
                                <div className='flex mt-2'>
                                    <img src={Collaction8} className=' object-cover rounded-[10px]' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='padding_section bg-[#343444] p-[15px] rounded-[20px] ml-[15px]  sm:mt-[10px] ' data-aos="zoom-out-up" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="300">
                        <div className='inside_item relative '>
                            <div className='avatar_side flex w-[100%] justify-between mt-[10px]'>
                                <div className='avatr_image flex'>
                                    <div className='avatar'>
                                        <img src={Sellar4} className='object-cover rounded-[10px] w-[60px]' />
                                    </div>
                                    <div className='name mt-[3px] ml-[10px]'>
                                        <h5 className='text-[18px] font-bold text-white'>Creative Art Collection</h5>
                                        <h3 className='text-[16px] text-white'><span className='text-[#8A8AA0] text-[14px]'>Created by</span>Raphla Garrawy</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-[17px] gap-2'>
                            <div className='div_1'>
                                <img src={Collaction9} className='h-[91%] w-[100%] object-cover rounded-[10px]' />
                            </div>
                            <div className='div_2 h-[100%]'>
                                <div className='top_images flex'>
                                    <img src={Collaction10} className='h-[20%] w-[50%] object-cover rounded-[10px]' />
                                    <img src={Collaction11} className='h-[20%] w-[50%] ml-2  object-cover rounded-[10px]' />
                                </div>
                                <div className='flex mt-2'>
                                    <img src={Collaction12} className=' object-cover rounded-[10px]' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Collection