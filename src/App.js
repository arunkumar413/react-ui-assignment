import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { setEmail, setName } from "./stateManagement/userSlice";
import { useEffect } from "react";



export default function App() {

  const email = useSelector((state) => state.userReducer.email)
  const name = useSelector((state) => state.userReducer.name)
  const dispatch = useDispatch()


  function handleEmailChange(evt) {
    if (evt.target.name === 'name') {
      dispatch(setName(evt.target.value))

    }

    else if (evt.target.name === 'email') {
      dispatch(setEmail(evt.target.value))
    }

  }

  useEffect(function () {

    console.log(email)


  }, [email])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input onChange={handleEmailChange} name='name' />
      <input onChange={handleEmailChange} name='email' />

      <h2> {name}</h2>
      <h2> {email}</h2>

    </div>
  );
}
