import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import HomeScreen from './screens/HomeScreen';
import DesignsScreen from './screens/DesignsScreen';
import ProfileScreen from './screens/ProfileScreen';
import FeedScreen from './screens/FeedScreen';
import {ACCENT} from './utils/constants';

const Tab = createMaterialBottomTabNavigator();

const commonOptions = {headerShown: false};

const getScreenTabOptions = ({label, icon}: any): any => ({
  tabBarIcon: icon,
  ...commonOptions,
  tabBarLabel: label,
});

const Navigation = () => (
  <Tab.Navigator
    barStyle={{backgroundColor: '#111'}}
    labeled={false}
    activeColor={ACCENT}
    inactiveColor="#fff"
    activeIndicatorStyle={{display: 'none'}}>
    <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={() => getScreenTabOptions({label: 'Feed', icon: 'home'})}
    />
    <Tab.Screen
      name="Explorar"
      component={HomeScreen}
      options={() => getScreenTabOptions({label: 'Explorar', icon: 'magnify'})}
    />
    <Tab.Screen
      name="Diseños"
      component={DesignsScreen}
      options={() =>
        getScreenTabOptions({
          label: 'Diseños',
          icon: 'book-open-page-variant',
        })
      }
    />
    <Tab.Screen
      name="Perfil"
      component={ProfileScreen}
      options={() => getScreenTabOptions({label: 'Perfil', icon: 'account'})}
    />
  </Tab.Navigator>
);

export default Navigation;
