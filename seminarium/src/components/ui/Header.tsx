import * as React from 'react';
import { Platform } from 'react-native';

export default function Header() {
  return (
    <div className="flex-1">
      <div className="bg-red dark:bg-black h-16 flex items-center justify-center">
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">Seminarium</h1>
      </div>
    </div>
  );
}
