import SignInScreen from "./components/SignInScreen/SignInScreen";
// const stackNavigators = [
//   // {
//   //   name: "home",
//   //   component: SignInScreen,
//   //   options: {
//   //     // title: "Welcome!",
//   //   },
//   // },
//   {
//     name: "onboard-scroll-view",
//     component: ScollView,
//     options: {
//       // title: "Welcome!",
//     },
//   },
// ];

// const Stack = createNativeStackNavigator();

// const StackNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {stackNavigators.map((element, index) => {
//           return <Stack.Screen {...element} key={index} />;
//         })}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default function App() {
  return <SignInScreen />;
}
