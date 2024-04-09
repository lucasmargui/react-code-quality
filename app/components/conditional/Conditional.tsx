import React from 'react';

interface ConditionalMessageProps {
  isLoggedIn: boolean;
}

const ConditionalMessage: React.FC<ConditionalMessageProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back! You are logged in.</p>
      ) : (
        <p>Please log in to view this content.</p>
      )}
    </div>
  );
};

export default ConditionalMessage;
