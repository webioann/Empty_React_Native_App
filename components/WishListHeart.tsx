import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = { productId: string }

const WishListHeart = ({productId}: Props) => {
    const [inList, setInList] = useState(false)
    const wishList = ["idaaa77", "idaaa70", "idaaa74"]

    const isInWishlist = (productId: string) => {
        return wishList?.some((item) => item === productId) ?? false;
    };

    useEffect(() => {
        setInList(() => isInWishlist(productId))
    }, [])
    
    return (
        <TouchableOpacity
            style={styles.wish_list}
            activeOpacity={0.7}
            onPress={() => console.log("CLICK ON HEART")}
            >
            { inList ? <Entypo name="heart" size={24} color="red" /> : <Entypo name="heart-outlined" size={24} color="red" /> }
                
        </TouchableOpacity>
    )
}

export default WishListHeart;

const styles = StyleSheet.create({
    wish_list: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})