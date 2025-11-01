import react from 'react'
import logo from '../src/assets/logo.png'

export default function Navbar() {
    return (
        <>
            <div className='max-w-7xl mx-auto' >

                <header className="flex items-center justify-between py-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img className='h-9' src={logo} alt="" />
                        <span className="text-white font-bold text-xl tracking-wide">SaveMyDay</span>
                    </div>



                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 text-gray-300 text-sm">
                        <a href="#" className="hover:text-white transition">About</a>
                        <a href="#" className="hover:text-white transition">Features</a>
                        <a href="#" className="hover:text-white transition">How it works</a>
                        <a href="#" className="hover:text-white transition">FAQ</a>
                    </nav>

                    {/* Action buttons */}
                    <div className="flex items-center space-x-4">


                        <button className="px-6 py-2 bg-gray-800 text-gray-100 rounded-full hover:bg-gray-700 transition text-sm">
                            Get started
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}