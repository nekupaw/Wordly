import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        boxSizing: "border-box"
    },
    flashCard: {
        height: 170,
        width: `${100}%`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e1e1e1"
    },
    flashCardTop: {
        backgroundColor: "#b0b0b0",
        position: "absolute",
        height: `${100}%`,
        width: `${100}%`,
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transitionProperty: ".5s ease"
    },
    flashCardText: {
        fontSize: 30,
        color: "black"
    }

});

function FlashCard() {
    return (
        <TouchableOpacity style={styles.flashCard}>
            <View style={styles.flashCardTop}>
                <Text style={styles.flashCardText}>Hello</Text>
            </View>
            <Text style={styles.flashCardText}>Hallo</Text>
        </TouchableOpacity>
    )
}

export default function () {
    return (
        <View style={styles.view}>
            <FlashCard/>
        </View>
    )
}