import './App.css';
import SignIn from './components/SignIn';
import {useAuthState} from "react-firebase-hooks"
import {auth} from "./firebase"

function App() {
  const user = useAuthState(auth);
  return (
    <div>
      (user ? )
      <SignIn />
    </div>
  );
}

export default App;
