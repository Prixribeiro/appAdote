import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Cadastro from './src/pages/Cadastro';
import Feed from './src/pages/Feed';
import Login from './src/pages/Login';

const Tab = createBottomTabNavigator();
const Stack  = createStackNavigator()

function App() {
    CreateNavTab = () => (
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#FFA07A'}}>
        <Tab.Screen name="Home" component={Home}   
        options={{tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),
    }} />
        <Tab.Screen name="Sobre" component={Sobre} 
        options={{tabBarLabel: 'Sobre', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="charity" color={color} size={size} />),
    }}/>
        <Tab.Screen name="Login" component={Login} 
        options={{tabBarLabel: 'Login', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />),
    }}/>
        <Tab.Screen name="Feed" component={Feed} 
        options={{tabBarLabel: 'Feed', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="dog" color={color} size={size} />),
    }}/>
      </Tab.Navigator>
    );
  
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name=" " component={CreateNavTab} 
                options={{headerStyle: {backgroundColor: '#FFE4E1',},headerTintColor: '#000',}}/>
                <Stack.Screen name="Sobre" component={Sobre} />
                <Stack.Screen name="Cadastro" component={Cadastro} 
                options={{title: 'Acompanhe nossos resgates',headerStyle: {backgroundColor: '#FFE4E1',},headerTintColor: '#000',headerTitleStyle: {fontWeight: '300',},}}/>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Feed" component={Feed} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    }

export default App;