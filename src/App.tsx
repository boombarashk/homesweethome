import React, { useState } from 'react';
import FormCalculator from './components/Form';
import { enterData } from './interfaces'
import './App.css';

function useCircs(initialState: enterData): enterData & any{
    let [ sum, setSum ] = useState( initialState.sum )
    let [ firstsum, setFirstsum ] = useState( initialState.firstsum )
    let [ rate, setRate ] = useState( initialState.rate )
    let [ countMonth, setCountMonth ] = useState( initialState.countMonth )

    let setParams: ({sum, firstsum, countMonth, rate}: enterData) => void;
    setParams = ({sum, firstsum, countMonth, rate}) => {
        if (sum) setSum(sum)
        if (firstsum) setFirstsum(firstsum)
        if (countMonth) setCountMonth(countMonth)
        if (rate) setRate(rate)
    };

    return { sum, firstsum, rate, countMonth, setParams }
}

const App: React.FC = () => {
    // useUffect hot action!

    let props = useCircs({
        sum: 1800000,
        firstsum: 0,
        rate: 8.9,
        countMonth: 12 * 5
    })

    return (
        <div className="App">
            <div className="App-header">Ипотечный калькулятор</div>

            <FormCalculator { ...props }/>
        </div>
    );
}

export default App;
