import AsyncStorage from '@react-native-async-storage/async-storage';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ConnectWallet from './src/componnets/ConnectWallet/ConnectWallet';

const App: React.FC = () => {
  return (
    <WalletConnectProvider
      storageOptions={{asyncStorage: AsyncStorage}}
      redirectUrl="myapp://">
      <View style={styles.container}>
        <Text style={styles.greeting}>ReactNativeDapp</Text>
        <View>
          <ConnectWallet />
        </View>
      </View>
    </WalletConnectProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default App;
