// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button } from "react-native";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// import { useEffect, useState } from "react";

// // npx expo install @react-native-google-signin/google-signin
// // npx expo install expo-dev-client

// export default function App() {
//   const [error, setError] = useState();
//   const [userInfo, setUserInfo] = useState();

//   const configureGoogleSignIn = () => {
//     GoogleSignin.configure({
      
//       androidClientId:
//         "97517534044-buddgnfc5fdjps6t58ghrggik3s4amm2.apps.googleusercontent.com",
      
//     });
//   };

//   useEffect(() => {
//     configureGoogleSignIn();
//   });

//   const signIn = async () => {
//     console.log("Pressed sign in");

//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       setUserInfo(userInfo);
//       setError();
//     } catch (e) {
//       setError(e);
//     }
//   };

//   const logout = () => {
//     setUserInfo(undefined);
//     GoogleSignin.revokeAccess();
//     GoogleSignin.signOut();
//   };

//   return (
//     <View style={styles.container}>
//       <Text>{JSON.stringify(error)}</Text>
//       {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
//       {userInfo ? (
//         <Button title="Logout" onPress={logout} />
//       ) : (
//         <GoogleSigninButton
//           size={GoogleSigninButton.Size.Standard}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={signIn}
//         />
//       )}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });



// import { StatusBar } from "expo-status-bar";
// import FacebookLogin from "./components/Auth/FacebookLogin";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import { Colors } from "./constants/styles";
// import { store, persistor } from "./store/Redux/store";
// import { logout } from "./store/Redux/Favourites";
// import { StyleSheet, Text } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import IconButton from './components/ui/IconButton'

// const Stack = createNativeStackNavigator();

// function AuthStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: "white",
//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//     </Stack.Navigator>
//   );
// }

// function AuthenticatedStack() {
//   const dispatch = useDispatch();
//   function logoutHnadler() {
//     dispatch(logout());
//   }
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: "white",

//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen
//         options={{
//           headerRight: ({ tintColor }) => {
//             return (
//               <IconButton
//                 color={tintColor}
//                 onPress={logoutHnadler}
//                 icon={"log-out-outline"}
//                 size={24}
//               />
              
//             );
//           },
//         }}
//         name="Welcome"
//         component={WelcomeScreen}
//       />
//     </Stack.Navigator>
//   );
// }

// function Navigation() {
//   const isLogin = useSelector(
//     (state) => state.authenticationInfo.isAuthenticated
//   );

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         {!isLogin ? <AuthStack /> : <AuthenticatedStack />}
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Provider store={store}>
//         <StatusBar style="light" />
//         <PersistGate loading={null} persistor={persistor}>
//           <Navigation />
//           {/* <FacebookLogin/> */}
//           {/* <Text>fdfdfd</Text> */}
//         </PersistGate>
//       </Provider>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//     backgroundColor: "#212121",
//   },
// });
