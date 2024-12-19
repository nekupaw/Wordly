import { styles } from "./style";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";


function Btn({ icon, page }: { icon: any; page: any }) {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.btn} onPress={() => router.push(page)}>
            <FontAwesome name={icon} size={35} />
        </TouchableOpacity>
    );
}

function NavBar() {
    return (
        <View style={styles.navBar}>
            <Btn icon="house" page="/" />
            <Btn icon="plus" page="/add/page" />
        </View>
    );
}

export default NavBar;
