const Footer = () => {
    return (
        <footer>
            <div className=" text-black p-8">
                <div className="">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:px-52">
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Solutions</h5>
                            <ul className="space-y-3">
                                <li>Marketing</li>
                                <li>Analytics</li>
                                <li>Commerce</li>
                                <li>Insights</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Support</h5>
                            <ul className="space-y-3">
                                <li>Pricing</li>
                                <li>Documentation</li>
                                <li>Guides</li>
                                <li>API Status</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Company</h5>
                            <ul className="space-y-3">
                                <li>About</li>
                                <li>Blog</li>
                                <li>Jobs</li>
                                <li>Press</li>
                                <li>Partners</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Legal</h5>
                            <ul className="space-y-3">
                                <li>Claim</li>
                                <li>Privacy</li>
                                <li>Terms</li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>

                            <div className="flex mt-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="p-2 rounded-l-lg flex-1 border"
                                />
                                <button className="bg-green-500 text-white p-2 rounded-r-lg">
                                    Send
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end  md:col-start-2">
                            <div className="space-x-4 flex items-center">
                                <a href="#" className="text-blue-500">
                                    Facebook
                                </a>
                                <a href="#" className="text-zinc-400">
                                    Instagram
                                </a>
                                <a href="#" className="text-zinc-400">
                                    Twitter
                                </a>
                                <a href="#" className="text-zinc-400">
                                    YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-8 border-t border-zinc-700 pt-4">
                        <p className="text-center text-sm">
                            &copy; 2020 Your Company, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;