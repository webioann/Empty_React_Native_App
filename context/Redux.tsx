import { OrderList } from '@/MOCK/orderListData';
import type { OrderItemType, ProductType } from '@/types/product.type';
import React, { createContext, useContext, useState } from 'react';

interface ICartValue {
    cartState: OrderItemType[] | []
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
    const [cartState, setCartState] = useState<OrderItemType[]>(OrderList) 

    const addNewItemToOrderList = (product: ProductType) => {
        if( product ) {
            const newCartItem: OrderItemType = {
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

    const removeItemFromOrderList = (productId: string) => {
        const updatedOrderList = cartState.filter(item => item.productId !== productId);
        console.log("REMOVE ITEM");
        setCartState(updatedOrderList);
    };


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
