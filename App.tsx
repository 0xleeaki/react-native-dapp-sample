import AsyncStorage from '@react-native-async-storage/async-storage';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ConnectWallet from './src/componnets/ConnectWallet/ConnectWallet';

const App: React.FC = () => {
  return (
    <WalletConnectProvider
      bridge="https://bridge.walletconnect.org"
      clientMeta={{
        description: 'Connect with WalletConnect',
        url: 'https://walletconnect.org',
        icons: ['https://walletconnect.org/walletconnect-logo.png'],
        name: 'WalletConnect',
      }}
      redirectUrl={Platform.OS === 'web' ? '' : 'yourappscheme://'}
      storageOptions={{
        asyncStorage: {
          store: '',
          size: '',
          getStore: '',
        },
      }}>
      <View style={styles.container}>
        <Text style={styles.greeting}>ChaiSwap</Text>
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
