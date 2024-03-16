import React from 'react';
import VerseComponent from '../Components/VerseComponent';
import Container from '../Components/Container';

const VerseScreen = ({
  route: {
    params: {item},
  },
}) => {
  return <Container>
    <VerseComponent item={item} />;
  </Container>
};

export default VerseScreen;
