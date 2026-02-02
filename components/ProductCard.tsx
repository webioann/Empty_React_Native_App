import { useCART } from '@/context/Redux';
import { useTheme } from '@/context/ThemeContext';
import type { ProductType } from '@shared-types/product.types';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WishListHeart from './WishListHeart';

const ProductCard = ({product}: {product: ProductType}) => {
    const theme = useTheme();
    const currency = '$';
    const { addNewItemToOrderList } = useCART();

    return (
        <TouchableOpacity
            style={[styles.card, {backgroundColor: theme.bg_second}]}
            activeOpacity={0.7}
            onPress={() => console.log("ON PRESS TO PRODUCT CARD")}
            >
            {/* === IMAGE and WISHLIST HEART== */}
            <View style={{position: 'relative'}}>
                <Image 
                    source={{ uri: product.images[0] }}
                    style={{width: '100%', height: 180, backgroundColor: theme.bg_minor}}
                    resizeMode="cover"
                />
                <WishListHeart productId={product._id.toString()}/>
            </View>
            {/* === PRODUCT DATA === */}
            <View style={[styles.info, {backgroundColor: theme.bg_second}]}>
                <View style={{gap: 4}}>
                    <Text style={{color: theme.text_second, fontSize: 12}}>{product.category}</Text>
                    <Text style={{color: theme.text_main, fontWeight: '900'}}>{product.name}</Text>
                    <View className="flex-row items-center mb-2" style={styles.rating_row}>
                        <Ionicons name="star" size={12} color="#FFC107" />
                        <Text className="text-text-primary text-xs font-semibold ml-1" style={{fontSize: 12, color: theme.text_main}}>
                            {product.averageRating.toFixed(1)}
                        </Text>
                        <Text style={{fontSize: 12, color: theme.text_main}}>
                            ({product.totalReviews})
                        </Text>
                    </View>   
                </View>
                <View style={[styles.price_row]}>
                    <Text style={{color: theme.green, fontSize: 20, fontWeight: '700'}}>
                        {currency}&nbsp;{product.price.toFixed(2)}
                    </Text>
                    <TouchableOpacity onPress={() => addNewItemToOrderList(product)}>
                        {/* <Text>Add to Cart</Text> */}
                        <Ionicons name="cart-outline" size={30} color={theme.green} />
                    </TouchableOpacity>
                </View>         
            </View>
        
        </TouchableOpacity>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        width: '48%',
        overflow: 'hidden',
        borderRadius: 16,
    },
    info: {
        padding: 12,
        justifyContent: 'space-between',
        flex: 1,
        gap: 4
    },
    rating_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    price_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    }
})