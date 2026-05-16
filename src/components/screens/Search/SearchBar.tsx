import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { CONSTANT_COLOR } from '../../common/globalColors'
import Icon from 'react-native-vector-icons/Ionicons'
import Square from 'react-native-vector-icons/Ionicons'
import { nanoid } from '@reduxjs/toolkit'
import SearchFeed from './SearchFeed'
const SearchBar = () => {
    const Tabs = [
        { itemName: "IG Tv", id: nanoid() },
        { itemName: "Shop", id: nanoid() },
        { itemName: "Style", id: nanoid() },
        { itemName: "Sports", id: nanoid() },
        { itemName: "Auto", id: nanoid() },
        { itemName: "Sato", id: nanoid() },
        { itemName: "Mato", id: nanoid() },
        { itemName: "pato", id: nanoid() },
    ]
    console.log("Stringified data is here: ",JSON.stringify(Tabs))
    return (
        <>
            <View style={styles.searchContainer}>

                <View style={styles.container}>
                    <Icon name="search" color={CONSTANT_COLOR?.grey} size={24} />
                    <TextInput placeholder='Search' style={styles.searchBox} />
                </View>
                <View style={styles.scanContainer}>
                    <Icon name="scan" size={24} color="#000"/>
                    <View style={styles.scanOverly}>
                        <Square name="square-outline" color="#000" size={12}/>
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                    data={Tabs}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(id) => id.toString()}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.tabList}>
                            <Text style={styles.tabText}>{item?.itemName?.toLocaleUpperCase()}</Text>
                        </View>
                    )}
                />
            </View>
            <SearchFeed/>
        </>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: CONSTANT_COLOR?.greyBackground,
        marginHorizontal: 10,
        borderRadius: 8,
        paddingLeft: 10,
        overflow: 'hidden',
        paddingHorizontal: 10

    },
    searchBox: {
        height: 40,
        width: '85%'
    },
    tabList: {
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: CONSTANT_COLOR?.greyBackground,
        padding: 5,
        borderRadius: 8,
        marginTop: 15
    },
    tabText: {
        fontSize: 18,
        fontWeight: '600'
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scanContainer:{
        marginRight:20,
        justifyContent:'center',
        alignItems:'center',
        height:28,
        width:28
    },
    scanOverly:{
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
    }
   
})