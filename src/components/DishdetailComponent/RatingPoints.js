const StarFull = ({transform}) => (
    <path transform={transform} d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"  fill="#e9ba26" />
)
const StarHalf = ({transform}) => (
    <path transform={transform} d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" fill="#e9ba26" />
)

function Rating({ratings,numofCmts=0}){
    const numberPart = Math.floor(Number((ratings)))||0;
    const decimalPart = Number(ratings) - numberPart;
    const roundedDecimalPart = (decimalPart-0)<Math.abs(decimalPart-0.5)?0:0.5;

    return(
        <div>
            <span>Ratings: </span>
            <span>
                <svg height='24px' style={{
                width:`${numberPart*21+(roundedDecimalPart===0.5?21:0)}`
                }}>
                {Array.apply(0, Array(numberPart)).map((x,id) =>(
                    <StarFull key={id} transform={`translate(${id*21})`}/>
                ))}
                {roundedDecimalPart===0.5?<StarHalf transform={`translate(${(numberPart*21)})`}/>:null}
            </svg></span>
            <span >{`(${numofCmts})`}</span>
        </div>
    )
}
export default Rating;