import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<BrowserRouter>
			<ChakraProvider>
				<AppRouter />
			</ChakraProvider>
		</BrowserRouter>
	);
}

export default App;
