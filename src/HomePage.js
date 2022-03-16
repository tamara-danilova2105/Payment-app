import { data } from './data'
import { useState } from 'react'

function HomePage() {
    const [operator] = useState(data)

    return(
        <div className="container">
            {operator.map(item => {
                const {id, operator, image} = item
                return(
                    <div key={id} className='conteiner-operator'>
                        <button className='chosen'>{operator}</button>
                        <img src={image} width='90px' alt='логотип сотового оператора'/>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage