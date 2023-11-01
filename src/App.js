import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import QuickSightDashboard from './QuickSightDashboard'; // Import QuickSightDashboard

Amplify.configure(awsconfig);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <QuickSightDashboard /> {/* Render QuickSightDashboard here */}
    </>
  );
}

export default withAuthenticator(App);
