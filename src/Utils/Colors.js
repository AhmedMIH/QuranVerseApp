const commonColor = {
  lightPrimary: '#ffdbcd',
  primary: '#FCEAE4',
  darkPrimary: '#52443D',
  borderColor: '#85736C',
  activeText: '#231A16',
  text: '#484646',
  fillProgressBar: '#8E4D2E',
  infillProgressBar: '#F1DFD8',
};

const light = {
  themeColor: '#FFFFFF',
  white: '#FFFFFF',
  gray: 'gray',
  ...commonColor,
};

const dark = {
  ...commonColor,
  themeColor: '#000000',
  white: '#000000',
  gray: 'white',
  text: '#FFF',
};

export default {light, dark};
