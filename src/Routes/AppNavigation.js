import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../Screens/OnBoardingScreen';
import MainTabNavigation from './MainTabNavigation';
import {useSelector} from 'react-redux';
import {store} from '../Redux/Store';
import VerseScreen from '../Screens/VerseScreen';
import VerseTypeScreen from '../Screens/VerseTypeScreen';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  const {isOnBoardingShow} = useSelector(state => state.app);
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        {!isOnBoardingShow && (
          <AppStack.Screen name="onBoarding" component={OnBoardingScreen} />
        )}
        <AppStack.Screen name="MainTab" component={MainTabNavigation} />
        <AppStack.Screen name="Verse" component={VerseScreen} />
        <AppStack.Screen name="VerseType" component={VerseTypeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
