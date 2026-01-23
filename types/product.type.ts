export interface OrderListItemType {
    productId: string;
    productName: string;
    price: number;
    quantity: number;
    image: string;
}

export interface ProductType {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    images: string[];
    averageRating: number;
    totalReviews: number;
    // createdAt: string;
    // updatedAt: string;
}
