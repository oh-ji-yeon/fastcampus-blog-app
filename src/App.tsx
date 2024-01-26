import { useEffect, useState, useContext } from 'react';
import { app, db } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeContext from 'context/ThemeContext';

import Router from './components/Router';
import Loader from 'components/Loader';

function App() {
  const context = useContext(ThemeContext);
  // console.log(db);
  const auth = getAuth(app);
  // console.log(auth);

  // auth를 체크하기 전 (initialize 전) loader를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);

  // auth에 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);
  
  return (
    <div className={context.theme === "light" ? "white" : "dark"}>
    <ToastContainer />
    {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader /> }
    </div>
  );
}

export default App;
