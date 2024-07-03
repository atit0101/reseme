
export const Footer = () => {
    return (
        <>
            <footer className="mt-10 px-8 pt-20">
                <div className="container mx-auto">
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
                        <div></div>
                        <ul className="flex gap-8 items-center">
                            <li className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors">
                                Home
                            </li>
                            <li className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors">
                                About Us
                            </li>
                            <li className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors">
                                Contact Us
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};