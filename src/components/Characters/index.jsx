import "./style.css"

import { useState, useEffect } from "react"
import CharCard from "../CharCard"

const Characters = ({ characterList, randomWizard }) => {

	const [wizard, setWizard] = useState([])

	useEffect(() => {
		choseWizard()
	}, [])

	const choseWizard = () => {

		let selectedWizard = [...characterList]
		let filterWizard = []

		while (filterWizard.length < 3) {
			let randomCharacter = selectedWizard[randomWizard()]
			let findHouse = filterWizard.find(item => item.house === randomCharacter.house)

			findHouse === undefined && filterWizard.push(randomCharacter)
		}
		setWizard([...filterWizard])
	}


	return (
		<section className="selected-Wizzard">
			<h1 className="title">
				Bruxos selecionados
			</h1>

			<div className="box">
				{wizard.map(item => <CharCard item={item} />)}
			</div>

			<button
				type="button"
				className="tryAgain"
				onClick={choseWizard}
			>
				tentar novamente
			</button>
		</section>
	)
}

export default Characters