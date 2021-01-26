import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"

const { default: Form } = require("./components/Form");
const { default: UserDetailsTable } = require("./components/UserDetailsTable");

function App() {

  const user = useSelector(selectUser);              // Storing the value of user state in Redux, if null - logged out, if not null - logged in

  return (
 
    <div>
      {user ? <UserDetailsTable /> : <Form />}           
   
    </div>
  );
}

export default App;
