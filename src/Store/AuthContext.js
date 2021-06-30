import react, { useState,useEffect,createContext } from "react";

const AuthContext = createContext({
    token: '',
    userName: '',
    isLoggedIn: false,
    // login: (token,userName) => { },
    login: (token) => { },
    logout: () => { },
    loading: false,
})

export const AuthContextProvider = (props) => {
    const initalToken = localStorage.getItem('token')
    const initialUserName = localStorage.getItem('user')
    const [token, setToken] = useState(initalToken);
    const initialFirstName = localStorage.getItem('firstname')
    const [userName, setUserName] = useState(initialUserName)
    const [firstName, setFirstName] = [initialFirstName]
    const [details, setDetails] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
  const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [loading])


    const userIsLoggedIn = !!token


    const loadingHandler = () => {
        setLoading(true)
    }
    const loginHandler = (token, userName) => {
        setToken(token);
        setUserName(userName)
        setFirstName(firstName)
        localStorage.setItem('token', token)
        localStorage.setItem('user', userName)
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('firstname')
        localStorage.removeItem('lastname')
    };


    const contextValue = {
        token: token,
        userName, userName,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        loading: loading,
        loadingHandler:loadingHandler,
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext