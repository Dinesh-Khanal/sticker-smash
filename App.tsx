import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import PartOne from "./screens/part-one";
import PartTwo from "./screens/part-two";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RootStackParamList } from "./types";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PartOne" component={PartOne} />
          <Stack.Screen name="PartTwo" component={PartTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
