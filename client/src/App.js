import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check, checkAdmin } from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdmin().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false))
  }, [])
  return (
    <BrowserRouter >
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
