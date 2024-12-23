const Footer = () => {
    return (
        <footer className="felipa pt-10 p-4 bg-black text-white text-lg font-medium">
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <h3 className="text-2xl font-bold mb-2">About Tekboard</h3>
                    <p>Tekboard is a blog site where I share my thoughts on technology, programming, and innovation. and also my projects</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <h3 className="text-2xl font-bold mb-2">Recent Posts</h3>
                    <ul>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                Post 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                Post 2
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                Post 3
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <h3 className="text-2xl font-bold mb-2">Social Media</h3>
                    <ul>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full text-center p-4">
                    <p>&copy; 2024 Tekboard</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
