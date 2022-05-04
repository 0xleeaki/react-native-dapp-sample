import {useWalletConnect} from '@walletconnect/react-native-dapp';
import * as React from 'react';
import {Button} from 'react-native';

const ConnectWallet: React.FC = () => {
  const connector = useWalletConnect();

  console.log('connector', connector);

  if (!connector.connected) {
    /**
     *  Connect! 🎉
     */
    return <Button title="Connect" onPress={() => connector.connect()} />;
  }
  return (
    <Button title="Kill Session" onPress={() => connector.killSession()} />
  );
};

export default ConnectWallet;
