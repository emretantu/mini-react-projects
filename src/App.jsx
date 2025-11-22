import { useState } from 'react';
import './App.css'
import Greeting from './components/Greeting'
import Dialog from './components/Dialog'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <Greeting />
      <Greeting name="Emre" />
      <Greeting name="Jonathan" />
      <Greeting name="Mars" />

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Greeting />
        <Greeting name="John Doe" />
      </Dialog>
    </>
  )

}

export default App
