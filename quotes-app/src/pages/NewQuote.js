import { useHistory } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const history = useHistory() /* navigation with react-router */
  const addQuoteHandler = quoteData => {
    history.push('/quotes')
  }
  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote
