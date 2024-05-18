import { View, Text, StyleSheet, TextInput } from "react-native";
export default function Login() {
    return (
        <View>
            <Text>Login</Text>
            <form>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Email" style={styles.input} />
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry />

            </form>
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
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    },
    buttonStyle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        width: 200,
        height: 50,
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
})