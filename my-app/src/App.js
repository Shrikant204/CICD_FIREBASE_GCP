import React, { useState } from 'react';

function App() {

  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  function generatePassword ()  {

    let generatedPass1 = '';
    let generatedPass2 = '';

    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

    for (let i = 1; i <= 15; i++) {
      generatedPass1 += characters[Math.floor(Math.random() * characters.length)];
      generatedPass2 += characters[Math.floor(Math.random() * characters.length)];
    }

    setPass1(generatedPass1);
    setPass2(generatedPass2);
  };

  return (
    <div className="App">
      <h1>Your React App</h1>
      <button onClick={generatePassword}>Generate Passwords</button>
      <div>
        <input type="text" value={pass1} disabled />
        <input type="text" value={pass2} disabled />
      </div>
      {/* Other components and content */}
    </div>
  );
};

export default App;