import "./style.css"

const CharCard = ({ item: { name, house, image, ancestry } }) => {
	let wegf = name.toLo
	return (
		<div id="card">
			<h2 className="name">{name}</h2>

			<img
				style={{
					border: house === "Gryffindor" && "solid 4px red"
						|| house === "Ravenclaw" && "solid 4px blue"
						|| house === "Hufflepuff" && "solid 4px yellow"
						|| house === "Slytherin" && "solid 4px green"
				}}
				className="photo"
				src={image}
				alt={name}
			/>

			<p
				className="house"
				style={{
					color: house === "Gryffindor" && "red"
						|| house === "Ravenclaw" && "blue"
						|| house === "Hufflepuff" && "yellow"
						|| house === "Slytherin" && "green"
				}}>
				{house}
			</p>
			
			<p className="ancestry">{ancestry}</p>
		</div>
	)
}

export default CharCard