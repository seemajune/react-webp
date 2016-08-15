import React from 'react'
import ReactDOM from 'react-dom'

import AssignmentCard from './AssignmentCard.jsx'

	let assignments = [
        {
            "id": 1,
            "subtitle": "Watch Orientation Video"
        },
        {
            "id": 2,
            "subtitle": "MCAT Diagnostic Exam"
        },
        {
            "id": 3,
            "subtitle": "Science Assessments"
        },
        {
            "id": 4,
            "subtitle": "Important Welcome Message"
        },
        {
            "id": 5,
            "subtitle": "How to Access your  MCAT Flashcard App"
        },
        {
            "id": 6,
            "subtitle": "How to Access a Digital Version of your MCAT Review Books"
        },
        {
            "id": 7,
            "subtitle": "Information About your Higher Score Guarantee"
        }
    ];


ReactDOM.render(<AssignmentCard assignments={assignments} />, document.getElementById("assignment"))