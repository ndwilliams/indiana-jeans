// Set up the transient state data structure and provide initial values

const transientState = {
	ownsBlueJeans: false,
	socioLocationId: 0,
}

// Functions to modify each property of transient state

export const setOwnsBlueJeans = (chosenOwnership) => {
	transientState.ownsBlueJeans = chosenOwnership
	console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) => {
	transientState.socioLocationId = chosenLocation
	console.log(transientState)
}

// Function to convert transient state to permanent state

export const saveSurveySubmission = async () => {
	const postOptions = {
		method: "POST",
		headers: {
			// Key is a string because it has a dash in it
			// json encoded data - "application/json"
			"Content-Type": "application/json",
		},
		// The actual data being sent - the body of the request
		// can only send strings - need to convert JavaScript object to a string - JSON.stringify() method
		body: JSON.stringify(transientState),
	}

	// Send request to our local API and the collection that we want to send it to (submission(s)) -- must be plural
	// need to have postOptions as 2nd argument, otherwise it will be a GET request by default

	const response = await fetch("http://localhost:8088/submissions", postOptions)

	const customEvent = new CustomEvent("newSubmissionCreated")
	// dispatch event - nobody is listening for the event yet - event dispatched to main.js through document
	// want to invoke render() whenever this event occurs/submission is created
	document.dispatchEvent(customEvent)
}
