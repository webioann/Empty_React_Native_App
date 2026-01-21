import ProductCard from '@/components/ProductCard';
import { useTheme } from '@/context/ThemeContext';
import { mockProductData } from '@/MOCK/mock_product_data';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

export default function Shop_Screen() {
    const theme = useTheme();
    const [query, setQuery] = useState("")
    const [currentCategory, setCurrentCategory] = useState("All")

    const CATEGORIES = [
        { name: "All", icon: "grid-outline" as const },
        { name: "Electronics", image: require("@/assets/images/electronics.png") },
        { name: "Fashion", image: require("@/assets/images/fashion.png") },
        { name: "Sports", image: require("@/assets/images/sports.png") },
        { name: "Books", image: require("@/assets/images/books.png") },
    ];

    return (
        <SafeAreaView px={16} inset={true}>
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 40}}
                >
                {/* === HEADER === */}
                <View style={styles.shop_header}>
                    <View >
                        <Text style={[styles.page, {color: theme.text_main}]}>Shop</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: theme.text_second}}>Browse </Text>
                            <Text style={{color: theme.text_main}}>{currentCategory.toLowerCase()} </Text>
                            <Text style={{color: theme.text_second}}>products</Text>
                        </View>
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
                        contentContainerStyle={styles.category}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        >
                        {CATEGORIES.map((category) => {
                            const selected = currentCategory === category.name;
                            return (
                                <TouchableOpacity 
                                    style={[styles.category_card, {backgroundColor: selected ? theme.yellow : theme.bg_second}]} 
                                    onPress={() => setCurrentCategory(category.name)}
                                    activeOpacity={0.7}
                                    key={category.name}>
                                    { 
                                        category.image 
                                        ? <Image source={category.image} resizeMode='contain' style={styles.card_image}/> 
                                        : <Ionicons name={category.icon} size={50} color={selected ? theme.text_main : theme.text_second} />
                                    }
                                </TouchableOpacity>
                            )
                        })}    
                    </ScrollView>
                </View>
                {/* === PRODUCTS LIST === */}
                <FlatList 
                    data={mockProductData}
                    keyExtractor={item => item.name}
                    horizontal={false}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    contentContainerStyle={{gap: 16, marginTop: 24}}
                    renderItem={(item) => (<ProductCard product={item.item}/>)}
                    scrollEnabled={false}
                /> 



                {/* =================================================================================================== */}
                <Link href={'../(auth)/'} asChild style={{marginTop: 40, padding: 15, backgroundColor: theme.blue, flex: 0}}>
                    <Text>Go Home</Text>
                </Link>
                {/* ======================================================================================================= */}
            </ScrollView>
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
        // paddingHorizontal: 40,
        // paddingVertical: 8
    },
    category_card: {
        width: 80,
        height: 80,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, 
        marginRight: 16
    },
    card_image: {
        width: 60,
        height: 60,

    }
});

            {/* <Link href={'../(auth)/'} asChild>
                <Text>Go Home</Text>
            </Link> */}

            // <ColoredList color="purple" />
