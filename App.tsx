import Index from "./src";
import Plug from "./src/pages/Plug&Play";
import Tool from "./src/pages/Toolbox";
import Carte from "./src/pages/Carte";
import Equipe from "./src/pages/Equipe";

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
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Plug" component={Plug} />
        <Stack.Screen name="Tool" component={Tool} />
        <Stack.Screen name="Carte" component={Carte} />
        <Stack.Screen name="Equipe" component={Equipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
