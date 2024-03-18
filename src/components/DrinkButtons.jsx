export const DrinkButton=()=> {
    const question= "do you want coffee or tea";

    return (
        <div className="DrinkButton">
            <h2> {question} </h2>
            <div className="button-group"> 
            <button> Coffee</button>
            <button> Tea</button>


            </div>
        </div>
    )
}