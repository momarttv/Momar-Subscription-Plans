import { Stack } from "expo-router";

export default function Paid() {
    return (
        <Stack>
            <Stack.Screen name="BasicMonthly" options={{ headerShown: true }} />
            <Stack.Screen name="Basicyearly" options={{ headerShown: true }} />
            <Stack.Screen name="PremiumMonthly" options={{ headerShown: true }} />
            <Stack.Screen name="Premiumyearly" options={{ headerShown: true }} />
            <Stack.Screen name="StandardMonthly" options={{ headerShown: true }} />
            <Stack.Screen name="Standardyearly" options={{ headerShown: true }} />
        </Stack>
    )
}