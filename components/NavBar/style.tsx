import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "white",
        height: 100,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 -5px 20px rgba(0, 0, 0, .1)"
    },
    btn: {
        height: 100,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        height: 90,
        width: 90,
        opacity: 0.3
    }
});
