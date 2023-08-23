import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, FAQ } from "./pages";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Dashboard />,
		},
		{
			path: "/faq",
			element: <FAQ />,
		},
	]);

	return (
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
}

export default App;
