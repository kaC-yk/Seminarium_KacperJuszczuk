import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import Header from '../components/ui/Header';
import '../../global.css';
import Whole from '../components/ui/Whole';
import Footer from '@/components/ui/Footer';



SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
   
    <view className="flex-1 bg-blue-900 dark:bg-gray-600 ">
 <Header/>
 <Whole/>
 <Footer/>
    </view>
   
  );
}
