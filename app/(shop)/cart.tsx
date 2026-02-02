import OrderListItem from '@/components/OrderListItem';
import SeparationLine from '@/components/SeparationLine';
import { useCART } from '@/context/Redux';
import { useTheme } from '@/context/ThemeContext';
import type { OrderItemType } from '@shared-types/order.types';
import { FontAwesome6 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

export default function Cart_Screen() {
    const theme = useTheme()
    const currency = '$';
    const shippingCost = 0.09;
    const tax = 0.18;
    const { cartState } = useCART()

    const [summary, setSummary] = useState({
        subTotal: 0,
        shipping: 0,
        taxes: 0,
        total: 0
    })

    const item_Counter = (list: OrderItemType[]) => {
        const count = list.reduce((acc, array) => acc + array.quantity, 0)
        if( count === 1 ) return `${count} item`
        if( count > 1 ) return `${count} items`
    }

    useEffect(() => {
        const Counter = (list: OrderItemType[]) => {
            const count = list.reduce((acc, array) => acc + array.quantity * array.price, 0);
            const shipping = count * shippingCost;
            const taxes = count * tax;
            const total = count + shipping + taxes;
            setSummary({
                subTotal: parseFloat(count.toFixed(2)),
                shipping: parseFloat(shipping.toFixed(2)),
                taxes: parseFloat(taxes.toFixed(2)),
                total: parseFloat(total.toFixed(2))
            })
        }
        Counter(cartState)
    }, [cartState])

    return (
        <SafeAreaView px={16} inset={true}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                horizontal={false}
                contentContainerStyle={{paddingBottom: 100}}
                >
                <Text style={[styles.page_title, {color: theme.text_main}]}>Cart</Text> 
                {/* ===== ORDER LIST ========== */}
                <View style={styles.orders_list}>
                    {cartState.map((item) => <OrderListItem item={item} key={item.productId.toString()}/>)}
                </View>
                {/* ===== SUMMARY =========== */}
                <View style={[styles.summary, {backgroundColor: theme.bg_second}]}>
                    <Text style={{color: theme.text_main, fontWeight: '600', fontSize: 18, marginBottom: 12}}>
                        Summary
                    </Text>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>Subtotal</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '600'}}>
                            {currency}&nbsp;{summary.subTotal}
                        </Text>
                    </View>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>Shipping</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '600'}}>
                            {currency}&nbsp;{summary.shipping}
                        </Text>
                    </View>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>All taxes</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '700'}}>
                            {currency}&nbsp;{summary.taxes}
                        </Text>
                    </View>
                    <SeparationLine margin={12} color={theme.text_main + "80"} />
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_main, fontWeight: '700', fontSize: 16}}>Total</Text>
                        <Text style={{color: theme.green, fontSize: 20, fontWeight: '700'}}>
                            {currency}&nbsp;{summary.total}
                        </Text>
                    </View>
                </View>
                <SeparationLine margin={30} color={theme.text_main + "80"} />
                {/* ===== CHECKOUT HEADER ROW ================= */}
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', gap: 12}}>
                        <FontAwesome6 name="cart-shopping" size={16} color={theme.green} />
                        <Text style={{color: theme.text_second}}>
                            {item_Counter(cartState)}
                        </Text>
                    </View>
                    <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '700'}}>
                        {currency}&nbsp;{summary.total}
                    </Text>
                </View>
                {/* ======== CHECKOUT BUTTON =========== */}
                <TouchableOpacity 
                    onPress={() => console.log("CHECKOUT")}
                    style={[styles.checkout_btn, {backgroundColor: theme.green}]}
                    >
                    <Text style={{fontWeight: '600', fontSize: 16}}>Checkout</Text>
                    <FontAwesome6 name="arrow-right-long" size={18} color={theme.bg_main} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    page_title: {
        fontSize: 24,
        fontWeight: '700',
        paddingVertical: 8
    },
    orders_list: {

    },
    summary: {
        padding: 16,
        borderRadius: 8,
        marginTop: 24
    },
    in_row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 4
    },
    checkout_btn: {
        width: '100%', 
        padding: 16, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        borderRadius: 8,
        marginTop: 16
    },





    article_text: {
        lineHeight: 24,
        fontSize: 16
    },

});