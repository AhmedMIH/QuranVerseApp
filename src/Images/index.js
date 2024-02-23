import {Image} from 'react-native';

const images = {
  onBoardingImage: Image.resolveAssetSource(require('./onBoardingImage.png')),
  backgroundImage: Image.resolveAssetSource(
    require('./background/backgroundImage.png'),
  ),
  backgroundImage2: Image.resolveAssetSource(
    require('./background/backgroundImage2.jpeg'),
  ),
  backgroundImage3: Image.resolveAssetSource(
    require('./background/backgroundImage3.jpeg'),
  ),
  backgroundImage4: Image.resolveAssetSource(
    require('./background/backgroundImage4.jpeg'),
  ),
  backgroundImage5: Image.resolveAssetSource(
    require('./background/backgroundImage5.jpeg'),
  ),
  backgroundImage6: Image.resolveAssetSource(
    require('./background/backgroundImage6.jpeg'),
  ),
};

export default images;
