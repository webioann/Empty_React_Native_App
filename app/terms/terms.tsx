import CheckBox from '@/components/CheckBox';
import SafeAreaView from '@/components/SafeAreaView';
import { useTheme } from '@/context/ThemeContext';
import { loremBigText } from '@/MOCK/lorem_big';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Terms_Screen = () => {
    const theme = useTheme()
    const [checked, setChecked] = useState(false)

    const checker = () => { setChecked((prev) => !prev) }

    return (
        <SafeAreaView px={16} inset={false}>
            <ScrollView contentContainerStyle={{paddingBottom: 40}}>
                <Text style={[{color: theme.text_main}, styles.article_text]}>
                    {loremBigText}
                </Text>
                {/* === CHECKBOX === */}
                <View style={[styles.separator, {backgroundColor: theme.text_main}]}/>
                <View style={styles.accept_terms}>
                    <CheckBox isChecked={checked} size={24} color={theme.blue} checker={checker}/>
                    <Text style={{color: theme.text_main, fontSize: 20, marginLeft: 20}}>
                        I agree all terms described here.
                    </Text>    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Terms_Screen;

const styles = StyleSheet.create({
    article_text: {
        lineHeight: 24,
        fontSize: 16
    },
    accept_terms:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 16,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        marginTop: 20
    }
})