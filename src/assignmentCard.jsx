import React from 'react'
import Card from './card'

class AssignmentCard extends React.Component {
    render() {
        let cardDetails = this.props.card.map((assignment) => {
            return (<h1 key={assignment.id}>{assignment.title}</h1>)
        })
        return <div>{cardDetails}</div>
    }
}

export default AssignmentCard

