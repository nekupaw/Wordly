import React from "react";
import {Animated, Text, View} from "react-native";
import ScrollView = Animated.ScrollView;
import LessonItem from "@/components/LessonItem/component";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 30
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
    }
})

export default function () {
    return (
        <View style={styles.view}>
            <View style={styles.top}>
                <Text style={styles.headline}>Add a Lesson</Text>
            </View>
            <ScrollView>

            </ScrollView>
        </View>
    );
}
