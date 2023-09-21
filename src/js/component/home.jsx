import React, { useState } from "react";

//create your first component
const Home = () => {
	const [luzRoja, setluzRoja] = useState("")
	const [luzAmarilla, setluzAmarilla] = useState("")
	const [luzVerde, setluzVerde] = useState("")

	const encenderLuz = (color) => {

		if (color === "red") {
			console.log(color)
			setluzRoja("ligthOn")
			setluzVerde("")
			setluzAmarilla("")

		} else if (color == "yellow") {
			setluzAmarilla("ligthOn")
			setluzRoja("")
			setluzVerde("")

		} else if (color == "green") {
			setluzAmarilla("")
			setluzRoja("")
			setluzVerde("ligthOn")
		}
	}

	return (
		<div className="container">
			<div className="semaforo">
				<div className="Luces">
					<div className={`luzRoja ${luzRoja}`} onClick={() => encenderLuz("red")}>
					</div>
					<div className={`luzAmarilla ${luzAmarilla}`} onClick={() => encenderLuz("yellow")}>
					</div>
					<div className={`luzVerde ${luzVerde}`} onClick={() => encenderLuz("green")}>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Home;
