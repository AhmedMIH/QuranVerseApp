import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../Screens/SearchScreen';
import VerseTypeScreen from '../Screens/VerseTypeScreen';

const SearchStack = createNativeStackNavigator();

const SearchNavigation = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="SearchMain"
      screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="SearchMain" component={SearchScreen} />
      <SearchStack.Screen name="VerseType" component={VerseTypeScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
