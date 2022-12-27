import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss';
import Button from './components/atoms/button/button';
import Input from './components/atoms/input/input';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Input/>
    <Button/>
    </>
  )
}

export default App
