import CheckBox from '@/components/CheckBox';
import SafeAreaView from '@/components/SafeAreaView';
import { loremSmallText } from '@/constants/lorem_small';
import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Cookie_Use_Screen = () => {
    const theme = useTheme()
    const [checked, setChecked] = React.useState<boolean>(false)

    const checker = () => { setChecked((prev) => !prev) }

    return (
        <SafeAreaView px={24} inset={false}>
            <ScrollView  contentContainerStyle={{paddingBottom: 40}}>
                <Text style={[{color: theme.text_main}, styles.article_text]}>
                    {loremSmallText}
                </Text>
                <View style={[styles.separator, {backgroundColor: theme.text_main}]}/>
                <View style={styles.accept_terms}>
                    <CheckBox isChecked={checked} size={24} color={theme.blue} checker={checker}/>
                    <Text style={{color: theme.text_main, fontSize: 20, marginLeft: 20}}>
                        I agree with cookie usage. 
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
export default Cookie_Use_Screen;

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
        position: 'sticky',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        marginTop: 20
    }
})