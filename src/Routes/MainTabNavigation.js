import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import SettingScreen from '../Screens/SettingScreen';
import {getThemeColor} from '../Utils/Helper';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import SearchNavigation from './SearchNavigation';
import FavNavigation from './FavNavigation';

const MainTabNavigation = () => {
  const MainTab = createMaterialBottomTabNavigator();
  const {t} = useTranslation();
  const {darkMode} = useSelector(state => state.app);

  return (
    <MainTab.Navigator
      activeColor={'#EAB69F'}
      inactiveColor={getThemeColor(darkMode).darkPrimary}
      barStyle={{
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Set transparency here
      }}
      activeIndicatorStyle={{
        backgroundColor: 'rgba(255, 255, 255, 0)',
      }}>
      <MainTab.Screen
        name={t('17')}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Octicons
              name={focused ? 'home' : 'home'}
              color={focused ? '#EAB69F' : getThemeColor(darkMode).darkPrimary}
              size={24}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={t('15')}
        component={FavNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name={focused ? 'favorite' : 'favorite-border'}
              color={focused ? '#EAB69F' : getThemeColor(darkMode).darkPrimary}
              size={24}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={t('20')}
        component={SearchNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'search-sharp' : 'search'}
              color={focused ? '#EAB69F' : getThemeColor(darkMode).darkPrimary}
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
              color={focused ? '#EAB69F' : getThemeColor(darkMode).darkPrimary}
              size={24}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigation;
