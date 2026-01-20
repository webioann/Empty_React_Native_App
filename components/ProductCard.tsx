import { useTheme } from '@/context/ThemeContext';
import type { ProductType } from '@/types/pet_api_example';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import WishListHeart from './WishListHeart';


const ProductCard = ({product}: {product: ProductType}) => {
    const theme = useTheme();
    return (
        <TouchableOpacity
            style={[styles.card, {backgroundColor: theme.bg_second}]}
            activeOpacity={0.7}
            onPress={() => console.log(' => router.push(`/product/${product._id}`)')}
            >
            {/* === IMAGE and WISHLIST HEART== */}
            <View style={{position: 'relative'}}>
                <Image 
                    source={{ uri: product.images[0] }}
                    style={{width: '100%', height: 180, backgroundColor: theme.bg_minor}}
                    resizeMode="cover"
                />
                <WishListHeart productId={product._id}/>
            </View>
            {/* === PRODUCT DATA === */}
        
        </TouchableOpacity>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        width: '48%',
        overflow: 'hidden',
        borderRadius: 16,
        // flexWrap: 'nowrap'
    },
})