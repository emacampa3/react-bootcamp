import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'

const NewQuote = () => {
  const { sendRequestFunction, status } = useHttp(addQuote)
  const history = useHistory() /* navigation with react-router */

  useEffect(() => {
		if (status === "completed") {
			history.push("/quotes")
		}
	}, [status, history])

  const addQuoteHandler = (quoteData) => {
    sendRequestFunction(quoteData)
  }
  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
}

export default NewQuote
