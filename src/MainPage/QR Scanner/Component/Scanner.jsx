import React, { useState } from 'react';
import QrReader from 'react-qr-scanner'

const Scanner = () => {
  const [facingMode, setFacingMode] = useState('environment'); // Default to back camera

  const handleScan = (data) => {
    if (data) {
      console.log("QR Code data:", data); // Handle the scanned QR code data
    }
  };

  const handleError = (err) => {
    console.error("QR Scanner Error:", err); // Handle any errors during scanning
  };

  // const switchCamera = () => {
  //   // Toggle between front and back cameras
  //   setFacingMode((prevMode) => (prevMode === 'environment' ? 'user' : 'environment'));
  // };

  return (
    <div>
      <h2> Scanner hnn</h2>
      {/* <QrScanner
        delay={300} // Delay between scans
        constraints={{
          facingMode: 'environment'
      }}
        // key="environment"// Set camera mode based on user selection
        onError={handleError} // Error handling function
        onScan={handleScan} // Function to handle scanned data
        style={{ width: '100%', height: 'auto' }} // Style for the scanner
      /> */}
      <QrReader
          delay={300}
          style={{ width: '100%', height: 'auto' }}
          onError={handleError}
          onScan={handleScan}
          constraints={{
            audio: false,
            video: { facingMode: "environment" }}}
          />
      {/* <button onClick={switchCamera}> Camera</button> */}
    </div>
  );
};

export default Scanner;
