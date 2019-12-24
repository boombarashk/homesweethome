import React, {useEffect, useReducer, useState} from 'react';
import FormCalculator from './components/Form';
import Promo from './components/Promo';
import {IAction, IEnterData} from './interfaces'
import './App.css';

function useCircs(initialState: IEnterData): IEnterData & any{
    let [ sum, setSum ] = useState( initialState.sum )
    let [ firstsum, setFirstsum ] = useState( initialState.firstsum )
    let [ rate, setRate ] = useState( initialState.rate )
    let [ countMonth, setCountMonth ] = useState( initialState.countMonth )

    let setParams: ({sum, firstsum, countMonth, rate}: IEnterData) => void;
    setParams = ({sum, firstsum, countMonth, rate}) => {
        if (sum) setSum(sum)
        if (firstsum) setFirstsum(firstsum)
        if (countMonth) setCountMonth(countMonth)
        if (rate) setRate(rate)
    };

    return { sum, firstsum, rate, countMonth, setParams }
}

const ACTION_TOGGLE_PROMO = 'toggle-show-promo'

function reducer(state: any, action: IAction): any {
    switch (action.type) {
        case ACTION_TOGGLE_PROMO:
            return {showPromo: !state.showPromo}
        default: ;
    }
}

const App: React.FC = () => {

    let props = useCircs({
        sum: 1800000,
        firstsum: 0,
        rate: 8.9,
        countMonth: 12 * 5
    })

    let [{showPromo}, dispatch] = useReducer(reducer, {showPromo: false});

    useEffect(() => {
        const timer = setTimeout(() => {

            props.setParams({rate: 6.9} as IEnterData);
            dispatch({type: ACTION_TOGGLE_PROMO})

        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return <div className="App">
        <div className="App-header">Ипотечный калькулятор</div>
        <FormCalculator {...props}/>

        <Promo showPromo={showPromo} rate={props.rate}/>
    </div>;
}

export default App;
