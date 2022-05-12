import Index from "./src";
import Plug from "./src/pages/Plug&Play";
import {
  createAppContainer,
  createStackNavigator,
} from "react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Index} />
        <Stack.Screen name="Plug" component={Plug} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
