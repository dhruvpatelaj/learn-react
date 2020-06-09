import React, { useState } from "react";
import Tweet from "./Tweet";

//* react lets you return code that will automatically compile into HTML
//* we can add logic before the return statement

//* useState is a variable that basically provides data for the app to render
//* for example: boolean loggedIn
//* or getting data from API to set the state
function App() {
  //* using {} u can add js components to HTML easily
  //* adding () executes function the second it loads up!

  const [users, setUsers] = useState([
    { name: "Obiwan", tweet: "Hello There" },
    { name: "Grevious", tweet: "General Kenobi" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} tweet={user.tweet} />
      ))}
    </div>
  );
}

export default App;
