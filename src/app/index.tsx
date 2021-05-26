import React, { CSSProperties } from 'react';

const style: CSSProperties = ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'teal',
});

const App = () => (
  <main style={style}>
    <h1>
      This is a
      &nbsp;
      <u>React Application</u>
      &nbsp;
      🔥🚀
    </h1>
  </main>
);

export default App;
