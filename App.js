import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteContextProvider from './store/context/favourite-context';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return <Drawer.Navigator
    initialRouteName='Meal-Categories'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#242124'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      drawerActiveBackgroundColor: 'orange',
      drawerInactiveTintColor: 'black',
      drawerActiveTintColor: 'black',
      drawerStyle: {
        backgroundColor: '#3f2f25',
        width: '80%'
      },
      drawerInactiveBackgroundColor: '#FFE4E1',
      sceneContainerStyle: {
        backgroundColor: '#2A3439'
      }
    }}
  >
    <Drawer.Screen name='Meal-Categories' component={CategoriesScreen} options={{
      title: "All Categories", drawerIcon: ({ color, size }) => (
        <Ionicons name="list" color={color} size={size} />
      ),
    }} />
    <Drawer.Screen name='Favourite' component={FavouriteScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#242124'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              contentStyle: {
                backgroundColor: '#1B1B1B'
              }
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='Meal-Overview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
