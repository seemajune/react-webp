import React from 'react'
import ReactDOM from 'react-dom'

import AssignmentCard from './AssignmentCard.jsx'

let assignment = [
    {'title': 'MCAT Assignment', 'subtitle': 'MCAT Diagnostic Exam', 'id': 1}
]

ReactDOM.render(<AssignmentCard card={assignment} />, document.getElementById("assignment"))