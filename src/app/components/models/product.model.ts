export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description?: string; // Optional property
    image?: string; // Optional property
}

export interface ProductForPost {
    title: string;
    price: number;
    category: string;
    description?: string;
    image?: string;
}
