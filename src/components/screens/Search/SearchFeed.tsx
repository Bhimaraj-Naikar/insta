import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')
const GAP = 2
const SMALL = (width - GAP * 4) / 3  // 3 columns

const SearchFeed = () => {

    // Repeating grid pattern like Instagram Explore
    const renderPatternA = (key: number) => (
        <View style={styles.row} key={`a-${key}`}>
            <Image source={{ uri: `https://picsum.photos/seed/${key}a/200` }} style={styles.small} />
            <Image source={{ uri: `https://picsum.photos/seed/${key}b/200` }} style={styles.small} />
            <Image source={{ uri: `https://picsum.photos/seed/${key}c/200` }} style={styles.small} />
        </View>
    )

    // Big image on the right
    const renderPatternB = (key: number) => (
        <View style={styles.row} key={`b-${key}`}>
            <View style={styles.smallColumn}>
                <Image source={{ uri: `https://picsum.photos/seed/${key}d/200` }} style={styles.small} />
                <Image source={{ uri: `https://picsum.photos/seed/${key}e/200` }} style={styles.small} />
            </View>
            <Image source={{ uri: `https://picsum.photos/seed/${key}f/400` }} style={styles.large} />
        </View>
    )

    // Big image on the left
    const renderPatternC = (key: number) => (
        <View style={styles.row} key={`c-${key}`}>
            <Image source={{ uri: `https://picsum.photos/seed/${key}g/400` }} style={styles.large} />
            <View style={styles.smallColumn}>
                <Image source={{ uri: `https://picsum.photos/seed/${key}h/200` }} style={styles.small} />
                <Image source={{ uri: `https://picsum.photos/seed/${key}i/200` }} style={styles.small} />
            </View>
        </View>
    )

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {Array.from({ length: 5 }, (_, i) => (
                <View key={i}>
                    {renderPatternA(i * 3)}
                    {i % 2 === 0 ? renderPatternB(i * 3 + 1) : renderPatternC(i * 3 + 1)}
                    {renderPatternA(i * 3 + 2)}
                </View>
            ))}
        </ScrollView>
    )
}

export default SearchFeed

const styles = StyleSheet.create({
    container: {
        marginTop: GAP,
    },
    row: {
        flexDirection: 'row',
        gap: GAP,
        marginBottom: GAP,
    },
    small: {
        width: SMALL,
        height: SMALL,
        backgroundColor: '#ddd',
    },
    smallColumn: {
        gap: GAP,
    },
    large: {
        width: SMALL * 2 + GAP,
        height: SMALL * 2 + GAP,
        backgroundColor: '#ddd',
    },
})