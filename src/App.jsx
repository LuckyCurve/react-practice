import {Button, createTheme, CssBaseline, ThemeProvider, Tooltip} from "@mui/material";
import '@fontsource/roboto/400.css';

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
})

const fruits = [{id: 2, name: "orange", calories: 45}, {id: 1, name: "apple", calories: 95}, {
    id: 3, name: "banana", calories: 105
}, {id: 4, name: "pineapple", calories: 37}];

export default function App() {
    return (<ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <div className={"main"}>
            <h1>{"Lucky Curve 的个人博客"}</h1>
            <div>
                <Tooltip title="Lucky Curve">
                    <Button variant="contained">123</Button>
                </Tooltip>
            </div>
        </div>
    </ThemeProvider>)
}