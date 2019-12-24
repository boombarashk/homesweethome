export interface IEnterData {
    sum: number | string,
    firstsum: number | string,
    rate: number,
    countMonth ?: number
}
export interface IFieldRowParams {
    label ?: string,
    fieldName: string,
    value ?: any
}
export interface IPromoData {
    showPromo: boolean,
    rate ?: number
}

export interface IAction {
    type: string,
    payload ?: any
}

/*type UnionState = {
    promo ?: IPromoData,
    enterData ?: IEnterData
};*/