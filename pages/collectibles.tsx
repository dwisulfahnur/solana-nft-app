import NFTList from "../components/NFTList";

const Collectibles = () => {
    return (
        <div className="mt-4 p-6 border bg-white rounded-xl">
            <h1 className="mb-2 font-semibold text-2xl">My Collectibles</h1>
            <hr className="mb-4" />
            <NFTList />
        </div>
    )
}


export default Collectibles