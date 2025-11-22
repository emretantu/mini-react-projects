import { useState } from "react"

const MSG_NOTR = "Type your answer and hit Enter";
const MSG_TRUE = "✅ True!";
const MSG_FALSE = "❌ False! Again...";
 
const createRandomNumber = (min, max) => {
  let result = Math.random() * (max - min + 1) + min;
  result = Math.floor(result);
  return result;
}

const MathQuiz = ({ min, max, questionCount }) => {

  const [nthQuestion, setNthQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [firstNumber, setFirstNumber] = useState(createRandomNumber(min, max));
  const [secondNumber, setSecondNumber] = useState(createRandomNumber(min, max));
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState(MSG_NOTR);

  const createNewQuestion = () => {
    setFirstNumber(createRandomNumber(min, max));
    setSecondNumber(createRandomNumber(min, max));
    setAnswer("");
  }

  const handleSubmit = () => {
    if(answer === "") {
      return;
    }
    if (answer == firstNumber + secondNumber) {
      setMessage(MSG_TRUE);
      setScore(prev => prev + 1);
    } else {
      setMessage(MSG_FALSE);
    }
    // setTimeout(() => setMessage(MSG_NOTR), 2000);
    createNewQuestion();
    setNthQuestion(prev => prev + 1);
  }

  return (
    <div>
      <p>Score: {score} / {nthQuestion}</p>
      {
        nthQuestion < questionCount || !questionCount
        ? <>
          <label for="answer">{firstNumber} + {secondNumber} = </label>
          <input
            id="answer"
            type="number"
            placeholder="Type your answer"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            onKeyDown={e => {
              setMessage(MSG_NOTR);
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
          />
          <p>{message}</p>
        </>
        : <p>You're Done!</p>
      }
      {
        !questionCount || nthQuestion >= questionCount
        ? <button onClick={() => {
            setNthQuestion(0);
            setScore(0);
            createNewQuestion();
            setMessage(MSG_NOTR);
          }}>
            Reset
          </button>
        : ""
      }
    </div>
  )
}

export default MathQuiz