export const Button = (props) => {

    const { value, handler } = props;

    return (
        <div className="button" onClick={ handler }>

            <p>{value}</p>

        </div>
    )

}