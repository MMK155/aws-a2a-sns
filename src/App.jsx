//aws imports
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

//providers
import { Provider } from 'react-redux';
import Store from './store/store';
//configure aws-amplify

//react imports
import MainLayout from './layout/MainLayout';
import Routing from './Routes/routing';
Amplify.configure(awsconfig);

try {
  Amplify.configure(awsconfig.default ? awsconfig.default : awsconfig);
} catch (err) {
  console.log('Appologies Unable to configure Amplify');
}
function App() {

  return (
    <>
      <Provider store={Store}>
        <Routing />
      </Provider>
    </>
  )
}

export default App
