import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
	const jeanOwnershipHTML = OwnJeansChoices()
	const locationsHTML = await LocationTypeChoices()
	const submissionButtonHTML = SaveSubmission()

	container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${submissionButtonHTML}
    `
}

render()
