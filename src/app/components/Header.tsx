import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    MyStore
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/products/" className="text-lg hover:text-gray-400">
                                Products
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
