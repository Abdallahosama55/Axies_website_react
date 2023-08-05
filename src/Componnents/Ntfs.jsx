
import Ntfs1 from '../assets/ntfs/ntfs1.png'
import Ntfs2 from '../assets/ntfs/ntfs2.png'
import Ntfs3 from '../assets/ntfs/ntfs3.png'
import Ntfs4 from '../assets/ntfs/ntfs4.png'
function Ntfs() {
    return (
        <div className='Ntfs mt-[40px]'>
            <div className='container_padding'>
                <div className='title_div w-[100%]'>
                    <h3 className='text-[30px] font-bold text-white'>Create And Sell Your NFTs</h3>
                    <div>
                    </div>
                    <div className='grid grid-cols-4 sm:grid-cols-1 mt-[40px] gap-2'>
                        <div className='grid_card_1 p-[5px]'>
                            <div className='w-[70px] h-[70px] bg-[#5142fc] rounded-[10px] flex justify-center items-center'>
                                <img src={Ntfs1} />
                            </div>
                            <h3 className='text-white text-[20px] font-bold mt-[10px]'>Set Up Your Wallet</h3>
                            <p className='text-[#ddd] text-[15px]  mt-[10px]'>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                        </div>
                        <div className='grid_card_1 p-[5px]'>
                            <div className='w-[70px] h-[70px] bg-[#47a432] rounded-[10px] flex justify-center items-center'>
                                <img src={Ntfs2} />
                            </div>
                            <h3 className='text-white text-[20px] font-bold mt-[10px]'>Set Up Your Wallet</h3>
                            <p className='text-[#ddd] text-[15px]  mt-[10px]'>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                        </div>
                        <div className='grid_card_1 p-[5px]'>
                            <div className='w-[70px] h-[70px] bg-[#9835fb] rounded-[10px] flex justify-center items-center'>
                                <img src={Ntfs3} />
                            </div>
                            <h3 className='text-white text-[20px] font-bold mt-[10px]'>Set Up Your Wallet</h3>
                            <p className='text-[#ddd] text-[15px]  mt-[10px]'>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                        </div>
                        <div className='grid_card_1 p-[5px]'>
                            <div className='w-[70px] h-[70px] bg-[#df4949] rounded-[10px] flex justify-center items-center'>
                                <img src={Ntfs4} />
                            </div>
                            <h3 className='text-white text-[20px] font-bold mt-[10px]'>Set Up Your Wallet</h3>
                            <p className='text-[#ddd] text-[15px]  mt-[10px]'>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                        </div>
                        <div className=''></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ntfs