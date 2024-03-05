import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FavsList from '../FavList/FavsList';
import EmptyComponent from '../EmptyComponent';

const index = ( { verses, type, onRefresh } ) => {
  const { darkMode } = useSelector( state => state.app )
  const { t } = useTranslation()

  if ( verses?.length > 0 ) {
    return <FavsList verses={verses} type={type} />;
  }
  return <EmptyComponent text={t( '38' )} onPressRefresh={onRefresh} />
};

export default index;
