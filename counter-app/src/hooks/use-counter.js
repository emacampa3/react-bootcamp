/* CUSTOM HOOK */
import { useState, useEffect } from "react"

const useCounter = () => { /* function nme has to start with "use-" */
  const [counter, setCounter] = useState(0) /* for every component the custom hook is executed again and every component has its own state */

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

  return counter /* counter state will later hold an actual number */
}

export default useCounter
