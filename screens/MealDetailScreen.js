import { Button, Image, ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import Underline from "../components/Underline";
import { FavouriteContext } from "../store/context/favourite-context";


function MealDetailScreen({ route, navigation }) {
    const favouriteMealCtx = useContext(FavouriteContext);
    const { mealId } = route.params;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsSelected = favouriteMealCtx.ids.includes(mealId);
    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.TOP);
    }

    function changeFavouriteStatusHandler() {
        if (mealIsSelected) {
            favouriteMealCtx.removeFavourite(mealId);
            showToast("Removed from favorites");
        } else {
            favouriteMealCtx.addFavourite(mealId);
            showToast("Added to favorites");
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        name={mealIsSelected ? 'star' : 'star-outline'}
                        color="white"
                        onPress={changeFavouriteStatusHandler}
                    />
                )
            }
        })
    }, [navigation, changeFavouriteStatusHandler])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <View style={styles.mealDetailContainer}>
                    <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
                </View>
                <Text style={styles.heading}>Ingredients</Text>
                <Underline />
                {selectedMeal.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.ingredientText}>&#x261B; {' '}{ingredient}</Text>
                ))}
                <Text style={styles.heading}>Steps</Text>
                <Underline />
                {selectedMeal.steps.map((step, index) => (
                    <Text key={index} style={styles.ingredientText}>{index + 1}. {' '}{step}</Text>
                ))}
            </View>
        </ScrollView>
    )
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10
    },
    image: {
        width: "100%",
        height: 350,
        borderRadius: 10,
        elevation: 6,
    },
    title: {
        color: "white",
        paddingTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    mealDetailContainer: {
        backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 10
    },
    heading: {
        fontSize: 25,
        fontWeight: 'semibold',
        color: "white",
        textAlign: "center"
    },
    ingredientText: {
        color: "white",
        paddingLeft: 19,
        marginVertical: 6,
        backgroundColor: '#FF7518',
        padding: 10,
        borderRadius: 10
    }
})