import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/router';


export default function Example() {
  const router = useRouter()
  return (
    <Disclosure as="nav" className="bg-white shadow rounded-xl">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <Link href='/'>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Link href="/">
                      <a
                        className={`${router.pathname == '/' ? 'border-indigo-500' : 'border-transparent'}  text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                      >Dashboard</a>
                    </Link>
                    <Link href="/collectibles">
                      <a
                        className={`${router.pathname == '/collectibles' ? 'border-indigo-500' : 'border-transparent'}  text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                      >Collections</a>
                    </Link>

                  </div>
                </div>
              </Link>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="m-top-1 flex gap-2">
                    <WalletMultiButton className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
