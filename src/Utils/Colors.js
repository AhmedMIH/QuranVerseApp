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
};

const dark = {
  ...commonColor,
  themeColor: '#000000',
  white: '#000000',
  gray: 'white',
  text: '#FFF',
};

const themes = {
  'light': { ...light },
  'dark': { ...dark },
};
export default themes;

