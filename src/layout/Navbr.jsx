import Logo from '../assets/prand/logo.png'
// import { useState } from 'react'
import '../styles/navbar.css'
import Search from '../assets/prand/serch.svg'
function Navbr() {
    // const [show, setShow] = useState(false)
    return (
        <div className='navbar t-[10px] relative'>
            {/* {show && <div className='mop_nav absolute w-[100%] h-[100%] text-white'>
            mohamed
            <button className='close' onClick={() => setShow(false)}>Close</button>
        </div>} */}


            <div className='container_padding'>
                <div className='flex items-center justify-between'>
                    <div className='logo'>
                        <img src={Logo} className='object-cover w-[110px]' />
                    </div>
                    <div className='links w-[50%] sm:hidden'>
                        <ul className="flex text-white items-center justify-between">
                            <li className='font-bold text-[16px]'>Home</li>
                            <li className='font-bold text-[16px]'>Explore</li>
                            <li className='font-bold text-[16px]'>Activity</li>
                            <li className='font-bold text-[16px]'>Community</li>
                            <li className='font-bold text-[16px]'>Page</li>
                            <li className='font-bold text-[16px]'>Contact</li>
                        </ul>
                    </div>
                    <div className='search flex w-[20%] justify-between items-center sm:hidden'>
                        <div>
                            <img src={Search} className='object-scover w-[30px]' />
                        </div>
                        <button className='wallet_button p-[15px] flex items-center rounded-[20px] text-white text-[14px] font-semibold items-center justify-between w-[180px]'>
                            <svg width="30px" stroke="white" id="Layer_1" fill="white" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Wallet</title><path d="M384,85.333V128H64a53.2,53.2,0,0,0-29.333,8.8A58.411,58.411,0,0,1,81.333,96.587L346.88,53.76A31.965,31.965,0,0,1,384,85.333Z" /><path d="M256,304a74.749,74.749,0,0,0,74.667,74.667h128v26.667a53.421,53.421,0,0,1-53.333,53.333h-320A53.421,53.421,0,0,1,32,405.333v-224a32.025,32.025,0,0,1,32-32H405.333a53.421,53.421,0,0,1,53.333,53.333v26.667h-128A74.749,74.749,0,0,0,256,304Z" /><path d="M458.667,250.667h-128a53.333,53.333,0,0,0,0,106.667h128A21.328,21.328,0,0,0,480,336V272A21.328,21.328,0,0,0,458.667,250.667Zm-128,74.667A21.333,21.333,0,1,1,352,304,21.328,21.328,0,0,1,330.667,325.333Z" /></svg>
                            Wallet Connect</button>

                    </div>
                    {/* <button className='xl:hidden' onClick={() => setShow(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="30px" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div >
    )
}

export default Navbr