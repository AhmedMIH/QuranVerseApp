import React from 'react';
import VerseComponent from '../Components/VerseComponent';

const VerseScreen = ({route}) => {
  const {item} = route.params;
  return <VerseComponent haveExit key={item.id} item={item} />;
};

export default VerseScreen;
