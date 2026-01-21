import { useTheme } from '@/context/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

import { loremBigText } from '@/MOCK/lorem_big';

export default function Cart_Screen() {
    const theme = useTheme()
    const currency = '$';

    return (
        <SafeAreaView px={16} inset={true}>
            <ScrollView 
                style={{flex: 1}}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                contentContainerStyle={{paddingBottom: 80, flex: 1, paddingTop: 16}}>
                <Text style={[styles.page_title, {color: theme.text_main}]}>Cart</Text> 
                <View style={styles.orders_list}>

                </View>
                <View style={[styles.summary, {backgroundColor: theme.bg_second}]}>
                    <Text style={{color: theme.text_main, fontWeight: '700', fontSize: 18, marginBottom: 12}}>
                        Summary
                    </Text>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>Subtotal</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '700'}}>{currency}&nbsp;309.97</Text>
                    </View>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>Shipping</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '700'}}>{currency}&nbsp;10.00</Text>
                    </View>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_second}}>All taxes</Text>
                        <Text style={{color: theme.text_main, fontSize: 16, fontWeight: '700'}}>{currency}&nbsp;24.80</Text>
                    </View>
                    <View style={[styles.separator, {backgroundColor: theme.text_main + "80"}]}/>
                    <View style={styles.in_row}>
                        <Text style={{color: theme.text_main, fontWeight: '700', fontSize: 16}}>Total</Text>
                        <Text style={{color: theme.green, fontSize: 20, fontWeight: '700'}}>{currency}&nbsp;344.77</Text>
                    </View>

                </View>
                
                <Text style={[{color: theme.text_main}, styles.article_text]}>
                    {loremBigText}
                </Text>
                <View style={[styles.separator, {backgroundColor: theme.text_main}]}/>
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
        
    },
    in_row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 4
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        marginVertical: 10,
    },




    article_text: {
        lineHeight: 24,
        fontSize: 16
    },

});