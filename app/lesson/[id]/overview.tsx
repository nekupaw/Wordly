import React from "react";
import {Text, View} from "react-native";
import {StyleSheet} from "react-native";
import {useLocalSearchParams} from "expo-router/build/hooks";

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

    const {id} = useLocalSearchParams();

    return (
        <View style={styles.view}>
            <View style={styles.top}>
                <Text style={styles.headline}>{id}</Text>
            </View>
        </View>
    );
}

