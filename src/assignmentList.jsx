import React from 'react'

class AssignmentList extends React.Component {
    render() {
        let elements = this.props.cards.map((element) => {
            return (<li key={element.id}>{element.title}</li>)
        })
        return <ul>{elements}</ul>
    }
}

export default AssignmentList