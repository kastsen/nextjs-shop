import { Product } from "@/app/types";

const fetchProducts = async (): Promise<Product[]> => {
    const res = await fetch(`${process.env.BASE_API_URL}products`);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
};

export const revalidate = 60;

export default async function ProductsPage() {
    const products = await fetchProducts();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
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
            </div>
        </div>
    );
}