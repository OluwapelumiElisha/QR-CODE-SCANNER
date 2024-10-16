import React, { useState } from 'react'
import QrScanner from 'react-qr-scanner';

const Scanner = () => {
  //   const [scanResult, setScanResult] = useState(null);

  // const handleScan = (data) => {
  //   if (data) {
  //     setScanResult(data.text); 
  //   }
  // };

  // const handleError = (error) => {
  //   console.error(error);
  // };

  // const previewStyle = {
  //   height: 240,
  //   width: 320,
  //   display: 'flex',
  //   justifyContent: 'center',  
  //   alignItems: 'center',         
    
  // };
  return (

    <div className='h-screen bg-customColor overflow-auto'>
      <div className='flex items-center justify-center pt-10'>
          <div className="flex items-center justify-center w-60 h-60 rounded-lg border-2 border-orange-400 bg-gray-800">
          <QrScanner
            delay={300}
            // onError={handleError}     
           onScan={handleScan} 
          />
          </div>
      </div>
    </div>
  //   <div style={{ textAlign: 'center' }} className=''>
  //   <h2>QR Code Scanner</h2>
  //   <QrScanner
  //     delay={300}              
  //     style={previewStyle}      
  //     onError={handleError}     
  //     onScan={handleScan}       
  //   />
  //   <div>
  //     <h3>Scan Result:</h3>
  //     {scanResult ? (
  //       <p className='text-blue-800'>{scanResult}</p>
  //     ) : (
  //       <p>No QR code detected yet</p>
  //     )}
  //   </div>
  // </div>
  )
}

export default Scanner
