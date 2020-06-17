import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ArticleTab: React.FC<any> = () => {
  return (
    <Tab.Navigator
        style={{paddingTop: 25}}
    >
      <Tab.Screen name="Programmer" component={Programmer} />
      <Tab.Screen name="Sport" component={Sport} />
    </Tab.Navigator>
  );
}

const Programmer: React.FC<any> = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Programmer Article</Text>
        </View>
    )
}

const Sport: React.FC<any> = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sport Article</Text>
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

export default ArticleTab as React.ComponentType<any>;
