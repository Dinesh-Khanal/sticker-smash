import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import PartOne from "./screens/part-one";
import PartTwo from "./screens/part-two";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Button } from "react-native";
import { RootStackParamList } from "./types";
import ProductDetail from "./screens/product-detail";
import Cart from "./screens/cart";
import PartThree from "./screens/part-three";
import Login from "./screens/login";
import SignUp from "./screens/sign-up";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PartOne" component={PartOne} />
          <Stack.Screen
            name="PartTwo"
            component={PartTwo}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button title="Home" onPress={() => navigation.push("Home")} />
              ),
            })}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button title="Home" onPress={() => navigation.push("Home")} />
              ),
            })}
          />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="PartThree" component={PartThree} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
