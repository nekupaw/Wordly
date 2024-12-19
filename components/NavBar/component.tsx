import {styles} from "./style";
import {Image, TouchableOpacity, View} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";
import {useRouter} from "expo-router";


function Btn({icon, page}: { icon: any; page: any }) {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.btn} onPress={() => router.push(page)}>
            <FontAwesome6 name={icon} size={35}/>
        </TouchableOpacity>
    );
}

function NavBar() {
    return (
        <View style={styles.navBar}>
            <Btn icon="house" page="/"/>
            <Image source={require('../../assets/images/icon.png')} style={styles.icon}/>
            <Btn icon="plus" page="/add"/>
        </View>
    );
}

export default NavBar;
