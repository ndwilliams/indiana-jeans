import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
	const jeanOwnershipHTML = OwnJeansChoices()
	const locationsHTML = await LocationTypeChoices()
	const submissionButtonHTML = SaveSubmission()
	const submissionListHTML = await SubmissionList()

	container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${submissionButtonHTML}
    ${submissionListHTML}
    `
}

render()
