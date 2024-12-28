import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Dispatch, SetStateAction, useState} from "react";
import ContinueBtn from "@/components/ContinueBtn/component";
import ProgressBar from "@/components/ProgressBar/component";

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
        backgroundColor: "#ececec"
    },
    flashCardTop: {
        top: 0,
        left: 0,
        backgroundColor: "#dadada",
        position: "absolute",
        height: `${100}%`,
        width: `${100}%`,
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transitionDuration: "0.3s",
        transitionTimingFunction: "ease",
        overflow: "hidden"
    },
    flashCardShow: {
        width: 0
    },
    flashCardText: {
        fontSize: 30,
        color: "black"
    }
});

function FlashCard({ setShowContinueBtn }: { setShowContinueBtn: Dispatch<SetStateAction<boolean>> }) {
    const [showCard, setShowCard] = useState<boolean>(false);

    function show(){
        setShowCard(!showCard);
        setShowContinueBtn(true);
    }

    return (
        <TouchableOpacity style={styles.flashCard} onPress={show}>
            <View style={[styles.flashCardTop, showCard ? styles.flashCardShow : null]}>
                <Text style={styles.flashCardText}>Hello</Text>
            </View>
            <Text style={styles.flashCardText}>Hallo</Text>
        </TouchableOpacity>
    )
}

export default function () {

    const [showContinueBtn, setShowContinueBtn] = useState<boolean>(false);

    return (
        <View style={styles.view}>
            <ProgressBar/>
            <FlashCard setShowContinueBtn={setShowContinueBtn}/>
            <ContinueBtn show={showContinueBtn}/>
        </View>
    )
}