import React, { useState } from 'react'
import QrScanner from 'react-qr-scanner';

const Scanner = () => {
    const [scanResult, setScanResult] = useState(null);

  // Handle the result after scanning
  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text); // Data will contain the scanned text
    }
  };

  // Handle errors
  const handleError = (error) => {
    console.error(error);
  };

  const previewStyle = {
    height: 240,
    width: 320,
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',         
    
  };
  return (
    <div style={{ textAlign: 'center' }} className=''>
    <h2>QR Code Scanner</h2>
    <QrScanner
      delay={300}              // Delay between scan attempts in ms
      style={previewStyle}      // Styling for the video preview
      onError={handleError}     // Error handler
      onScan={handleScan}       // Callback for scan result
    />
    <div>
      <h3>Scan Result:</h3>
      {scanResult ? (
        <p className='text-blue-800'>{scanResult}</p>
      ) : (
        <p>No QR code detected yet</p>
      )}
    </div>
  </div>
  )
}

export default Scanner
