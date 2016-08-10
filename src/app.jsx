import React from 'react'
import ReactDOM from 'react-dom'

import AssignmentList from './assignmentList.jsx'

let cards = [
    {'title': 'MCAT Assignment 1', 'id': 1},
    {'title': 'MCAT Assignment 2', 'id': 2},
    {'title': 'MCAT Assignment 3', 'id': 3}
];

ReactDOM.render(<AssignmentList cards={cards} />, document.getElementById("baseElement"))