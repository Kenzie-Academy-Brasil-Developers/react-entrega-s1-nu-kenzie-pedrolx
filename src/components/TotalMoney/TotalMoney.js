import './TotalMoney.css';

function TotalMoney({listTransactions}) {
    function sumTotalMoney() {
        const sum = listTransactions.reduce((previousValue, currentValue) => {
            return currentValue.type === 'Entrada' ? ((previousValue + Number(currentValue.value))) : ((previousValue - Number(currentValue.value)))
        }, 0)
        return sum;
    }
    const isNegative = sumTotalMoney();

    return (
        <div className='total-money'>
            <h3> Valor total:</h3>
            <h4 style={isNegative < 0 ? ({color: 'var(--color-primary-2)'}) : ({color: 'var(--color-secondary)'})}>{new Intl.NumberFormat('pt-br',
                { style: 'currency', currency: 'BRL' }
              ).format(sumTotalMoney())}</h4>
            {isNegative < 0 ? (<p style={{color: 'var(--color-primary-2)'}}>Cuidado! Você está usando o limite do cheque especial.</p>) : (<p>O valor se refere ao saldo</p>)}
        </div>
    )
}

export default TotalMoney;


