import { createStackNavigator } from '@react-navigation/stack';

import Getstarted from '../screen/Getstarted';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from '../screen/Login';
import Home from '../screen/Home';
import Pt from '../screen/Pt';



const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='Getstarted'>
                <Stack.Screen name='Getstarted' component={Getstarted} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Pt' component={Pt} />
                
                
               


            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MyStack