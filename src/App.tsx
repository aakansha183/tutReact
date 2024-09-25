// import React from 'react';
// import CustomButton from './components/customButton/customButton';

// import Cus/tomButton from "./components/muiButton/muiButton"; 

// const App: React.FC = () => {
//   const handleClick = () => {
//     console.log('Hello');
//   };
//   return (
//     <div>
//       <CustomButton onClick={handleClick}>
//         I'm Done
//       </CustomButton>

//     </div>
//   );
// };

// export default App;

// App.tsx
// import React, { useState } from 'react';
// import TextField from './components/TextField/TextField';

// const App: React.FC = () => {
//   const [text, setText] = useState("");

//   return (
//     <div className="App">
//       <h1>Custom TextField Example</h1>
//       <TextField
//         label="Enter your name"
//         placeholder="Type here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import MyForm from './components/TextField/formcomponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Form</h1>
      <MyForm />  
    </div>
  );
};

export default App;
// App.tsx


// import React from 'react';
// import CustomButton from './components/muiButton/muiButton';

// const App: React.FC = () => {
//   return (
//     <div>
//       <CustomButton variant='contained' onClick={() => alert('Hello!')}>
//         hello mui
//       </CustomButton>
//     </div>
//   );
// };

// export default App;
