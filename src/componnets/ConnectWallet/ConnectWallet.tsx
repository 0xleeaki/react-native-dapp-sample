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
    return (
      <Button title="Connect wallet" onPress={() => connector.connect()} />
    );
  }
  return <Button title="Disconnect" onPress={() => connector.killSession()} />;
};

export default ConnectWallet;
