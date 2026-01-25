//use of bootstrap and tailwindcss in the same react component

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
function App() {
    return (
  <div className='bg-stone-950'>
    <h1 className='bg-green-200 rounded-s-3xl border-8 border-rose-500'>Hello, React!</h1>
    <Button variant='warning' >Click me</Button>
    <Alert variant="danger">
        This is a warning alert—check it out!
    </Alert>
    </div>
    )
}
export default App;