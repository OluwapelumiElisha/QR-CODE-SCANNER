import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { useScanner } from "../hook/useScanner";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/Shared/hook/useCurrentUser";

const Scanner = () => {
  const { handleScan, handleError, scanResult } = useScanner();
  const { currentUser } = useCurrentUser()

  return (
    <div className="h-screen bg-customColor overflow-auto">
      <div className="flex justify-center text-center pt-10">
      <p className="text-white font-pregular text-xl">You are Welcome back, {currentUser?.data?.username} ❤️</p>
      </div>
      <div className="flex items-center justify-center pt-10">
        <div className="flex items-center justify-center w-90 h-90 rounded-lg border-2 border-orange-400 bg-gray-800">
        <QrReader
          delay={100}
          style={{ width: '100%', height: '100%' }}
          onError={handleError}
          onScan={handleScan}
          constraints={{
            audio: false,
            video: { facingMode: "environment" }}}
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <h3 className="text-white  text-md lg:text-xl md:text-xl sm:text-xl">Scan Result: &nbsp;</h3>
        {scanResult?.text ? (
          <p className="text-green-500">{scanResult.text}</p>
        ) : (
          <p className="text-white text-md lg:text-xl md:text-xl sm:text-xl">No QR code detected yet</p>
        )}
      </div>
      <div className="flex items-center justify-center mt-12 mb-12">
        <p className="opacity-0 mt-8 text-white text-sm">Loading...</p>
      </div>
    
    </div>
  );
};

export default Scanner;
