function Account (props) {
    return (
        <div className="account">
            <p>Name of account holder: {props.accholder} </p>
            <p>Name of account: {props.accname}</p>
            <h3>Account balance: £{props.balance}</h3>
            <p>Account holder address: {props.address}</p>
        </div>
    )
}
export default Account;