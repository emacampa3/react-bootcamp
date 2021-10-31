import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import App from "./App"
import { AuthContextProviderComponent } from "./context/auth-context"

ReactDOM.render(
  /* wrapping the entire App in context, so that all children are able to access any information */
	<AuthContextProviderComponent>
		<App />
	</AuthContextProviderComponent>,
	document.getElementById("root")
)
