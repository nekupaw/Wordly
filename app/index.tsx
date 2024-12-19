import React from "react";
import {Animated, View} from "react-native";
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
        height: 120,
        display: "flex",
        justifyContent: "flex-end"
    },
    headline: {
        fontSize: 50,
        fontFamily: "sans-serif",
        margin: 0
    },
    scrollView:{
        display: "flex",
        flexDirection: "column",
        gap: 50
    }
})

export default function () {
    return (
        <View style={styles.view}>
            <View style={styles.top}>
                <p style={styles.headline}>Home</p>
            </View>
            <ScrollView style={styles.scrollView}>
                <LessonItem name={"Unite 1"} date={new Date()} length={20}/>
                <LessonItem name={"Unite 1"} date={new Date()} length={20}/>
                <LessonItem name={"Unite 1"} date={new Date()} length={20}/>
                <LessonItem name={"Unite 1"} date={new Date()} length={20}/>
                <LessonItem name={"Unite 1"} date={new Date()} length={20}/>
                <LessonItem name={"Unite 1"} date={new Date()} length={20}/>
                <LessonItem name={"Unite 1"} date={new Date()} length={20}/>
                <LessonItem name={"Unite 1"} date={new Date()} length={20}/>
            </ScrollView>
        </View>
    );
}
