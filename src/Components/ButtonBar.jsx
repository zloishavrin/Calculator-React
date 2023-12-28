import { Button } from "./Button"

export const ButtonBar = (props) => {

    const addNumber1 = props.addNumber1;
    const addNumber2 = props.addNumber2;
    const changeSign = props.changeSign;
    const calculate = props.calculate;
    const clearDisplay = props.clearDisplay;
    const sign = props.sign;
    const number1 = props.number1;

    const addCurrentNumber = (number) => {
        if(sign !== '') return addNumber2(number);
        else return addNumber1(number);
    }

    const setSign = (sign) => {
        if(number1 !== '') return changeSign(sign);
    }

    return (
        <div className="buttonBar">
            
            <Button value={7} handler={ () => addCurrentNumber('7') } />
            <Button value={8} handler={ () => addCurrentNumber('8') } />
            <Button value={9} handler={ () => addCurrentNumber('9') } />
            <Button value={'C'} handler={ clearDisplay }/>
            <Button value={4} handler={ () => addCurrentNumber('4') } />
            <Button value={5} handler={ () => addCurrentNumber('5') } />
            <Button value={6} handler={ () => addCurrentNumber('6') } />
            <Button value={'X'} handler={ () => setSign('X') } />
            <Button value={1} handler={ () => addCurrentNumber('1') } />
            <Button value={2} handler={ () => addCurrentNumber('2') } />
            <Button value={3} handler={ () => addCurrentNumber('3') } />
            <Button value={'%'} handler={ () => setSign('%') } />
            <Button value={0} handler={ () => addCurrentNumber('0') } />
            <Button value={'+'} handler={ () => setSign('+') } />
            <Button value={'-'} handler={ () => setSign('-') } />
            <Button value={'='} handler={ calculate } />

        </div>
    )

}