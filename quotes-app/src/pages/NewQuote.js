import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const addQuoteHandler = quoteData => {}

  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote
