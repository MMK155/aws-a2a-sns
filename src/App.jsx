//aws imports
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

//providers
import { Provider } from 'react-redux';
//configure aws-amplify

//react imports
import MainLayout from './layout/MainLayout';
Amplify.configure(awsconfig);

try {
  Amplify.configure(awsconfig.default ? awsconfig.default : awsconfig);
} catch (err) {
  console.log('Appologies Unable to configure Amplify');
}
function App() {

  return (
    <>
      <MainLayout />

    </>
  )
}

export default App
