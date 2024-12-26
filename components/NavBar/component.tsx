import {styles} from "./style";
import {Image, TouchableOpacity, View} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";
import {usePathname, useRouter} from "expo-router";
import {useEffect, useState} from "react";


function Btn({icon, page}: { icon: any; page: any }) {
    const router = useRouter(),
        path = usePathname(),
        [isCurrentPage, setIsCurrentPage] = useState(false);

    useEffect(() => {
        setIsCurrentPage(path === page);
    }, [path, page]);

    return (
        <TouchableOpacity style={styles.btn} onPress={() => router.push(page)} disabled={isCurrentPage}>
            <FontAwesome6 name={icon} size={35} style={{opacity: isCurrentPage ? 0.5 : 1}}/>
        </TouchableOpacity>
    );
}

function NavBar() {

    return (
        <View style={styles.navBar}>
            <Btn icon="house" page="/home/lessons"/>
            <Image source={require('../../assets/images/icon.png')} style={styles.icon}/>
            <Btn icon="plus" page="/home/add"/>
        </View>
    )
}

export default NavBar;
