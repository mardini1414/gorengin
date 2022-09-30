import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Scan = () => {
  return (
    <QRCodeScanner
      onRead={e => console.log('QR code scanned!', e)}
      showMarker={true}
    />
  );
};

export default Scan;
