import React from 'react';
import FieldRow from "./FieldRow"
import { enterData } from '../interfaces'

type EnterDataType = ReturnType<enterData & any>
/**
 * аннуитетные платежи:
 * Платеж = сумма кредита × %_ставка в месяц / 1-(1+ %_ставка в месяц)^ -количество месяцев
 *
 * дифференцированный расчет:
 * Платеж=(сумма кредита/срок в месяцах)+(остаток × процентная ставка/12)
 * Источник: https://vsezaimyonline.ru/reviews/protsenty-po-kreditu.html
 */
const FormCalculator: React.FC<EnterDataType> = (useCircs) => {
    const { sum, firstsum, rate, countMonth, setParams } = useCircs

    const creditSum = sum - firstsum
    // %_ставка в месяц
    const rateMonth = rate/(12 * 100);
    // размер выплаты в месяц
    const debtMonth = creditSum * rateMonth / (1 - Math.pow((1 + rateMonth), -countMonth))

    const fieldRows = [
        {fieldName: 'sum', label: "Стоимость жилья", value: sum},
        {fieldName: 'firstsum', label: "Первоначальный взнос", value: firstsum},
        {fieldName: 'rate', label: "% ставка", value: rate},
        {fieldName: 'countMonth', label: "Количество (в месяцах)", value: countMonth},
    ].map( params => <FieldRow key={ `${params.fieldName}023`}
                               setFunction={ setParams }
                               { ...params}/>)

    // fixme add mask
    return <div className="Form-container">
        { fieldRows }
        <div className="css-1m1f705-InputGroup">
            <div>
                <span className="css-1nebzlv-Text">Выплата в месяц:</span> { debtMonth.toFixed(2) }
            </div>
            <span className="css-1nebzlv-Text">Размер переплаты:</span> { (debtMonth * countMonth - creditSum).toFixed(2) }
        </div>
    </div>
}

export default FormCalculator