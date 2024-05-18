import { Link } from "expo-router";
import { View, Text, StyleSheet, ScrollView, Button, Pressable } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pricing Plans</Text>
            <Text style={styles.textN}>Choose a plan</Text>
            <Text style={styles.textO}>Yearly</Text>
            <Link href="(screen)/monthly" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonStyleM}>Monthly</Text>
                </Pressable>
            </Link>
            <ScrollView>
                <View style={styles.boxOne}>
                    <Text style={styles.text}>Basic</Text>
                    <Text style={styles.low}>What's in the basic plane </Text>
                    <Text style={styles.textTwo}>$120/Yearly</Text>

                        <Link href="../(paid)/BasicYearly" asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonStyle}>Get start</Text>
                            </Pressable>
                        </Link>

                </View>

                <View style={styles.boxOne}>
                    <Text style={styles.text}>Standard</Text>
                    <Text style={styles.low}>What's in the standard plane </Text>
                    <Text style={styles.textTwo}>$220/Yearly</Text>

                        <Link href="../(paid)/StandardYearly" asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonStyle}>Get start</Text>
                            </Pressable>
                        </Link>

                </View>

                <View style={styles.boxOne}>
                    <Text style={styles.text}>Premium</Text>
                    <Text style={styles.low}>What's in the premium plane </Text>
                    <Text style={styles.textTwo}>$320/Yearly</Text>

                        <Link href="../(paid)/PremiumYearly" asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonStyle}>Get start</Text>
                            </Pressable>
                        </Link>

                </View>

            </ScrollView>

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
        fontSize: 50,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
        marginTop: 20,
        textAlign: "center"
    },
    low: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
        marginTop: 20,
        textAlign: "center"
    },
    boxOne: {
        backgroundColor: "#000",
        width: 300,
        height: 400,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    textTwo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 80,
        textAlign: "center"
    },
    textN: {
        fontSize: 30,
        fontWeight: "bold",
        
        marginBottom: 80,
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
        color: "black",
        marginBottom: 10,
        textAlign: "center",
        backgroundColor: "white",
        width: 200,
        height: 30,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textO: {
        fontSize: 17,
        fontWeight: "bold",
        
        marginBottom: 80,
        textAlign: "center"
    },
    buttonStyleM: {
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