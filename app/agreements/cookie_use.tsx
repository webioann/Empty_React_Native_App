import SafeAreaView from '@/components/SafeAreaView';
import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Cookie_Use_Screen = () => {
    const theme = useTheme()

    return (
        <SafeAreaView px={24} inset={false}>
            <ScrollView  contentContainerStyle={{paddingBottom: 40}}>
                <Text style={[{color: theme.text_main}, styles.article_text]}>COOKIE USE POLICY === But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</Text>
            </ScrollView>
        </SafeAreaView >
    )
}
export default Cookie_Use_Screen;

const styles = StyleSheet.create({
    article_text: {
        lineHeight: 24,
        fontSize: 16
    }
})