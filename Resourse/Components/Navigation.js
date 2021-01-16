import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../Pages/Home';
import Notification from '../Pages/Notification';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Notifications" component={Notification} />
            </Stack.Navigator>
    );
}