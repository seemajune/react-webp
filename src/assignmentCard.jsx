import React from 'react'

class AssignmentCard extends React.Component {
    render() {

        return (<div>{this.props.assignments.map((assignment,index) => (
                <div key={assignment.id}>
                <div className="card card__details">
        			<div className="card__title">
        				<h2>{assignment.title}</h2>
        			</div>
    				<div className="card__summary">
    					<p>{assignment.title}</p>
    				</div>
        			<button className="btn btn__watch">watch</button>
        		</div></div>))}
            </div>);
    }
}

export default AssignmentCard

