import * as React from 'react';
import { View,Text } from 'react-native';

export default  function Pedidos ({navigation}) {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text OnPress = {() => navigation.navigate('Home') }
            style={{fontSize:26,fontWeight:'bold'}}>
            Pantalla de Pedidos </Text>
        </View>
    );   
}