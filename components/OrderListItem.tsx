import { useCART } from '@/context/Redux';
import { useTheme } from '@/context/ThemeContext';
import type { OrderItemType } from '@shared-types/order.types.js';
import { FontAwesome6 } from '@expo/vector-icons';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OrderListItem = ({item}: {item: OrderItemType}) => {
    const theme = useTheme()
    const currency = '$';
    const { increaseQuantity, decreaseQuantity, removeItemFromOrderList } = useCART()

    const getReduceQuantity = () => {
        if( item.quantity > 1 ) { decreaseQuantity(item.productId) }
        if( item.quantity <= 1 ) {
            Alert.alert('Warning !!!', 'Are you wont delete this product from Cart',[
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
                { text: 'Remove from Orders', onPress: () => removeItemFromOrderList(item.productId), style: 'cancel',},
            ])
            return
        }
    }

    return (
        <View style={[styles.order_item, {backgroundColor: theme.bg_second}]}>
            <View style={styles.image}>
                <Image source={{uri: item.image}} resizeMode='cover' style={{flex: 1}}/>
                <View style={[styles.img_badge, {backgroundColor: theme.green}]}>
                    <Text style={{fontSize: 12, fontWeight: '700'}}>
                        x&nbsp;{item.quantity}
                    </Text>
                </View>
            </View>
            <View style={[styles.main_info, {gap: 6}]}>
                <Text style={{color: theme.text_main, fontWeight: '700', fontSize: 16, lineHeight: 20}}>
                    {item.productName}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text style={{color: theme.green, fontWeight: '700', fontSize: 18, marginRight: 8}}>
                        {currency}&nbsp;{(item.price * item.quantity).toFixed(2)}
                    </Text>
                    <Text style={{color: theme.text_second}}>
                        {currency}&nbsp;{(item.price).toFixed(2)}&nbsp;each
                    </Text>
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity  
                        activeOpacity={0.7}
                        onPress={() => getReduceQuantity()} 
                        style={{}}
                        >
                        <FontAwesome6 name="circle-minus" size={30} color={theme.green} />
                    </TouchableOpacity>
                    <Text style={{color: theme.text_main, fontSize: 18}}>{item.quantity}</Text>
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        onPress={() => increaseQuantity(item.productId)} 
                        >
                        <FontAwesome6 name="circle-plus" size={30} color={theme.green} />
                    </TouchableOpacity>
                    <TouchableOpacity  
                        activeOpacity={0.7}
                        onPress={() => removeItemFromOrderList(item.productId)} 
                        style={[styles.trash_can, {backgroundColor: theme.red + "30"}]}
                        >
                        <FontAwesome6 name="trash-can" size={20} color={theme.red} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OrderListItem

const styles = StyleSheet.create({
    order_item:{
        flexDirection: 'row',
        padding: 10,
        marginTop: 16,
        width: '100%',
        borderRadius: 8,

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 16,
        position: 'relative'
    },
    img_badge: {
        position: 'absolute',
        top: 4,
        right: 4,
        height: 16,
        paddingHorizontal: 6,
        // padding: 4,
        borderRadius: 8
    },
    main_info: {
        flex:1,
        gap: 8
    },
    counter: {
        flexDirection: 'row', 
        gap: 16, 
        justifyContent: 'space-between',
        alignItems: 'center' 
    },
    trash_can: {
        marginLeft: 'auto',
        width: 40,
        height: 40,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})