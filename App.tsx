import SignInScreen from "./components/SignInScreen/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./components/SignIn/SignIn";

const stackNavigators = [
  {
    name: "home",
    component: SignInScreen,
    options: {
      // title: "Welcome!",
    },
  },
  {
    name: "signIn",
    component: SignIn,
    options: {},
  },
];

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {stackNavigators.map((element, index) => {
          return <Stack.Screen {...element} key={index} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  // return <StackNavigator />;
  return <SignInScreen />;
}
