/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PaymentDetailScreen, TambahDataTamuScreen } from "../screens";

export type RootStackParams = {
  // QTI
  Tambah: undefined;
  Detail: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Detail"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Detail" component={PaymentDetailScreen} />
      <RootStack.Screen name="Tambah" component={TambahDataTamuScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
