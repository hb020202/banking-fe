function Account (props) {
    return (
        <div className="account">
            <p>{props.accholder} - {props.accname}</p>
            <h3>{props.balance}</h3>
            <p>{props.address}</p>
        </div>
    )
}
export default Account;