import React, { useState } from 'react';
import VersesList from '../Components/VersesList';
import { useFocusEffect } from '@react-navigation/native';
const HomeScreen = () => {
  const [ refresh, setRefresh ] = useState( false );

  useFocusEffect(
    React.useCallback( () => {
      setRefresh( true );
      // Cleanup function to reset the refresh state when the component is unfocused
      return () => {
        setRefresh( false );
      };
    }, [] )
  );
  return <VersesList refresh={refresh} />;
};



export default HomeScreen;
