import { Product, MainPageData } from "@/app/types";

const fetchFirstProducts = async (): Promise<Product[]> => {
    const res = await fetch(`${process.env.BASE_API_URL}products`);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const products = await res.json();
    return products.slice(0, 2);
};

const fetchMainPageData = async (): Promise<MainPageData> => {
    const res = await fetch(`${process.env.BASE_API_URL}main-page`);
    if (!res.ok) {
        throw new Error('Failed to fetch main page data');
    }
    return await res.json();
};

export const revalidate = 60;

const Home = async () => {
    let firstProducts: Product[] = [];
    let mainPageData: MainPageData | undefined;

    try {
        firstProducts = await fetchFirstProducts();
        mainPageData = await fetchMainPageData();
    } catch (error) {
        console.error(error);
    }

    return (
        <div>
            <div className="bg-white">
                <div className="text-center pt-28 lg:pt-32 pb-8">
                    <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        {mainPageData ? mainPageData.title : "Loading..."}
                    </h1>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {firstProducts.length === 0 ? (
                        <div className="text-center text-gray-500">
                            <p>No products found</p>
                        </div>
                    ) : (
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                            {firstProducts.map((product) => (
                                <div key={product.id} className="group relative">
                                    <img
                                        src={product.imageUrl}
                                        alt={`Image of ${product.name}`}
                                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                        loading="lazy"
                                    />
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={`/products/${product.id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    {product.name}
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
