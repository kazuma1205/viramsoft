import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


//importar Screen
import ScreenHome from '../Screens/ScreenHome'
import ScreenClientes from '../Screens/ScreenClientes'
import ScreenInventario from '../Screens/ScreenInventario'
import ScreenPedidos from '../Screens/ScreenPedidos'
import ScreenVentas from '../Screens/ScreenVentas'

//constantes de las Screen
const cshome = 'Home';
const csclientes = 'clientes';
const csinventario = 'Inventario';
const cspedidos = 'Pedidos';
const csventas = 'Ventas';

const Tab = createBottomTabNavigator();



export default function Maincontainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={cshome} screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === cshome) {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (rn === csinventario) {
                        iconName = focused ? 'list' : 'list-outline';
                    }
                    else if (rn === csclientes) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    else if (rn === cspedidos) {
                        iconName = focused ? 'list' : 'list-outline';
                    }
                    else if (rn === csventas) {
                        iconName = focused ? 'home' : 'home-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />

                },
            })}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'black',
                    labelStyle: { paddingBottom: 10, fonSize: 10 },
                    style: { padding: 15, heigt: 80 }
                }} >

                <Tab.Screen name={cshome} component={ScreenHome} />
                <Tab.Screen name={csclientes} component={ScreenClientes} />
                <Tab.Screen name={csinventario} component={ScreenInventario} />
                <Tab.Screen name={cspedidos} component={ScreenPedidos} />
                <Tab.Screen name={csventas} component={ScreenVentas} />


            </Tab.Navigator>
        </NavigationContainer>
    );
}