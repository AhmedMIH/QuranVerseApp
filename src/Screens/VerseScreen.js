import React from 'react';
import VerseComponent from '../Components/VerseComponent';
import Container from '../Components/Container';

const VerseScreen = ({
  route: {
    params: {item},
  },
}) => {
  return <VerseComponent item={item} />;
};

export default VerseScreen;
