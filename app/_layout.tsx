import { Slot } from "expo-router";
import NavBar from "@/components/NavBar/component";
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "column-reverse",
    },
});

export default function RootLayout() {
    return (
        <View style={styles.root}>
            <NavBar />
            <Slot />
        </View>
    );
}
