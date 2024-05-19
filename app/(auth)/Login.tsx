import { Link } from "expo-router";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Pressable } from "react-native";
export default function Login() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Email" style={styles.input} />
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry />

                <View style={styles.group}>
                    <Text style={styles.textLow}>Don't have an account?</Text>
                    <Link href="../(auth)/Register" asChild>
                        <Pressable style={styles.name}>
                            <Text style={styles.name}>Register</Text>
                        </Pressable>
                    </Link>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonStyle}>Login</Text>
                </View>
            </KeyboardAvoidingView>
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
        marginBottom: 20,
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