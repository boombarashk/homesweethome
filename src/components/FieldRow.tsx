import React from 'react';
import { InputGroup, Input } from "sancho";
import { fieldRowParams } from '../interfaces'

type FieldRowParamsType = ReturnType<fieldRowParams & any>

const FieldRow: React.FC<FieldRowParamsType> = (fieldRowParams: FieldRowParamsType) => {
    const {label, value, fieldName, setFunction} = fieldRowParams

    let setPropFunction: (ev: object) => any
    setPropFunction = (ev) => {
        const arg = {}
        // @ts-ignore
        arg[fieldName] = +ev.target.value
        return setFunction(arg)
    };

    return (
    <InputGroup label={ label }>
        <Input value={ value } onChange={ ev => setPropFunction(ev) }/>
    </InputGroup>
    )
}

export default FieldRow