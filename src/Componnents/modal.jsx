import '../styles/modal.css'
function modal({ close }) {
    return (
        <div className=" modal absolute w-[100%] h-[100%] overlary top-[-213px] left-[-4px] flex justify-center">

            <div className='modal_form p-[30px] bg-[#343444] w-[40%]  sm:w-[100%] text-center relative rounded-[20px]'>

                <button onClick={() => close(false)} className='text-white  bg-black rounded-[50%] w-[50px] h-[50px] absolute right-[-14px] top-[-14px]'>X</button>
                <div className='modal_title'>
                    <h3 className='text-[30px] font-bold text-white'>Place a Bid</h3>
                    <h5 className='text-[18px]  text-[#ffffffb5] mt-[10px]'>You must bid at least 4.89 ETH</h5>
                </div>
                <form className='modal_form rounded-[20px] text-center mt-[20px]'>
                    <input type='text' placeholder='00.00ETH' className='' />
                    <h4 className="text-[18px]  text-[#fff] mt-[30px]">Enter quantity. 5 available</h4>
                    <input type='text' placeholder='00.00ETH' className='mt-[20px]' />
                </form>
                <div className='flex justify-between w-[100%] mt-[20px]'>
                    <span className='text-[#fff]'>You must bid at least:</span>
                    <span className='text-[#fff] font-bold'>4.89 ETH</span>
                </div>
                <div className='flex justify-between w-[100%] mt-[10px]'>
                    <span className='text-[#fff]'>Service free:</span>
                    <span className='text-[#fff] font-bold'>0,89 ETH</span>
                </div>
                <div className='flex justify-between w-[100%] mt-[10px]'>
                    <span className='text-[#fff]'>Total bid amount:</span>
                    <span className='text-[#fff] font-bold'>4 ETH</span>
                </div>
                <div className='button mt-[40px] w-[100%] flex items-center justify-center'>
                    <button className='p-[15px] rounded-[10px] w-[100%] bg-[#4b50e6] font-bold text-white'>Place a bid</button>
                </div>
            </div>
        </div>
    )
}

export default modal 