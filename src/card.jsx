import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <li>
                {this.props.card.title}
            </li>
        )
    }
}

export default Card