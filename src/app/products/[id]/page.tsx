import { Product } from "@/app/types";

const fetchProductById = async (id: string): Promise<Product | null> => {
    const res = await fetch(`${process.env.BASE_API_URL}products`);
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    const products = await res.json();
    return products.find((product: Product) => product.id === parseInt(id)) || null;
};

export const revalidate = 60;

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const product = await fetchProductById(id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
                    <div className="lg:w-full">
                        <img
                            src={product.imageUrl}
                            alt={`Image of ${product.name}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {product.name}
                        </h1>
                        <p className="text-gray-600 pt-6">${product.price}</p>
                        <p className="mt-4 text-lg text-gray-800">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
