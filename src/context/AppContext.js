import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider =({children}) => {

    const [bearer, setBearer] = useState()

    return (
        <AppContext.Provider value = {{bearer}}>
            {children}
        </AppContext.Provider>
    )
}