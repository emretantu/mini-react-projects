import { useState } from 'react';
import './App.css'
import Greeting from './components/Greeting'
import Dialog from './components/Dialog'

function App() {

  const [isDialogOpen, setIsDialogOpen] = useState(true);

  return (
    <>
      <Greeting />
      <Greeting name="Emre" />
      <Greeting name="Jonathan" />
      <Greeting name="Mars" />

      <button onClick={() => setIsDialogOpen(true)}>Open Modal</button>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Greeting />
        <Greeting name="John Doe" />
      </Dialog>
    </>
  )

}

export default App
