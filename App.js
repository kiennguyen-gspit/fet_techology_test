import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import Navigator from './src/navigation'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const customFonts = {
    'Hellix-Regular': require('./src/assets/customFonts/Hellix-Regular.ttf'),
    'Hellix-Medium': require('./src/assets/customFonts/Hellix-Medium.ttf'),
  };
  useEffect(() => {
    loadFontsAsync();
  }, [fontsLoaded])
  
   loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }
  if(!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
