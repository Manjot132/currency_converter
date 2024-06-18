import React from "react";
import { useContext,createContext } from "react";

export const Themecontext=createContext({
    theme:'light',
    darkTheme: () => {},
    lightTheme: () => {},
}
);
export const Themecontextprovider=Themecontext.Provider;
export default function ThemeContext() {
    return useContext(Themecontext);
}