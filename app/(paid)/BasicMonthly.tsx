import { View, Text, StyleSheet } from "react-native";
export default function BasicMonthly() {
    return (
        <View>
            <Text style={styles.title}>Basic Monthly Plan Package</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
    }
    
})