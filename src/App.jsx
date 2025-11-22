import { useState } from 'react';
import './App.css'
import Greeting from './components/Greeting'
import Dialog from './components/Dialog'
import Counter from './components/Counter';

function App() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <h1>Reusable Components</h1>
      <Greeting />
      <Greeting name="Emre" />
      <Greeting name="Jonathan" />
      <Greeting name="Mars" />

      <br />
      <h1>Composit Components</h1>
      <button onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Greeting />
        <Greeting name="John Doe" />
      </Dialog>

      <br /><br /><br />
      <h1>Counter</h1>
      <Counter />
    </>
  )

}

export default App
