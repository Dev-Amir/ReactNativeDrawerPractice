import React, { ComponentType } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Feed: React.FC<any> = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Feed page</Text>

            <View style={styles.buttonView}>
                <Button title="Open Menu" onPress={() => navigation.openDrawer()} />
            </View>

            <View style={styles.buttonView}>
                <Button title="Go to Article" onPress={() => navigation.navigate("Article")} />
            </View>
        </View>
    )
}

const Stack = createStackNavigator();

const FeedStack: React.FC<any> = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="root" component={Feed} />
        </Stack.Navigator>
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
    },
    buttonView: {
        marginTop: 30
    }
})

export default FeedStack as ComponentType<any>;