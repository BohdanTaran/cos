import axios from 'axios';
import { useEffect, useState } from 'react';

export const App = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    axios
      .get('https://onlinestore-2st0.onrender.com/hello')
      .then((response) => {
        setResult(response.data);
      });
  }, []);

  return (
    <div>
      <span>{result}</span>
    </div>
  );
};
