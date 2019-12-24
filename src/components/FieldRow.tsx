import React from 'react';
import { InputGroup, Input } from "sancho";
import { IFieldRowParams } from '../interfaces'

type FieldRowParamsType = ReturnType<IFieldRowParams & any>

const FieldRow: React.FC<FieldRowParamsType> = (IFieldRowParams: FieldRowParamsType) => {
    const {label, value, fieldName, setFunction} = IFieldRowParams

    let setPropFunction: (ev: object) => any
    setPropFunction = (ev) => {
        const arg = {}
        // @ts-ignore
        arg[fieldName] = +ev.target.value
        return setFunction(arg)
    };

    return (
    <InputGroup label={ label }>
        <Input value={ value } onChange={ ev => setPropFunction(ev) }
               id={`Input-${(Math.random()*1000).toFixed()}`}/>
    </InputGroup>
    )
}

export default FieldRow