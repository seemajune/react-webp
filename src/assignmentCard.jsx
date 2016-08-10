import React from 'react'

class AssignmentCard extends React.Component {
    render() {
    	console.log(this.props)
        return (<div><h1>{this.props.assignment.title}</h1>
        			<h2>{this.props.assignment.subtitle}</h2>
        			<button>{this.props.assignment.buttonText}</button>
        		</div>)
    }
}

export default AssignmentCard

