import { useTheme } from '@/context/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

import { loremBigText } from '@/MOCK/lorem_big';

export default function Cart_Screen() {
    const theme = useTheme()
    return (
        <SafeAreaView px={16} inset={true}>
            <ScrollView 
                style={{flex: 1}}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                contentContainerStyle={{paddingBottom: 80, flex: 1, paddingTop: 16}}>
                <Text style={{fontSize: 24, color: theme.text_main}}>Cart Screen</Text>    
                <Text style={[{color: theme.text_main}, styles.article_text]}>
                    {loremBigText}
                </Text>
                <View style={[styles.separator, {backgroundColor: theme.text_main}]}/>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    article_text: {
        lineHeight: 24,
        fontSize: 16
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        marginTop: 20
    }

});