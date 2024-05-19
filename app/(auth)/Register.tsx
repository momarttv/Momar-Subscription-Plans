import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
export default function Register() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput placeholder="Name" style={styles.input} />
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="Password" style={styles.input} secureTextEntry />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />

            <View style={styles.group}>
                    <Text style={styles.textLow}>Have a account?</Text>
                    <Link href="../(auth)/Login" asChild>
                        <Pressable style={styles.name}>
                            <Text style={styles.name}>Login</Text>
                        </Pressable>
                    </Link>
                </View>

            <View style={styles.button}>
                <Text style={styles.buttonStyle}>Register</Text>
            </View>
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
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    },
    buttonStyle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginBottom: 10,
        backgroundColor: "black",
        width: 200,
    },
    input: {
        width: 200,
        height: 50,
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 10,
        borderColor: "black",
        borderWidth: 1,
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "left",
        marginRight: 100,
        marginTop: 20,
    },
    textLow: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        color: "blue",
        textDecorationLine: "underline",
        marginLeft: 10,
    },
    group: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})