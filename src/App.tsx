import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Welcome to {name}!</h1>
      <p>How are you feeling today?</p>
    </div>
  );
};