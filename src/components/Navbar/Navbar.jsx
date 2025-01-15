import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import indiaIcon from "@assets/india flag.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItemCount = 3;

    const navItems = [
        'Rings',
        'Earrings',
        'Bracelets & Bangles',
        'Solitaires',
        'Mangalsutras',
        "Necklaces",
        "More jewellery",
        "Gifting"
    ];

    return (
        <nav className="w-full bg-white shadow-md overflow-x-hidden">
            <div className="px-4 md:px-6 py-4 w-full">
                <div className="flex flex-wrap items-center justify-between w-full">
                    <div className="flex items-center">
                        <button
                            className="mr-4 md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                        <div className="flex-shrink-0">
                            <svg
                                className="h-10 w-10"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g transform="translate(1)" fill="#8E1A86" fillRule="nonzero">
                                        <path d="M10.217 23.029l2.04.971 2.029-.954-2.04-2.052-2.029 2.035zm4.869-3.812L13.6 20.84l2.577 1.091 1.097-2.588-2.194-.126h.006zm-5.652 0l-2.194.12 1.08 2.589 2.583-1.075-1.474-1.628.005-.006zm8.989 2.126l2.148-.772.766-2.137H18.43l-.006 2.909zM3.206 18.429l.748 2.142 2.132.76v-2.897h-2.88v-.005zm9.063-.863l-1.578.72 1.572 1.577 1.571-1.566-1.571-.748.006.017zM16 16l-.571 1.657h2.222V15.43L16 16zm-9.143 1.651h2.229l-.572-1.645-1.64-.572-.017 2.217zm-3.154-4.04L2.61 16.19 5.2 17.28l.131-2.194L3.71 13.6l-.006.011zm.954-1.342l1.566 1.571.754-1.577-.748-1.572-1.572 1.578zm-4.126 0l.972 2.017 2.051-2.046-2.04-2.023-.983 2.052zM2.63 8.326l1.08 2.577 1.628-1.48-.126-2.194L2.63 8.326zm12.8-1.435L16 8.537l1.64.572V6.897h-2.211v-.006zM6.89 9.103l1.64-.572.572-1.64H6.874l.017 2.212zm3.818-2.857l1.571.748 1.577-.743-1.577-1.588-1.571 1.583zm7.737-.115h2.891L20.571 4l-2.12-.777-.005 2.908zM4 3.96l-.783 2.137h2.897V3.206L4 3.96zm9.663-.251l1.474 1.628 2.194-.12-1.108-2.583-2.56 1.075zM7.263 5.2l2.194.131 1.486-1.622L8.37 2.623 7.263 5.2zM12.286.531l-2.046.972 2.04 2.051 2.046-2.034-2.04-.989z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className="hidden md:flex space-x-4 lg:space-x-6 flex-grow justify-start mx-4 lg:mx-10 flex-wrap">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                className="relative group text-[#4F3267] hover:text-[#8863FB] font-medium whitespace-nowrap text-sm lg:text-base my-1"
                            >
                                {item}
                                <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-[#8863FB] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 flex-shrink-0">
                        <div className="hidden md:flex items-center relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-32 lg:w-48 pl-8 pr-4 py-2 border border-[#8863FB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8863FB] text-sm placeholder:text-[#8863FB]"
                            />
                            <Search className="w-4 h-4 absolute left-2 text-[#8863FB]" />
                        </div>

                        <button className="md:hidden text-[#4F3267]" aria-label="Search">
                            <Search className="w-5 h-5" />
                        </button>

                        <button className="group relative text-[#4F3267] hover:text-[#8863FB]" aria-label="Change Country">
                            <img src={indiaIcon} alt="indiaIcon" className="w-5 h-5 md:w-8 md:h-6" />
                            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-[#8863FB] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                        </button>

                        <button className="group relative text-[#4F3267] hover:text-[#8863FB]" aria-label="User Profile">
                            <User className="w-5 h-5 md:w-6 md:h-6" />
                            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-[#8863FB] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                        </button>

                        <button className="group relative text-[#4F3267] hover:text-[#8863FB]" aria-label="Wishlist">
                            <Heart className="w-5 h-5 md:w-6 md:h-6" />
                            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-[#8863FB] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                        </button>

                        <button className="group relative text-[#4F3267] hover:text-[#8863FB]" aria-label="Shopping Cart">
                            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#8863FB] text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-[#8863FB] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
                    <div className="bg-white w-3/4 h-full transform transition-transform duration-300 ease-in-out">
                        <div className="px-4 py-2 space-y-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8863FB]"
                                />
                                <Search className="w-4 h-4 absolute left-2 top-3 text-gray-400" />
                            </div>
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    className="block w-full text-left px-2 py-2 text-[#4F3267] hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;