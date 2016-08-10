import React from 'react'

class AssignmentCard extends React.Component {
    render() {
    	console.log(this.props)
        return (<div className="card card__details">
        			<div className="card__title">
        				<h2>{this.props.assignment.title}</h2>
        			</div>
    				<div className="card__summary">
    					<p>{this.props.assignment.subtitle}</p>
    				</div>
        			<button className="btn btn__watch">{this.props.assignment.buttonText}</button>
        		</div>)
    }
}

export default AssignmentCard

