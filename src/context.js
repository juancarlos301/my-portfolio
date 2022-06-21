import React, { createContext, useState } from "react";

import { useTranslation } from "react-i18next";


export const AppContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [openProject2, setOpenProject2] = useState(0)
    const [t, i18n] = useTranslation("global")
    const [choose, setChoose] = useState(true)
    return (
        <AppContext.Provider value={{ t, i18n, choose, setChoose, setOpenProject2, openProject2 }}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;