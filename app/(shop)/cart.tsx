import OrderListItem from '@/components/OrderListItem';
import SeparationLine from '@/components/SeparationLine';
import { useTheme } from '@/context/ThemeContext';
import type { OrderItemType } from '@/types/product.type';
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

export default function Cart_Screen() {
    const theme = useTheme()
    const currency = '$';

    const OrderList: OrderItemType[] = [
        {
            productId: "idaaa77",
            productName: "Wireless Bluetooth Headphones Outback",
            price: 149.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        },
        {
            productId: "idaaa74",
            productName: "Portable Bluetooth Speaker",
            price: 79.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
        },
    ]

    return (
        <SafeAreaView px={16} inset={true}>
            <ScrollView 
                style={{flex: 1}}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                contentContainerStyle={{paddingBottom: 80, flex: 1, paddingTop: 16}}>
                <Text style={[styles.page_title, {color: theme.text_main}]}>Cart</Text> 
                {/* ===== ORDER LIST ========== */}
                <View style={styles.orders_list}>
                    <OrderListItem item={OrderList[0]}/>
                    <OrderListItem item={OrderList[1]}/>
                </View>
                {/* ===== SUMMARY =========== */}
                <View style={[styles.summary, {backgroundColor: theme.bg_second}]}>
                    <Text style={{color: theme.text_main, fontWeight: '600', fontSize: 18, marginBottom: 12}}>
                        Summary
                    </Text>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>Subtotal</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '600'}}>{currency}&nbsp;309.97</Text>
                    </View>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>Shipping</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '600'}}>{currency}&nbsp;10.00</Text>
                    </View>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>All taxes</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '700'}}>{currency}&nbsp;24.80</Text>
                    </View>
                    <SeparationLine margin={12} color={theme.text_main + "80"} />
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_main, fontWeight: '700', fontSize: 16}}>Total</Text>
                        <Text style={{color: theme.green, fontSize: 20, fontWeight: '700'}}>{currency}&nbsp;344.77</Text>
                    </View>
                </View>
                <SeparationLine margin={30} color={theme.text_main + "80"} />
                {/* ===== CHECKOUT HEADER ROW ================= */}
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', gap: 12}}>
                        <FontAwesome6 name="cart-shopping" size={16} color={theme.green} />
                        <Text style={{color: theme.text_second}}>3 items</Text>
                    </View>
                    <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '700'}}>{currency}&nbsp;344.77</Text>
                </View>
                {/* ======== CHECKOUT BUTTON =========== */}
                <View style={[styles.checkout_btn, {backgroundColor: theme.green}]}>
                    <Text style={{fontWeight: '600', fontSize: 16}}>Checkout</Text>
                    <FontAwesome6 name="arrow-right-long" size={18} color={theme.bg_main} />
                </View>
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