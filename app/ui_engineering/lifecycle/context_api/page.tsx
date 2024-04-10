
"use client"

import { AuthComponentWithContext } from './(components)/authContext';
import LoginButton from './(components)/loginButton';

const App = () => {
  return (
    <AuthComponentWithContext>
      <LoginButton />
    </AuthComponentWithContext>
  );
};

export default App;