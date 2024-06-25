import { OwnJeansChoices } from "./OwnsJeans.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
	const jeanOwnershipHTML = OwnJeansChoices()
	const locationsHTML = await LocationTypeChoices()

	container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    `
}

render()
