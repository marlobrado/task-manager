import { useState } from 'react'
import Header from './Header'

const Tasks = () => {
  const [inputValue, setInputValue] = useState('Teste')
  const [messages, setMessages] = useState([
    'hello world',
    'FSC is the best course in the world',
  ])

  const handleButtonClick = () => {
    setMessages([...messages, inputValue])
  }
  return (
    <div>
      <Header>
        <h1>Add a Task</h1>
      </Header>
      <input
        type="text"
        className="input"
        placeholder="Create your task..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button className="button" onClick={handleButtonClick}>
        Add
      </button>
    </div>
  )
}
export default Tasks
