import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
export default function BasicMonthly() {
    return (
        <View>
            <Text style={styles.title}>Basic Monthly Plan Package</Text>
            
            <View>
                <Text style={styles.list}>Change username</Text>
                <Text style={styles.list}>Basic voice channels</Text>
                <Text style={styles.list}>Basic text channels</Text>
                <Text style={styles.list}>Basic roles</Text>
                <Text style={styles.list}>Basic emojis</Text>
                <Text style={styles.list}>Basic categories</Text>
                <Text style={styles.list}>Basic stickers</Text>
            </View>

            <View style={styles.group}>
                <Text>Sign in to keep your progress: </Text>
                <Link href="../(auth)/Login" asChild>
                    <Pressable style={styles.buttonGroup}>
                        <Text style={styles.buttonStyleG}>Sign in</Text>
                    </Pressable>
                </Link>
            </View>

            <View>
                <Link href="" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonStyle}>Buy</Text>
                    </Pressable>
                </Link>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
    },
    list: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 15,
        color: "#000000",
        textAlign: "center",
    },
    button: {
        
        width: 200,
        height: 30,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        marginTop: 100,
        marginLeft: 100,
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
    group: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginLeft: 100,
        marginRight: 100,
    },
    buttonGroup: {

    },
    buttonStyleG: {
        color: "blue",
        textDecorationLine: "underline",
        marginLeft: 10,
    },
})