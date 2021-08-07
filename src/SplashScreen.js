import React, { useEffect } from "react";
import { Text } from "react-native";
import RNBootSplash from "react-native-bootsplash";
import Tabs from './component/BottomTabs';
function SplashScreen() {
  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return <Tabs />;
}

export default SplashScreen;