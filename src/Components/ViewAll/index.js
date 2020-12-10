import React, {useState, useEffect} from 'react';
import Account from "../Account";

function ViewAllAccs () {
    const [accs, setAccs] = useState([])
    useEffect(() => {
        var targetUrl = 'http://localhost:3003/viewall'
        fetch(targetUrl)
            .then(res => res.json())
            .then(accs => {
                setAccs(accs);
            })
    }, [])
    return(
        <div className="Account">
            <h2>View all accounts below</h2>
            {accs.map((item) => {
                return <Account
                    accholder={item.accholder}
                    accname={item.accname}
                    balance={item.balance}
                    address={item.address}
                />
            })}
        </div>
    )
}
export default ViewAllAccs;