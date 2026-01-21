import { useTheme } from '@/context/ThemeContext';
import type { OrderItemType } from '@/types/product.type';
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const OrderListItem = ({item}: {item: OrderItemType}) => {
    const theme = useTheme()
    const currency = '$';
    
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
                <Text style={{color: theme.text_main, fontWeight: '700', fontSize: 16, lineHeight: 20}}>{item.productName}</Text>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text style={{color: theme.green, fontWeight: '700', fontSize: 18, marginRight: 16}}>
                        {currency}&nbsp;{item.price * item.quantity}
                    </Text>
                    <Text style={{color: theme.text_second}}>{currency}&nbsp;{item.price}&nbsp;each</Text>
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity  
                        activeOpacity={0.7}
                        onPress={() => console.log('HELLO COUNTER __ MINUS')} 
                        style={{}}
                        >
                        <FontAwesome6 name="circle-minus" size={30} color={theme.green} />
                    </TouchableOpacity>
                    <Text style={{color: theme.text_main, fontSize: 18}}>{item.quantity}</Text>
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        onPress={() => console.log('HELLO COUNTER__ PLUS')} 
                        >
                        <FontAwesome6 name="circle-plus" size={30} color={theme.green} />
                    </TouchableOpacity>
                    <TouchableOpacity  
                        activeOpacity={0.7}
                        onPress={() => console.log('TRASH CAN')} 
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
        padding: 16,
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
        gap: 30, 
        justifyContent: 'space-between',
        alignItems: 'center' 
    },
    trash_can: {
        marginLeft: 'auto',
        backgroundColor: 'red',
        width: 40,
        height: 40,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})