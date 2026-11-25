import * as React from 'react';
import { Platform } from 'react-native';
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center px-4 bg-black-100 dark:bg-gray-900 sticky top-0 absolute bottom-0 w-full">
      <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Witaj w aplikacji!</div>
      <div className="text-md font-normal text-gray-700 dark:text-gray-300">stopka</div>
    </div>
  );
};