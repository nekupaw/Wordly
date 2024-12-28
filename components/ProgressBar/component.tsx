import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 20,
        width: `${80}%`,
        position: "fixed",
        top: 30,
        overflow: "hidden",
        borderRadius: 20,
        backgroundColor: "#eaeaea"
    },
    progressBar: {
        height: `${100}%`,
        width: `${30}%`,
        backgroundColor: "black"
    }

})

function ProgressBar() {
    return (
        <div style={styles.container}>
            <div style={styles.progressBar}></div>
        </div>
    )
}

export default ProgressBar;