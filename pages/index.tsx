import { useWallet } from '@solana/wallet-adapter-react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { connected, publicKey } = useWallet()
  return (
    <div className="mt-4 p-6 border bg-white rounded-xl">
      {connected ? <p>Your Address: {publicKey?.toBase58()} </p> : 'Not Connected'}
    </div>
  )
}

export default Home
