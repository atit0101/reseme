import { ReactElement } from "react";
export const Navbar = () => {
    return (
        <>
            <div className="block py-4 w-full max-w-full rounded-none px-4 bg-white sticky top-0 z-50 border-0 shadow">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="http://localhost" className="block antialiased font-sans text-blue-gray-900 text-lg font-bold">
                        AK-DEV
                    </a>

                    <ul className="ml-10 hidden items-center gap-8 lg:flex">
                        <li>
                            <a href="#" className="antialiased font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="antialiased font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="antialiased font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900">
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    <div>

                    </div>
                </div>

            </div>
        </>
    );
};