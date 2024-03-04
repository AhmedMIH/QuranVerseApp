import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import SettingScreen from '../Screens/SettingScreen';
import SearchScreen from '../Screens/SearchScreen';
import { getThemeColor } from '../Utils/Helper';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';

const MainTabNavigation = () => {
  const MainTab = createMaterialBottomTabNavigator();
  const {t} = useTranslation();
  const { darkMode } = useSelector( ( state ) => state.app );

  return (
    <MainTab.Navigator
      activeColor={getThemeColor( darkMode ).activeText}
      inactiveColor={getThemeColor( darkMode ).darkPrimary}
      barStyle={{ backgroundColor: getThemeColor( darkMode ).primary }}
      activeIndicatorStyle={{ backgroundColor: getThemeColor( darkMode ).lightPrimary }}>
      <MainTab.Screen
        name={t('17')}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Octicons
              name={focused ? 'home' : 'home'}
              color={getThemeColor( darkMode ).darkPrimary}
              size={24}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={t('15')}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name={focused ? 'favorite' : 'favorite-border'}
              color={getThemeColor( darkMode ).darkPrimary}
              size={24}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={t('20')}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'search-sharp' : 'search'}
              color={getThemeColor( darkMode ).darkPrimary}
              size={24}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={t('19')}
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'settings-sharp' : 'settings-outline'}
              color={getThemeColor( darkMode ).darkPrimary}
              size={24}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigation;
