import React, { useState } from 'react';

export default function SimpleStateHooks() {

  const [count, setCount] = useState(0);
  // count: llama al estado
  // setCount: devuelve el estado

  return (
    <div>
      The count is: {count}
      <button
        onClick={() => setCount( count +1 )}>Increase Account
      </button>
        {/* no hay que pasar un objeto para devolver el estado */}
    </div>
  );
}