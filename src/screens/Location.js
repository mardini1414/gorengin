import React from 'react';
import WebView from 'react-native-webview';

const Location = () => {
  return <WebView source={{uri: 'https://www.google.com/maps/'}} />;
};

export default Location;
