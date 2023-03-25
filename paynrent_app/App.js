import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./component/navigation/RootNavigation.js";

export default function App() {

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  )
}