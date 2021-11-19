/* CUSTOM HOOK */
import { useState, useEffect } from "react"
/* function name has to start with "use-" */
const useCounter = (forwards = true) => { /* conditional use */
  const [counter, setCounter] = useState(0) /* for every component the custom hook is executed again and every component has its own state */

	useEffect(() => {
		const interval = setInterval(() => {
      if (forwards) { /* if fowrds is true, add 1 */
        setCounter((prevCounter) => prevCounter + 1)
      } else { 
         setCounter((prevCounter) => prevCounter - 1)
      }
		}, 1000)

		return () => clearInterval(interval)
	}, [forwards]) /* forwards is a dependancy, as the useEffect() should rerun whenever the forwards changes */

  return counter /* counter state will later hold an actual number */
}

export default useCounter
