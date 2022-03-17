function HomePage({operator, ChooseOperator}) {
    return(
        <div className="container">
            {operator.map(item => {
                const {id, operator, image} = item
                return(
                    <div key={id} className='conteiner-operator'>
                        <button onClick={() => ChooseOperator(id)} className='chosen'>{operator}</button>
                        <img onClick={() => ChooseOperator(id)} src={image} width='90px' alt='логотип сотового оператора'/>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage