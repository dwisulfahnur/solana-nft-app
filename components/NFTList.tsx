import axios from 'axios'
import { useEffect, useLayoutEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { getParsedNftAccountsByOwner, } from "@nfteyez/sol-rayz";


const NFTList = () => {
    const initNfts: Array<any> = []
    const [nfts, setNfts] = useState(initNfts)
    const [loading, setLoading] = useState(true)

    const { publicKey, connected } = useWallet()
    const { connection } = useConnection()

    useEffect(() => {
        (async function () {
            if (connected) {
                let newNfts: Array<any> = await getParsedNftAccountsByOwner({
                    publicAddress: publicKey?.toBase58(),
                    connection: connection
                })
                newNfts.forEach(nft => {
                    axios.get(nft.data.uri).then(res => {
                        let item: any = nft
                        item.imageSrc = res.data.image
                        item.imageAlt = res.data.name
                        setNfts(newNfts)
                    }).catch(err => {
                        console.error(err)
                    })
                })
            } else {
                const newN = new Array()
                setNfts(newN)
            }
            setLoading(false)
            setImageLoaded(false)
        })()
    }, [connected])

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto lg:max-w-7xl">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {loading ? <p>Loading ...</p> : ''}
                    {nfts.map((nft) => (
                        <div key={nft.key} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                {nft.imageSrc ?
                                    <img
                                        src={nft.imageSrc ? nft.imageSrc : ''}
                                        alt={nft.imageAlt}
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    /> : ''}

                            </div>
                            <div className="mt-2 text-center">
                                <div>
                                    <h3 className="text-lg text-gray-700">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {nft.data.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 truncate">{nft.data.creators[0].address}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{nft.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default NFTList
