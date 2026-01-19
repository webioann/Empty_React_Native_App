import { useTheme } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

export default function Shop_Screen() {
    const theme = useTheme();
    const [query, setQuery] = useState("")
    const [category, setCategory] = useState("All")

    const CATEGORIES = [
        { name: "All", icon: "grid-outline" as const },
        { name: "Electronics", image: require("@/assets/images/electronics.png") },
        { name: "Fashion", image: require("@/assets/images/fashion.png") },
        { name: "Sports", image: require("@/assets/images/sports.png") },
        { name: "Books", image: require("@/assets/images/books.png") },
    ];

    return (
        <SafeAreaView px={16} inset={true}>
            {/* === HEADER === */}
            <View style={styles.shop_header}>
                <View >
                    <Text style={[styles.page, {color: theme.text_main}]}>Shop</Text>
                    <Text style={{color: theme.text_second}}>Browse all products</Text>
                </View>
                <TouchableOpacity 
                    style={[styles.options_btn, {backgroundColor: theme.bg_second}]}
                    activeOpacity={0.6}
                    >
                    <Ionicons name="options-outline" size={24} color={theme.text_main} />
                </TouchableOpacity>
            </View>
            {/* === SEARCH BAR === */}
            <View style={[styles.searchbar, {backgroundColor: theme.bg_second}]}>
                <Ionicons name="search" size={22} color={theme.text_main} />
                <TextInput
                    placeholder='Search for products ...'
                    placeholderTextColor={theme.text_second}
                    style={[styles.input, {color: theme.text_main}]}
                    value={query}
                    onChangeText={setQuery}
                />
            </View>
            {/* === CATEGORY === */}
            <View style={styles.category}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal: 40}}
                > 
                    {CATEGORIES.map((category) => {
                        const d = ''
                        return (
                            <View key={category.name}></View>
                        )
                    })}

                </ScrollView>
            </View>

            {/* =================================================================================================== */}
            <Link href={'../(auth)/'} asChild style={{marginTop: 400, padding: 15, backgroundColor: 'blue', flex: 0}}>
                <Text>Go Home</Text>
            </Link>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    // HEADER ====
    shop_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    page: {
        fontSize: 24,
        fontWeight: '700'
    },
    options_btn: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    // SEARCH BAR ====
    searchbar: {
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginBottom: 16
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        
    },
    // CATEGORY ====
    category: {

    }
});

            {/* <Link href={'../(auth)/'} asChild>
                <Text>Go Home</Text>
            </Link> */}

            // <ColoredList color="purple" />
