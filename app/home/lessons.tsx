import React from "react";
import {Animated, Text, View} from "react-native";
import ScrollView = Animated.ScrollView;
import LessonItem from "@/components/lessonItem/component";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        display: "flex",
        flexDirection: "column",
        gap: 50
    },
    top: {
        paddingTop: 70,
        display: "flex",
        justifyContent: "flex-end"
    },
    headline: {
        fontSize: 50,
        fontFamily: "sans-serif",
        margin: 0,
        wordWrap: "break-word"
    },
    scrollView: {
        gap: 50
    }
})

export default function () {
    return (
        <View style={styles.view}>
            <View style={styles.top}>
                <Text style={styles.headline}>Home</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <LessonItem id={"OwO"}/>
            </ScrollView>
        </View>
    );
}
