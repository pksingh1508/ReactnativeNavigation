import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function IconButton({ onPress, name, color }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Ionicons name={name} size={24} color={color} />
        </Pressable>
    )
}
export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});