import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';

import theme from './src/theme'
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  )
}