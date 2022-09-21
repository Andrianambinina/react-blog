import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIALE_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const Context = createContext(INITIALE_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIALE_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    const contextValue = {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
