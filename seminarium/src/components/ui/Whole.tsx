import * as React from 'react';
import { Platform } from 'react-native';
export default function Whole() {
  return (
    <div className="flex flex-col items-center justify-center px-4 bg-black-100 dark:bg-gray-700  min-h-screen">
      <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Witaj w aplikacji!</div>
      <div className="text-md font-normal text-gray-700 dark:text-gray-300">To jest przykładowa aplikacja stworzona przy użyciu React Native i Expo.</div>
    </div>
  );
};