export const Display = (props) => {

    const { number1, number2, sign } = props;

    return (
        <div className="display">

            <p>{number1}{sign}{number2}</p>

        </div>
    )

}