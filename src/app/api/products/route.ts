import { NextResponse } from "next/server";

export async function GET() {
    try {
        const products = [
            {
                id: 1,
                name: 'Product 1',
                price: 199,
                imageUrl: 'https://images.unsplash.com/photo-1733299707761-aef3567af25d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
                description: 'Discover unbeatable value with Product 1. This high-quality item blends affordability with practicality, making it the perfect addition to your collection. Whether for daily use or a special occasion, it brings style and functionality together seamlessly. Don\'t miss out on this great offer!'
            },
            {
                id: 2,
                name: 'Product 2',
                price: 299,
                imageUrl: 'https://images.unsplash.com/photo-1612654680276-bbd3e1200853?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                description: 'Elevate your experience with Product 2. Crafted with precision, this product offers premium features and exceptional durability. Its sleek design and top-tier performance make it a must-have for anyone looking to upgrade their lifestyle. Get yours now and enjoy the difference!'
            },
            {
                id: 3,
                name: 'Product 3',
                price: 399,
                imageUrl: 'https://images.unsplash.com/photo-1617255148656-b2ae0c5ffa77?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                description: 'Experience the next level of innovation with Product 3. Designed for those who demand the best, it combines cutting-edge technology with luxurious design. Perfect for both work and play, this product will exceed your expectations and deliver a superior experience every time.'
            },
            {
                id: 4,
                name: 'Product 4',
                price: 499,
                imageUrl: 'https://images.unsplash.com/photo-1725206262279-70e391486480?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8',
                description: 'Indulge in sophistication and power with Product 4. This premium product offers unrivaled quality and exceptional performance. Whether you\'re upgrading your home or office, it’s engineered to meet the highest standards. Don’t wait — treat yourself to the ultimate in style and efficiency.'
            },
        ];
        return NextResponse.json(products);
    } catch (error) {
        console.error('Error in GET /api/products:', error);
        return NextResponse.error();
    }
}
