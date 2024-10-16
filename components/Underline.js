import { StyleSheet, View } from "react-native";


function Underline() {
    return (
        <View style={styles.container}></View>
    )
}
export default Underline;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 6,
        backgroundColor: 'orange',
        borderRadius: 8,
        marginHorizontal: 'auto',
        marginVertical: 6
    }
});