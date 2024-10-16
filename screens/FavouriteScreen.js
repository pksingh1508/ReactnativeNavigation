import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList";
import { useContext } from "react";
import { FavouriteContext } from "../store/context/favourite-context";
import { MEALS } from "../data/dummy-data";


function FavouriteScreen() {

    const favouriteMealsCtx = useContext(FavouriteContext);

    const favouriteMeals = MEALS.filter((meal) => favouriteMealsCtx.ids.includes(meal.id));

    if (favouriteMeals.length <= 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Favourite Meals.</Text>
            </View>
        )
    }

    return (
        <MealsList items={favouriteMeals} />
    )
};
export default FavouriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
});