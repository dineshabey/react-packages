
// import './App.css';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert';
// import CustomAccordion from './CustomAccordion';
// import AccordiyantList from './AccordiyantList';
// import CustomModal from './CustomModal';

import TestMuiButton from "./TestMuiButton";



function App() {
  return (
    <div className='App'>
      {/* <Button variant="primary">Primary</Button>{' '} */}
      <br />
      {/* <AccordiyantList /> */}
      {/* <>
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </> */}
      <br />
      {/* <CustomModal btnTxt={'Open Me'}/> */}
      <TestMuiButton />

    </div>
  );
}

export default App;
