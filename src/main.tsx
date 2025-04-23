import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './nullstyle.css'
import './index.css'

//Routing
import Layout from './pages/Layout/Layout.tsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import StateChange from './pages/StateChange/StateChange.tsx'
import TodoApp from './pages/TodoApp/TodoApp.tsx'
import AsyncThunk from './pages/AsyncThunk/AsyncThunk.tsx'

const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "statechange",
				Component: StateChange,
			},
			{
				path: "todoapp",
				Component: TodoApp,
			},
			{
				path: "asyncthunk",
				Component: AsyncThunk,
			},
		]
	},
]);


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		< RouterProvider router={router} />
	</StrictMode >,
)
