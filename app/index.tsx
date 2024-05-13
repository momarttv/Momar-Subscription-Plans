import { Link } from "expo-router";
import { View, Text, StyleSheet, ScrollView, Button, Pressable } from "react-native";

export default function Home() {
    return (
       <View style={styles.container}>
        <Text style={styles.title}>Welcome to MOmar {"\n"} Subscription Plan</Text>
        <Link href="./(screen)/monthly" asChild>
            <Pressable style={styles.button}>
                <Text style={styles.buttonStyle}>Welcome</Text>
            </Pressable>
        </Link>
        
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 80,
        textAlign: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
        marginTop: 20,
        textAlign: "center"
    },
    button: {
        
        width: 200,
        height: 30,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        color: "black"
    },
    buttonStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
        textAlign: "center",
        backgroundColor: "black",
        width: 200,
        height: 30,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
})