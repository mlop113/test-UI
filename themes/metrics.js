import { Dimensions } from 'react-native';
import React from 'react';
const { width, height } = Dimensions.get('window')
const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
}
export default metrics