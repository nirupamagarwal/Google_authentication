import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";

// npx expo install @react-native-google-signin/google-signin
// npx expo install expo-dev-client

export default function App() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      
      androidClientId:
        "97517534044-buddgnfc5fdjps6t58ghrggik3s4amm2.apps.googleusercontent.com",
      
    });
  };

  useEffect(() => {
    configureGoogleSignIn();
  });

  const signIn = async () => {
    console.log("Pressed sign in");

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      setError();
    } catch (e) {
      setError(e);
    }
  };

  const logout = () => {
    setUserInfo(undefined);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(error)}</Text>
      {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
      {userInfo ? (
        <Button title="Logout" onPress={logout} />
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

