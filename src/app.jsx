import React from 'react'
import ReactDOM from 'react-dom'

import AssignmentCard from './AssignmentCard.jsx'

let assignment = {
	'title': 'MCAT Assignment', 
	'subtitle': 'MCAT Diagnostic Exam', 
	'buttonText': 'Watch',
	'id': 1
}


ReactDOM.render(<AssignmentCard assignment={assignment} />, document.getElementById("assignment"))