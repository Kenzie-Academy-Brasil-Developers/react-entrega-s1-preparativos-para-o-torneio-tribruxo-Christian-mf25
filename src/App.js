import { useState, useEffect } from "react"
import Characters from "./components/Characters"
import StartButton from "./components/StartButton"
import "./App.css"

function App() {

  const [characterList, setCharacterList] = useState([])
  const [show, setShow] = useState(true)

  const randomWizard = () => {
    return Math.floor(Math.random() * 11)
  }

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err))
  }, [])

  const handleShow = () => setShow(!show)

  return (
    <div className="App">
      {show ? (
        <StartButton handleShow={handleShow} />
      ) : (
        <Characters
          characterList={characterList}
          handleShow={handleShow}
          randomWizard={randomWizard}
        />
      )}
    </div>
  )
}

export default App