import React from "react";
import ThemeProvider from "./ThemeProvider";

function AppWrapper({ children }) {
    return <ThemeProvider>
        {children}
    </ThemeProvider>;
}

export default AppWrapper;
