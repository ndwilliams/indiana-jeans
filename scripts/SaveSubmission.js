import { saveSurveySubmission } from "./TransientState.js"

export const SaveSubmission = () => {
	document.addEventListener("click", handleSurveySubmissionClick)

	return '<button id="saveSubmission">Save Submission</button>'
}

/*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */

const handleSurveySubmissionClick = (clickEvent) => {
	if (clickEvent.target.id === "saveSubmission") {
		saveSurveySubmission()
	}
}
