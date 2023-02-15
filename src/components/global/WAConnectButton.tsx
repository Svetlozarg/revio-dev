import { ConnectButton } from '360dialog-connect-button';

const WAConnectButton = () => {
  const handleCallback = (callbackObject: any) => {
    /* The callback function returns the client ID as well as all channel IDs, 
    for which you're enabled to fetch the API key via the Partner API */

    console.log('client ID: ' + callbackObject.client);
    console.log('channel IDs: ' + callbackObject.channels);
  };

  return <ConnectButton partnerId={'ZN65H1PA'} callback={handleCallback} />;
};

export default WAConnectButton;
