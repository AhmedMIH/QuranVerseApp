import React, { useState } from 'react';
import VersesList from '../Components/VersesList';
import { useFocusEffect } from '@react-navigation/native';
import Container from '../Components/Container';

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
  return <Container >
    <VersesList refresh={refresh} />;
  </Container>
};



export default HomeScreen;
