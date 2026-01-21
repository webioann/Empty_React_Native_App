import type { User } from "@/types/pet_api_example.js";

export const mockUsers: User[] = [
    {
        _id: "user1",
        username: "johndoe",
        email: "johndoe@example.com",
        imageUrl: "https://i.pravatar.cc/150?img=52",
        role: 'admin',
        authProviderId: "provider123",
        addresses: [],
        wishlist: [],
        createdAt: "2024-01-21T11:00:00Z",
        updatedAt: "2024-01-21T11:00:00Z"
    },
    {
        _id: "user2",
        username: "johndoe",
        email: "johndoe@example.com",
        imageUrl: "https://i.pravatar.cc/150?img=53",
        role: 'owner',
        authProviderId: "provider123",
        addresses: [],
        wishlist: [],
        createdAt: "2024-01-21T11:00:00Z",
        updatedAt: "2024-01-21T11:00:00Z"
    },
    {
        _id: "user3",
        username: "johndoe",
        email: "johndoe@example.com",
        imageUrl: "https://i.pravatar.cc/150?img=33",
        role: 'user',
        authProviderId: "provider123",
        addresses: [],
        wishlist: [],
        createdAt: "2024-01-21T11:00:00Z",
        updatedAt: "2024-01-21T11:00:00Z"
    },
];