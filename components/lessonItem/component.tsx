import {View} from "react-native";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    item: {
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        padding: 25,
        boxSizing: "border-box",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1
    },

    name: {
        fontFamily: "sans-serif",
        fontSize: 30,
        margin: 0
    },

    bottom: {
        display: "flex",
        flexDirection: "column",
        gap: 3
    },

    bottomFont: {
        fontFamily: "sans-serif",
        fontSize: 20,
        margin: 0,
        color: "rgba(0, 0, 0, 0.7)"
    }
});


function LessonItem({name, date, length}: { name: string, date: Date, length: number }) {
    return (
        <View style={styles.item}>
            <p style={styles.name}>{name}</p>
            <View style={styles.bottom}>
                <p style={styles.bottomFont}>words: {length}</p>
                <p style={styles.bottomFont}>lesson added: {date.toLocaleDateString('de-DE')}</p>
            </View>
        </View>
    )
}

export default LessonItem;