import type { OrderListItemType, ProductType } from '@/types/product.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
// await AsyncStorage.getItem(THEME_STORAGE_KEY)
interface ICartValue {
    cartState: OrderListItemType[] | []
    increaseQuantity: (productId: string) => void
    decreaseQuantity: (productId: string) => void
    removeItemFromOrderList: (productId: string) => void
    addNewItemToOrderList: (productId: ProductType) => void
};

export const CartContext = createContext<ICartValue | null>(null);

export const useCART = () => {
    const context = useContext(CartContext);
    if (context === null || context === undefined) {
        throw new Error('useCART must be used within a CartProvider')
    };
    return context;
};

const CartProvider = ({ children }: {children: React.ReactNode}) => {
    // WARNING !!! initial state must be loaded from DB or be empty Array ===
    const [cartState, setCartState] = useState<OrderListItemType[]>([])
    const CART_STORAGE_KEY = "@cart_storage";


    const addNewItemToOrderList = async (product: ProductType) => {
        if( product ) {
            const newCartItem: OrderListItemType = {
                productId: product._id,
                productName: product.name,
                price: product.price,
                quantity: 1,
                image: product.images[0]
            }
            setCartState((prev) => [...prev, newCartItem])
        }
        console.log("NEW PRODUCT NOT ADDED TO CART");
    };

    const increaseQuantity = (productId: string) => {
        const updatedOrderList = cartState.map((item) =>  {
            if( item.productId === productId ) { 
                return { ...item, quantity: item.quantity + 1 }}
            return item;
        })
        console.log("REDUX => PLUS!!!");
        setCartState(updatedOrderList);
    };

    const decreaseQuantity = (productId: string) => {
        const updatedOrderList = cartState.map((item) =>  {
            if( item.productId === productId ) { 
                if( item.quantity === 0) return item
                return { ...item, quantity: item.quantity - 1 } 
            }
            return item;
        })
        console.log("REDUX => MINUS!!!");
        setCartState(updatedOrderList);
    };

    const removeItemFromOrderList = async (productId: string) => {
        const updatedOrderList = cartState.filter(item => item.productId !== productId);
        await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedOrderList))
        console.log("REMOVE ITEM");
        setCartState(updatedOrderList);
    };
    // Load data from AsyncStorage on app start
    useEffect(() => {
        const getAsyncStorageCartData = async() => {
            try{
                const storageDataJSON = await AsyncStorage.getItem(CART_STORAGE_KEY)
                if( storageDataJSON !== null ) {
                    const storage = JSON.parse(storageDataJSON) as OrderListItemType[]
                    setCartState(storage)
                }
            } catch (error){ 
                console.error("Failed to load Cart Data in time START:", error);
            }
        }
        getAsyncStorageCartData();
    }, [])

    return (
        <CartContext.Provider value = {{ 
            addNewItemToOrderList,
            cartState, 
            increaseQuantity, 
            decreaseQuantity,
            removeItemFromOrderList }}>
            {children}
        </CartContext.Provider>
    );

}
export default CartProvider;
