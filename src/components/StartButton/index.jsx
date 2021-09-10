import "./style.css"

const StartButton = ({ handleShow }) => {


	return (
		<section id="start-Box">
			<h1 className="start-Title">Torneio tribruxo</h1>
			<p className="start-instruction">Clique no botão para encontrar os feiticeiros!</p>
			<button
				type="button"
				className="start-button"
				onClick={handleShow}>
				Começar!
			</button>
		</section>
	)
}

export default StartButton