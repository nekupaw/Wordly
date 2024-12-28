import {Text, TouchableOpacity, View} from "react-native";
import {StyleSheet} from "react-native";
import {useRouter} from "expo-router";

const styles = StyleSheet.create({
    item: {
        padding: 25,
        boxSizing: "border-box",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#f6f6f6",
        marginTop: 20
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


function LessonItem({id}: { id: string }) {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.item} onPress={() => router.push(`/lesson/${id}/overview`)}>
            <Text style={styles.name}>{id}</Text>
            <View style={styles.bottom}>
                <Text style={styles.bottomFont}>words: {20}</Text>
                <Text style={styles.bottomFont}>lesson added: {new Date().toLocaleDateString('de-DE')}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LessonItem;