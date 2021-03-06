import { useState, useRef, useEffect } from 'react'
import swal from 'sweetalert'

function Payment({imagesOperotor, nameOperator}) {
    const [phone , setPhone ] = useState()
    const [amount, setAmount] = useState()
    

    const inputPhone = useRef()
    const inputAmount = useRef()

    const [phoneError, setPhoneError] = useState()
    const [amountError, setAmountError] = useState()
    const [phoneErrorMessage, setPhoneErrorMessage] = useState()
    const [amountErrorMessage, setAmountErrorMessage] = useState()


    const phoneChange = () => {
        const phoneValue = inputPhone.current.value
        .replace(/\D/g, '')
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
        
        inputPhone.current.value = !phoneValue[2]
        ? phoneValue[1]
        : `${phoneValue[1]} (${phoneValue[2]}${(`${
            phoneValue[3] ? `)-${phoneValue[3]}` : ''
            }`)}${(`${phoneValue[4] ? `-${phoneValue[4]}` : ''
            }`)}${(`${phoneValue[5] ? `-${phoneValue[5]}` : ''}`)}`

            const numbers = inputPhone.current.value.replace(/(\D)/g, '');
            setPhone(numbers);
        }

    useEffect(() => {
        phoneChange();
        
        const validatePhone = () => {
            if (phone < 80000000000 || phone > 89999999999) {
                setPhoneError(false)
            }
            else {
                setPhoneError(true)
            }
        }
        validatePhone()
    }, [phone]);

    const amountChange = () => {
        const amountValue = inputAmount.current.value
        .replace(/\D/g, '')
        .match(/(\d{0,4})/)

        inputAmount.current.value = amountValue[1]
        const total = inputAmount.current.value.replace(/(\D)/g, '');
        setAmount(total)
    }

    useEffect(() => {
        amountChange();

        const validateAmount = () => {
            if (amount > 1000 || amount < 1){
                setAmountError(false)
            }
            else {
                setAmountError(true)
            }
        }
        validateAmount()
    }, [amount]);

    const showPhoneMessage = () => {
        if (phoneError === false) {
            setPhoneErrorMessage('?????????? ???????????????? ????????????????')
        }
        else {
            setPhoneErrorMessage('')
        }
    }

    const showAmountMessage = () => {
        if (amountError === false) {
            setAmountErrorMessage('?????????????? ?????????? ???? 1 ???? 1000???')
        }
        else {
            setAmountErrorMessage('')
        }
    }

    const Payment = (e) => {
        e.preventDefault()
        showPhoneMessage()
        showAmountMessage()
        
        if(phoneError === true && amountError ===true){
            swal({
                icon: "success",
                text: "???????????? ???????????? ??????????????!",
                timer: 3000
            });
        }
        else{
            return false
        }
    }

    return (
        <div className='container'>
            <form onSubmit={Payment} className='form'>
                <div className='form-block-one'>
                    <img src={imagesOperotor} alt='????????????' width='70px' height='70px' />
                    <h3>{nameOperator}</h3>
                </div>
                <div className='form-block-two'>
                    <label>?????????? ????????????????:</label>
                    <input type="text" ref={inputPhone} onChange={phoneChange} placeholder='?????????????? ?????????? ????????????????'/>
                    <div className='errorPhone'>{phoneErrorMessage}</div>

                    <label>?????????? ?? ????????????:</label>
                    <input type="text" ref={inputAmount} onChange={amountChange} placeholder='???????????????????? ???? 1 ???? 1000???'/>
                    <div className='errorAmount'>{amountErrorMessage}</div>
                </div>

                <div className='form-block-one'>
                    <button className='btn-payment'>????????????????</button>
                </div>
            </form>
        </div>
        );
}

export default Payment