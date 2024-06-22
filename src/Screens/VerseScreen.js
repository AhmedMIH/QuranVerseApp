import React from 'react';
import VerseComponent from '../Components/VerseComponent';

const VerseScreen = ({
  route: {
    params: {item},
  },
}) => {
  return <VerseComponent item={item} />;
};

export default VerseScreen;
