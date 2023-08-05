import '../styles/Footer.css'
import Logo from '../assets/prand/logo.png'
function Footer() {
    return (
        <div className="Footer mt-[40px] bg-black text-white">
            <div className='container_padding'>
                <div className='grid grid-cols-5 sm:grid-cols-2 gap-4'>
                    <div className='logo_section'>
                        <img src={Logo} className='object-cover w-[200px]' />
                        <p className='text-[13px] mt-[12px]'>Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vita</p>
                    </div>
                    <div className='links_1 p-[40px] sm:p-[10px]'>
                        <h3 className='font-bold text-[20px]'>My Account</h3>
                        <ul className='mt-[20px]'>
                            <li className='mt-3'>
                                <a href="#">Authors</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">Collection</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">Author Profile</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">Create Item</a>
                            </li>
                        </ul>
                    </div>
                    <div className='links_1 p-[40px] sm:p-[10px]'  >
                        <h3 className='font-bold text-[20px]'>Resources</h3>
                        <ul className='mt-[20px]'>
                            <li className='mt-3'>
                                <a href="#">Help & Support</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">Live Auctions</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">Item Details</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">Activity</a>
                            </li>
                        </ul>
                    </div>
                    <div className='links_1 p-[40px] sm:p-[10px]'>
                        <h3 className='font-bold text-[20px]'>Company</h3>
                        <ul className='mt-[20px]'>
                            <li className='mt-3'>
                                <a href="#">Explore</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">Contact Us</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">Our Blog</a>
                            </li>
                            <li className='mt-3'>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className='form_div pt-[40px] sm:p-[10px]'>
                        <h3 className='font-bold text-[20px]'>Company</h3>
                        <form>
                            <input type="text" placeholder='Mohammed@gmail.com' className='mt-[20px]' />
                            <button className='p-[15px] mt-[20px] rounded-[10px]  bg-[#4b50e6] font-bold text-white'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer