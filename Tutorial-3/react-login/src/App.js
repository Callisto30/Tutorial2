import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register";
import MyProfile from "./MyProfile";

function App() {
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    setRegistered(true);
  };

  return (
    <Router>
      <main className="App">
        <Switch>
          <Route exact path="/">
            {registered ? (
              <Redirect to="/myprofile" />
            ) : (
              <Register onRegister={handleRegister} />
            )}
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
