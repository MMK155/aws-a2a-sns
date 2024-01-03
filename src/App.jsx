import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
import './App.css'
try {
  Amplify.configure(awsconfig.default ? awsconfig.default : awsconfig);
} catch (err) {
  console.log('Appologies Unable to configure Amplify');
}
function App() {

  return (
    <>
      <div className="card">
        <p>PD Driver is here</p>
      </div>

    </>
  )
}

export default App
