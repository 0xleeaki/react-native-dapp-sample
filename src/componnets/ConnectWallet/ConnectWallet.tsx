import {useWalletConnect} from '@walletconnect/react-native-dapp';
import * as React from 'react';
import {Button} from 'react-native';

const ConnectWallet: React.FC = () => {
  const {connected, killSession, connect} = useWalletConnect();

  const connectWallet = React.useCallback(async () => {
    console.log('connect...');
    // await createSession();
    await connect();
  }, [connect]);

  if (!connected) {
    /**
     *  Connect! 🎉
     */
    return <Button title="Connect wallet" onPress={connectWallet} />;
  }
  return <Button title="Disconnect" onPress={() => killSession} />;
};

export default ConnectWallet;
