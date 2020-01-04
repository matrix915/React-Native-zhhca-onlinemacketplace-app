import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash/splash-screen';
import LoginScreen from '../screens/login/login-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/home-screen';
import RecentChatsScreen from '../screens/chats/recent-chats-screen';
import SingleChatScreen from '../screens/chats/single-chat-screen';
import SelectProductTypeScreen from '../screens/sell/select-product-type-screen';
import SelectCategoryScreen from '../screens/sell/select-category-screen';
import ProductDetailsScreen from '../screens/sell/product-details-screen';
import ChooseLocationScreen from '../screens/sell/choose-location-screen';
import CongratulationScreen from '../screens/sell/congratulations-screen';
import ReviewContactScreen from '../screens/sell/review-contact-screen';
import UploadPictureScreen from '../screens/sell/upload-picture-screen';
import MyAdsScreen from '../screens/my-ads/my-ads-screen';
import MyAccountScreen from '../screens/account/account-screen';


const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chats" component={ChatModuleStackNavigator} />
      <Tab.Screen name="Sell" component={SellModuleStackNavigator} />
      <Tab.Screen name="My Ads" component={MyAdsScreen} />
      <Tab.Screen name="Account" component={MyAccountScreen} />
    </Tab.Navigator>
  );
}

function ChatModuleStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="RecentChats" headerMode="none">
      <Stack.Screen name="RecentChats" component={RecentChatsScreen} />
      <Stack.Screen name="SingleChatScreen" component={SingleChatScreen} />
    </Stack.Navigator>
  );
}

function SellModuleStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SelectProductTypeScreen" headerMode="none">
      <Stack.Screen name="SelectProductTypeScreen" component={SelectProductTypeScreen} />
      <Stack.Screen name="SelectCategoryScreen" component={SelectCategoryScreen} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
      <Stack.Screen name="ChooseLocationScreen" component={ChooseLocationScreen} />
      <Stack.Screen name="CongratulationScreen" component={CongratulationScreen} />
      <Stack.Screen name="ReviewContactScreen" component={ReviewContactScreen} />
      <Stack.Screen name="UploadPictureScreen" component={UploadPictureScreen} />
    </Stack.Navigator>
  );
}


export default function RootNavigator() {
  return <RootStack />;
}
