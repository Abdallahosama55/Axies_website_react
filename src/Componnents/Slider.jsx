import '../styles/slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Ropot from '../assets/slider/roptot.png'
import shabe from '../assets/slider/shabe.png'
import shaberotet from '../assets/slider/shaperotate.png'

import 'swiper/css';
function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className='text-white sm:h-[80vh]'
      >
        <SwiperSlide className='h-[100%]'>
          <div className='p-[20px] flex items-center h-[100%]'>
            <div className='text_section w-[50%] relative sm:w-[100%]' data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="2000">
              <img src={shaberotet} className='object-cover absolute top-[-185px] left-[-59px]' />
              <h2 className='text-[50px] sm:text-[40px] font-semibold'>Discover, find,</h2>
              <h2 className='text-[50px] sm:text-[40px] font-semibold backgorund_text'>Sell extraordinary</h2>
              <h2 className='text-[50px] sm:text-[40px] font-semibold'>Monster NFTs</h2>
              <p className='text-[25px] mt-[20px] text-[#cccc]'>Marketplace for monster character cllections non fungible token NFTs</p>
              <div className='buttons w-[100%] flex mt-[30px]'>
                <button className='wallet_button p-[15px] flex items-center rounded-[20px] text-white text-[14px] font-semibold items-center justify-between w-[130px] text-[17px]'>
                  <svg version="1.1" id="Layer_1" fill="white" width='20px' xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 110.66 122.879" enable-background="new 0 0 110.66 122.879" xml: space="preserve"><g><path d="M81.813,70.818c6.268,0,11.949,2.549,16.066,6.648c4.115,4.117,6.648,9.783,6.648,16.066c0,4.582-1.365,8.865-3.699,12.432 l9.832,10.715l-6.781,6.199l-9.484-10.432c-3.6,2.4-7.932,3.799-12.582,3.799c-6.266,0-11.949-2.549-16.064-6.648 c-4.117-4.117-6.65-9.783-6.65-16.064c0-6.268,2.551-11.949,6.65-16.066C69.863,73.35,75.531,70.818,81.813,70.818L81.813,70.818z M19.784,57.08c-1.445,0-2.649-1.308-2.649-2.89c0-1.617,1.169-2.89,2.649-2.89h22.639c1.445,0,2.649,1.308,2.649,2.89 c0,1.617-1.17,2.89-2.649,2.89H19.784L19.784,57.08z M84.879,17.582h9.496c1.859,0,3.58,0.757,4.783,1.995 c1.238,1.239,1.996,2.925,1.996,4.783v37.031c-0.203,2.121-5.41,2.148-5.85,0V24.359c0-0.275-0.104-0.516-0.275-0.688 c-0.172-0.172-0.412-0.275-0.688-0.275h-9.496v37.995c-0.506,1.924-4.838,2.213-5.814,0V6.778c0-0.275-0.104-0.516-0.275-0.688 c-0.172-0.172-0.414-0.275-0.689-0.275H6.744c-0.275,0-0.517,0.103-0.688,0.275C5.883,6.262,5.78,6.502,5.78,6.778v80.58 c0,0.275,0.103,0.516,0.275,0.688s0.413,0.275,0.688,0.275h42.53c2.929,0.301,3.017,5.365,0,5.814H22.054v10.803 c0,0.275,0.104,0.518,0.275,0.689s0.413,0.275,0.688,0.275h26.256c2.122,0.238,2.805,5.063,0,5.814H23.052 c-1.858,0-3.578-0.758-4.782-1.996c-1.239-1.238-1.996-2.924-1.996-4.783V94.135H6.778c-1.858,0-3.578-0.758-4.782-1.996 C0.757,90.9,0,89.215,0,87.357V6.778C0,4.92,0.757,3.2,1.996,1.995C3.234,0.757,4.92,0,6.778,0h71.324 c1.857,0,3.578,0.757,4.783,1.995c1.238,1.239,1.994,2.925,1.994,4.783V17.582L84.879,17.582L84.879,17.582z M19.749,26.045 c-1.445,0-2.649-1.308-2.649-2.891c0-1.617,1.17-2.89,2.649-2.89h45.278c1.445,0,2.648,1.308,2.648,2.89 c0,1.617-1.168,2.891-2.648,2.891H19.749L19.749,26.045z M19.749,41.563c-1.445,0-2.649-1.308-2.649-2.89 c0-1.617,1.17-2.89,2.649-2.89h45.278c1.445,0,2.648,1.307,2.648,2.89c0,1.617-1.168,2.89-2.648,2.89H19.749L19.749,41.563z M93.891,81.455c-3.09-3.09-7.365-5.008-12.078-5.008c-4.711,0-8.986,1.918-12.076,5.008s-5.01,7.365-5.01,12.078 c0,4.711,1.92,8.986,5.01,12.076s7.365,5.01,12.076,5.01c4.713,0,8.988-1.92,12.078-5.01s5.008-7.365,5.008-12.076 C98.898,88.82,96.98,84.545,93.891,81.455L93.891,81.455L93.891,81.455z" /></g></svg>
                  Explore</button>
                <button className='wallet_button p-[15px] flex items-center rounded-[20px] text-white text-[14px] font-semibold items-center justify-between w-[120px] ml-[20px]  text-[17px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white" width="25px"><path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v301h-60v-111H180v430h319v60H180Zm709-219-71-71 29-29q8.311-8 21.156-8Q881-407 889-399l29 29q8 8.311 8 21.156Q926-336 918-328l-29 29ZM559-40v-71l216-216 71 71L630-40h-71ZM180-630h600v-130H180v130Zm0 0v-130 130Z" /></svg>
                  Create</button>
              </div>
            </div>
            <div className='image_section w-[50%] relative flex justify-center sm:hidden' data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="2000">
              <img src={shabe} className='object-cover absolute top-[48px] left-[-5px]' />
              <img src={Ropot} className='object-cover relative z-100' />

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex w-[100%] h-[100%] justify-center items-center text-center'>
            <div className='text_section w-[50%] sm:w-[100%] ' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
              <img src={shaberotet} className='object-cover absolute top-[-185px] left-[-59px]' />
              <h2 className='text-[50px]  font-semibold'>Discover, find,</h2>
              <h2 className='text-[50px]  font-semibold backgorund_text'>Sell extraordinary</h2>
              <h2 className='text-[50px] font-semibold'>Monster NFTs</h2>
              <p className='text-[25px] mt-[20px] text-[#cccc]'>Marketplace for monster character cllections non fungible token NFTs</p>
              <div className='buttons w-[100%] flex mt-[30px] justify-center'>
                <button className='wallet_button p-[15px] flex items-center rounded-[20px] text-white text-[14px] font-semibold items-center justify-between w-[130px] text-[17px]'>
                  <svg version="1.1" id="Layer_1" fill="white" width='20px' xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 110.66 122.879" enable-background="new 0 0 110.66 122.879" xml: space="preserve"><g><path d="M81.813,70.818c6.268,0,11.949,2.549,16.066,6.648c4.115,4.117,6.648,9.783,6.648,16.066c0,4.582-1.365,8.865-3.699,12.432 l9.832,10.715l-6.781,6.199l-9.484-10.432c-3.6,2.4-7.932,3.799-12.582,3.799c-6.266,0-11.949-2.549-16.064-6.648 c-4.117-4.117-6.65-9.783-6.65-16.064c0-6.268,2.551-11.949,6.65-16.066C69.863,73.35,75.531,70.818,81.813,70.818L81.813,70.818z M19.784,57.08c-1.445,0-2.649-1.308-2.649-2.89c0-1.617,1.169-2.89,2.649-2.89h22.639c1.445,0,2.649,1.308,2.649,2.89 c0,1.617-1.17,2.89-2.649,2.89H19.784L19.784,57.08z M84.879,17.582h9.496c1.859,0,3.58,0.757,4.783,1.995 c1.238,1.239,1.996,2.925,1.996,4.783v37.031c-0.203,2.121-5.41,2.148-5.85,0V24.359c0-0.275-0.104-0.516-0.275-0.688 c-0.172-0.172-0.412-0.275-0.688-0.275h-9.496v37.995c-0.506,1.924-4.838,2.213-5.814,0V6.778c0-0.275-0.104-0.516-0.275-0.688 c-0.172-0.172-0.414-0.275-0.689-0.275H6.744c-0.275,0-0.517,0.103-0.688,0.275C5.883,6.262,5.78,6.502,5.78,6.778v80.58 c0,0.275,0.103,0.516,0.275,0.688s0.413,0.275,0.688,0.275h42.53c2.929,0.301,3.017,5.365,0,5.814H22.054v10.803 c0,0.275,0.104,0.518,0.275,0.689s0.413,0.275,0.688,0.275h26.256c2.122,0.238,2.805,5.063,0,5.814H23.052 c-1.858,0-3.578-0.758-4.782-1.996c-1.239-1.238-1.996-2.924-1.996-4.783V94.135H6.778c-1.858,0-3.578-0.758-4.782-1.996 C0.757,90.9,0,89.215,0,87.357V6.778C0,4.92,0.757,3.2,1.996,1.995C3.234,0.757,4.92,0,6.778,0h71.324 c1.857,0,3.578,0.757,4.783,1.995c1.238,1.239,1.994,2.925,1.994,4.783V17.582L84.879,17.582L84.879,17.582z M19.749,26.045 c-1.445,0-2.649-1.308-2.649-2.891c0-1.617,1.17-2.89,2.649-2.89h45.278c1.445,0,2.648,1.308,2.648,2.89 c0,1.617-1.168,2.891-2.648,2.891H19.749L19.749,26.045z M19.749,41.563c-1.445,0-2.649-1.308-2.649-2.89 c0-1.617,1.17-2.89,2.649-2.89h45.278c1.445,0,2.648,1.307,2.648,2.89c0,1.617-1.168,2.89-2.648,2.89H19.749L19.749,41.563z M93.891,81.455c-3.09-3.09-7.365-5.008-12.078-5.008c-4.711,0-8.986,1.918-12.076,5.008s-5.01,7.365-5.01,12.078 c0,4.711,1.92,8.986,5.01,12.076s7.365,5.01,12.076,5.01c4.713,0,8.988-1.92,12.078-5.01s5.008-7.365,5.008-12.076 C98.898,88.82,96.98,84.545,93.891,81.455L93.891,81.455L93.891,81.455z" /></g></svg>
                  Explore</button>
                <button className='wallet_button p-[15px] flex items-center rounded-[20px] text-white text-[14px] font-semibold items-center justify-between w-[120px] ml-[20px]  text-[17px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white" width="25px"><path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v301h-60v-111H180v430h319v60H180Zm709-219-71-71 29-29q8.311-8 21.156-8Q881-407 889-399l29 29q8 8.311 8 21.156Q926-336 918-328l-29 29ZM559-40v-71l216-216 71 71L630-40h-71ZM180-630h600v-130H180v130Zm0 0v-130 130Z" /></svg>
                  Create</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider