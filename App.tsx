import React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from "@react-navigation/stack";
import FeedStack from './pages/Feed';
import ArticleTab from './pages/Article';
import MyTabs from './pages/Tab';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
        drawerContentOptions={{
            itemStyle: {alignItems: "center"},
            activeBackgroundColor: "black",
            activeTintColor: "white"
        }}
    >
      <Drawer.Screen name="Root" component={FeedStack} />
      <Drawer.Screen name="Tab" component={MyTabs} />
      <Drawer.Screen name="Article" component={ArticleTab} />
    </Drawer.Navigator>
  );
}

const App = () => {

    return (
        <NavigationContainer>
            <MyDrawer />         
            {/* <Stacks />   */}
        </NavigationContainer>
    )
}

export default App;