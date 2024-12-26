import {Slot, usePathname, useRouter} from "expo-router";
import NavBar from "@/components/NavBar/component";
import React, {useEffect} from "react";
import {View, StyleSheet} from "react-native";

export default function Layout() {
    const path = usePathname(),
        router = useRouter();

    useEffect(() => {
        if (path === '/') router.replace('/home/lessons');
    }, [router]);

    return <Slot />;
}
