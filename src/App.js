import React from 'react';
import './App.css';
import Header from './Header';
import Slot from './Slot';

function App() {
  return (
    <>
    <Header />
    <div className="slot__machine">
    <Slot x="😃" y="😃" z="😃" />
    <Slot x="😃" y="😃" z="😆"  />
    <Slot x="😅" y="😅" z="😅"  />
    <Slot x="🤣" y="😅" z="😅"  />
    </div>
   
    </>
  );
}

export default App;
