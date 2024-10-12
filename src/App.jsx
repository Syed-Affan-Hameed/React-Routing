import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/neet/11' element={<Class11Program/>}></Route>
      <Route path='/neet/12' element={<Class12Program/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
      <h1>Vite + React</h1>
    </>
  )
}
function NotFound(){
  return(
    <>
    <h1>Sorry page not found!</h1>
    </>
  )
}
function Landing(){
  return(
    <>
    <h1>Welcome to studying</h1>
    </>
  )
}
function Class11Program(){
  return(
    <>
    <h1>Neet program for class 11</h1>
    </>
  )
}
  function Class12Program(){
    return(
      <>
      <h1>Neet program for class 12</h1>
      </>
    )
}
export default App
