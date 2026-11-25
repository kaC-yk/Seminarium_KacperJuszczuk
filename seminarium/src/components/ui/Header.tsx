import * as React from 'react';
import { Platform } from 'react-native';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.webp';
import { Icon } from '@iconify/react';
export default function Header() {
  return (
      <div className="flex flex-row items-center justify-around px-4 py-4 bg-black-100 dark:bg-gray-800 rounded-full shadow-md mt-5">
        <div>
          <img src={logo} alt="Logo" className="h-8 w-auto" /> 
        </div>
        <div className="flex flex-col items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg px-2 py-1">
                <Icon icon="lucide:globe" height="24" style={{ color: '#d7c4c4' }}/>
               <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Strona główna</div>
        </div>
        <nav className="flex flex-col items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg px-2 py-1">
          <Icon icon="lucide:users" height="24" style={{ color: '#d7c4c4' }} />
        <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Bliskie kontakty</div>
        </nav>
        <div className="flex flex-col items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg px-2 py-1">
          <Icon icon="lucide:map" height="24" style={{ color: '#d7c4c4' }} />
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Mapa</div>
        </div>
        <div className="flex flex-col items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg px-2 py-1">
          <Icon icon="lucide:message-circle" height="24" style={{ color: '#d7c4c4' }} />
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Dyskusje</div>
        </div>
        <div className="flex flex-col items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg px-2 py-1">
          <Icon icon="lucide:alert-triangle" height="24" style={{ color: '#d7c4c4' }} />
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">Zagrożenie ogólnoeurpejskie</div>
        </div>



      </div>
  );
}
