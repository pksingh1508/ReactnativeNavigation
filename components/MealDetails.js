import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability }) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    )
}
export default MealDetails;
const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 9,
        justifyContent: 'center',
        gap: 17
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});