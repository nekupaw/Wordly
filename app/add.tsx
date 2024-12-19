import React from "react";
import {Animated, View} from "react-native";
import ScrollView = Animated.ScrollView;
import LessonItem from "@/components/lessonItem/component";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 30
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
    }
})

export default function () {
    return (
        <View style={styles.view}>
            <View style={styles.top}>
                <p style={styles.headline}>Add a Lesson</p>
            </View>
            <ScrollView>

            </ScrollView>
        </View>
    );
}
