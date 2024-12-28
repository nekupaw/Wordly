import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {StyleSheet} from "react-native";
import {useLocalSearchParams} from "expo-router/build/hooks";
import {useRouter} from "expo-router";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 30,
        gap: 50,
        display: "flex",
        flexDirection: "column"
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
    startBtn: {
        height: 70,
        width: `${100}%`,
        borderRadius: 15,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    startBtnText: {
        color: "white",
        fontSize: 25,
        fontFamily: "sans-serif"
    }
})


export default function () {

    const {id} = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.view}>
            <View style={styles.top}>
                <Text style={styles.headline}>{id}</Text>
            </View>

            <TouchableOpacity style={styles.startBtn} onPress={() => router.push('/lesson/OwO/exercises/flashcards')}>
                <Text style={styles.startBtnText}>Start Lesson</Text>
            </TouchableOpacity>
        </View>
    );
}

