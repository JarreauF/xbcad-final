import React from "react";
import {
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//Screens 
import {Onboarding, DestinationDetail} from "./screens/"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName={'Onboarding'}
        >
        {/* Screens */}
        <Stack.Screen 
          name="Onboarding"
          components={Onboarding}
        />

        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default() =>{
  return <App/>;
}
