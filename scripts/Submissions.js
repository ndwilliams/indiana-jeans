export const SubmissionList = async () => {
	// Get the submissions from your API

	const response = await fetch("http://localhost:8088/submissions")
	const submissions = await response.json()

	// Iterate the submissions and create some <section> representations

	let submissionsHTML = ""
	for (const submission of submissions) {
		submissionsHTML += `<section id=${submission.id} class='submission'>
        <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area type foreign key? ${submission.socioLocationId}</div>
        </section>`
	}

	// Return the HTML string

	return submissionsHTML
}
