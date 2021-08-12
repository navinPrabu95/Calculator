import React,{useState} from 'react'

 const MyCalculator=()=> {
    const [baseAmount,setBaseAmount] = useState(118000) 
    const [requiredAmount,setRequiredAmount] = useState()
    const [members,setMembers] = useState()
    const [balanceAmount,setBalanceAmount] = useState()

    const getCalculation1=(event)=>{
        setRequiredAmount(event.target.value)
    }

    const getCalculation2=(event)=>{
        const remainingRound = 12-event.target.value
        setMembers(remainingRound)
    }

    const finalCalculation=()=>{
        const remaining = baseAmount-requiredAmount
        const totalAmount = remaining/members
        const balance = 10000 - totalAmount
        setBalanceAmount(balance);
    }
    return (
        <div className='card calculator-input' style={{width:'500px',margin:'20px auto',textAlign:'center',padding:'10px'}}>
            <h1>Calculator</h1>
            <input name='final' placeholder='enter final amount' type='number' onChange={getCalculation1}></input>
            <input name='remaining' placeholder='enter no of round' type='number' onChange={getCalculation2}></input>
            <button className='btn' onClick={finalCalculation}>Calculate</button>
            <p>Your final amount is:</p><h1>{balanceAmount}</h1>
        </div>
    )
}

export default MyCalculator