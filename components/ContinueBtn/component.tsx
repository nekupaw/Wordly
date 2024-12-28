import {StyleSheet, Text, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    btn: {
        height: 70,
        width: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dadada",
        position: "fixed",
        bottom: 40,
        transitionDuration: "0.4s",
        transitionTimingFunction: "ease"
    },
    btnText: {
        color: "black",
        fontSize: 20,
        fontFamily: "sans-serif"
    },
    btnHidden: {
        transform: `translateY(${200}%)`
    }
});


function ContinueBtn({show = false}: {show: boolean}){
    return (
        <TouchableOpacity style={[styles.btn, !show ? styles.btnHidden : null]} disabled={!show}>
            <Text style={styles.btnText}>
                Continue
            </Text>
        </TouchableOpacity>
    )
}

export default ContinueBtn;