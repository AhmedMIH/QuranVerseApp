import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ChangeNotificationComponent from './ChangeNotificationComponent';
import ChangeModeComponent from './ChangeModeComponent';
import ChangeThemeComponent from './ChangeThemeComponent';
import HelpComponent from './HelpComponent';
import RateAppComponent from './RateAppComponent';
import ShareComponent from './ShareComponent';
import ChangeLangComponent from './ChangeLangComponent';

import styles from './styles';

const SettingList = () => {
  return (
    <ScrollView style={styles.container}>
      <ChangeNotificationComponent />
      <ChangeModeComponent />
      <ChangeThemeComponent />
      <ChangeLangComponent />
      <ShareComponent />
      <HelpComponent />
      <RateAppComponent />
    </ScrollView>
  );
};

export default SettingList;
