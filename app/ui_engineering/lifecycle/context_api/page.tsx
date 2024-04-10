
"use client"

import { AuthComponentWithContext } from '@/app/ui_engineering/lifecycle/context_api/(components)/authContext';
import LoginButton from '@/app/ui_engineering/lifecycle/context_api/(components)/loginButton';

const App = () => {
  return (
    <AuthComponentWithContext>
      <LoginButton />
    </AuthComponentWithContext>
  );
};

export default App;