import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1
		} else {
			return quoteA.id < quoteB.id ? 1 : -1
		}
	})
}

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const IsSortingAscending = queryParams.get('sort') === 'ascending'

  const sortedQuotes = sortQuotes(props.quotes, IsSortingAscending)

  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (IsSortingAscending ? 'descending' : 'ascending'))
  }

  return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					Sort {IsSortingAscending ? 'Descending' : 'Ascending'}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	)
};

export default QuoteList;
