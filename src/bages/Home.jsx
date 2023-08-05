import Slider from '../Componnents/Slider'
import Auctions from '../Componnents/Auctions.jsx'
import Sellar from '../Componnents/Sellar'
import Picks from '../Componnents/Picks'
import Collection from '../Componnents/Collection'
import Ntfs from '../Componnents/Ntfs'
function Home() {
    return (
        <div>
            <Slider />
            <Auctions />
            <Sellar />
            <Picks />
            <Collection />
            <Ntfs />
        </div>
    )
}

export default Home