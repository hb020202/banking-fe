import React from 'react';


class ViewOne extends React.Component {
    render() {
        const {params} = this.props.match
        return (
            <div>
                <h1>Here is the account!</h1>
                <p>Here are the deets for account number: {params.id}</p>
            </div>
        )
    }
}

export default ViewOne;