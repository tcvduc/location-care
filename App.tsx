import Home from "./components/Home/home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const stackNavigators = [
  {
    name: "home",
    component: Home,
    options: {
      // title: "Welcome!",
    },
  },

  {
    name: "signIn",
    component: SignIn,
    options: {},
  },

  {
    name: "Sign Up",
    component: SignUp,
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
  return <Home />;
}
