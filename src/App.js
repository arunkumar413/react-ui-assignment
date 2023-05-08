import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { setEmail } from "./stateManagement/userSlice";



export default function App() {

  const {email} = useSelector((state) => state.user.email)
  const dispatch = useDispatch()


  function handleEmailChange(evt){

    dispatch(setEmail(evt.target.value))
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={email} onChange={handleEmailChange} name='name'/>
      <h2> {email}</h2>
    </div>
  );
}
