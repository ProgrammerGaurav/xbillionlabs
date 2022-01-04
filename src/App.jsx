import "./App.css";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Chats from "./components/Chats";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
	const darkTheme = createTheme({
		palette: {
			background: {
				default: "#f9f9f9",
			},
			primary: {
				main: "#5424B1",
			},
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<div className="App">
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<Navbar />
					<Box component="main" sx={{ flexGrow: 1, p: 3, mt: 7 }}>
						<Filters />
						<Chats />
					</Box>
				</Box>
			</div>
		</ThemeProvider>
	);
}

export default App;
