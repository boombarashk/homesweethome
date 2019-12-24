import React from 'react';
import { Alert } from "sancho";
import {IPromoData} from '../interfaces'

type PromoDataType = ReturnType<IPromoData & any>

const Promo: React.FC<PromoDataType> = (promoData: IPromoData) => {
    const { showPromo, rate } = promoData

    return showPromo ? <Alert
        intent="success"
        title="Специальное предложение"
        subtitle={`Спешите! Ставка - ${rate}%`}
        /> : null
}

export default Promo