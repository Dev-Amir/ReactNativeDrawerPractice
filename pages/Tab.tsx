import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    const [colorBar, setColorBar] = useState('yellow');

    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: 'Updates',
          }}
        />
      </Tab.Navigator>
    );
  }


const Home: React.FC<any> = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const Setting: React.FC<any> = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Setting</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
    }
})


export default MyTabs;