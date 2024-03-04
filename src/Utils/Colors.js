const commonColor = {
  moreLight: '#F6E5DE',
  lightPrimary: '#ffdbcd',
  primary: '#FCEAE4',
  darkPrimary: '#52443D',
  borderColor: '#85736C',
  activeText: '#231A16',
  text: '#484646',
  fillProgressBar: '#8E4D2E',
  infillProgressBar: '#F1DFD8',
  seashell: '#FFF1EC',
  lemon: '#F5EDC0',
  pastel: '#CFDBC6',
  pink: '#FFDADA',
  lavender: '#EADDFF',
  diamond: '#C4E1FC',
  pinkLace: '#FED4FF',
  lightPastel: '#D0DFCD',
};

const light = {
  ...commonColor,
  themeColor: '#FFFFFF',
  white: '#FFFFFF',
  gray: 'gray',
  modalBackground: '#00000060',
};

const dark = {
  ...commonColor,
  themeColor: '#000000',
  white: '#000000',
  moreLight: '#302B28',
  lightPrimary: '#e6c6b8',
  primary: '#574E49',
  darkPrimary: '#adb3b8',
  borderColor: '#7A8992',
  activeText: '#DED8D5',
  text: '#B7B8B9',
  fillProgressBar: '#A2A2A2',
  infillProgressBar: '#0E201E',
  seashell: '#161616',
  lemon: '#3A3A3A',
  pastel: '#313637',
  pink: '#D1C7C7',
  lavender: '#D0CFD0',
  diamond: '#3E3E3E',
  pinkLace: '#E2E0E2',
  lightPastel: '#1C1C1C',
  modalBackground: '#ffffff60',

};

const themes = {
  'light': { ...light },
  'dark': { ...dark },
};
export default themes;

