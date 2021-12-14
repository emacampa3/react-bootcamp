import { useEffect, useState } from "react"

import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"
import classes from "./AvailableMeals.module.css"

const AvailableMeals = () => {
	const [meals, setMeals] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [httpError, setHttpError] = useState(null)

	/* runs only when component is first loaded */
	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				"https://reactmeals-59bb5-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
			)

			if (!response.ok) {
				throw new Error(
					"Something went wrong!"
				) /* if error occurs, lines thereafter wont execute */
			}

			const responseData =
				await response.json() /* firebase specific: responseData is an object, so it needs to be transformed into an array */

			const loadedMeals = []

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				})
			}

			setMeals(loadedMeals)
			setIsLoading(false)
		}

		/* handling an error inside a promise */
		fetchMeals().catch((error) => {
			setIsLoading(false)
			setHttpError(error.message)
		})
	}, [])

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading ...</p>
			</section>
		)
	}

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		)
	}

	return (
		<section className={classes.meals}>
			<Card>
				<ul>
					{meals.map((meal) => (
						<MealItem
							id={meal.id}
							key={meal.id}
							name={meal.name}
							description={meal.description}
							price={meal.price}
						/>
					))}
				</ul>
			</Card>
		</section>
	)
}

export default AvailableMeals
