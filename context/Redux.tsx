import { OrderList } from '@/MOCK/orderListData';
import type { OrderItemType } from '@/types/product.type';
import React, { createContext, useContext, useState } from 'react';

interface ICartValue {
    cartState: OrderItemType[] | []
    increaseQuantity: (productId: string) => void
    decreaseQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartValue | null>(null);

export const useCART = () => {
    const context = useContext(CartContext);
    if (context === null || context === undefined) {
        throw new Error('useCART must be used within a CartProvider')
    };
    return context;
};

const CartProvider = ({ children }: {children: React.ReactNode}) => {
    const [cartState, setCartState] = useState<OrderItemType[]>(OrderList) 

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
                if( item.quantity === 0) return item;
                return { ...item, quantity: item.quantity - 1 } 
            }
            return item;
        })
        console.log("REDUX => MINUS!!!");
        setCartState(updatedOrderList);
    };


    return (
        <CartContext.Provider value = {{ cartState, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );

}
export default CartProvider;
