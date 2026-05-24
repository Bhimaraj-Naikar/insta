
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Header from './Home/Header'
import Post from './Home/Post'
import StorySection from './Home/StorySection'

const Homescreen = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Header />
            <StorySection />
            <Post />
        </ScrollView>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

