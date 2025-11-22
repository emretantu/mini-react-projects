import { useState } from 'react';
import './App.css'
import Greeting from './components/Greeting'
import Dialog from './components/Dialog'
import Counter from './components/Counter';
import MathQuiz from './components/MathQuiz';

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

      <br /><br /><br />
      <h1>Math Quiz</h1>
      <MathQuiz min={1} max={10} questionCount={10}/>
      <br />
      <MathQuiz min={20} max={30} questionCount={20}/>
      <br />
      <MathQuiz min={-15} max={15} />
    </>
  )

}

export default App
