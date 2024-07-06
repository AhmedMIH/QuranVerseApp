import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoritesScreen from '../Screens/FavoritesScreen';
import VerseScreen from '../Screens/VerseScreen';

const FavStack = createNativeStackNavigator();

const FavNavigation = () => {
  return (
    <FavStack.Navigator
      initialRouteName="FavMain"
      screenOptions={{headerShown: false}}>
      <FavStack.Screen name="FavMain" component={FavoritesScreen} />
      <FavStack.Screen name="Verse" component={VerseScreen} />
    </FavStack.Navigator>
  );
};

export default FavNavigation;
