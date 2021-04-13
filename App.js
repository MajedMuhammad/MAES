import 'react-native-gesture-handler';
import React from 'react';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { SocketContext, socket } from './src/context/Socket';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';


const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <SocketContext.Provider value={socket}>
          <Navigation />
        </SocketContext.Provider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;