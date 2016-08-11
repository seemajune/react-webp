import React from 'react'
import ReactDOM from 'react-dom'

import AssignmentCard from './AssignmentCard.jsx'

	let assignments = [
        {
            "id": 1,
            "title": "Watch Orientation Video"
        },
        {
            "id": 2,
            "title": "MCAT Diagnostic Exam"
        },
        {
            "id": 3,
            "title": "Science Assessments"
        },
        {
            "id": 4,
            "title": "Important Welcome Message"
        },
        {
            "id": 5,
            "title": "How to Access your  MCAT Flashcard App"
        },
        {
            "id": 6,
            "title": "How to Access a Digital Version of your MCAT Review Books"
        },
        {
            "id": 7,
            "title": "Information About your Higher Score Guarantee"
        }
    ];


ReactDOM.render(<AssignmentCard assignments={assignments} />, document.getElementById("assignment"))