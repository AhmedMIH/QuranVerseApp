import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import SettingScreen from '../Screens/SettingScreen';
import SearchScreen from '../Screens/SearchScreen';
import {getColorTheme} from '../Utils/Helper';

const MainTabNavigation = () => {
  const MainTab = createMaterialBottomTabNavigator();

  return (
    <MainTab.Navigator
      activeColor={getColorTheme().activeText}
      inactiveColor={getColorTheme().darkPrimary}
      barStyle={{backgroundColor: getColorTheme().primary}}
      activeIndicatorStyle={{backgroundColor: getColorTheme().lightPrimary}}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Octicons
              name={focused ? 'home' : 'home'}
              color={getColorTheme().darkPrimary}
              size={24}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name={focused ? 'favorite' : 'favorite-border'}
              color={getColorTheme().darkPrimary}
              size={24}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'search-sharp' : 'search'}
              color={getColorTheme().darkPrimary}
              size={24}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'settings-sharp' : 'settings-outline'}
              color={getColorTheme().darkPrimary}
              size={24}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigation;
