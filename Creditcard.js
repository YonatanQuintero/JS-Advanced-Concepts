const creditCard = 4003600000000014

//Return length for a valid credit card or return 0 if is a invalid credit card length
function getLength(value){

    if(value < Math.pow(10,12)) return 0
    if(value < Math.pow(10,13)) return 13
    if(value < Math.pow(10,14)) return 14
    if(value < Math.pow(10,15)) return 15
    if(value < Math.pow(10,16)) return 16

    return 0

}

//Get the first digits for a number
//value: the number
//length: the number length
//digits: the size of the first digits
function getFirstDigits(value, length, digits){

   return parseInt(value / Math.pow(10, length - digits))

}

function calculateChecksum(value){

    let count = 0, oddSum = 0, evenSum = 0

    do{
        let lastDigit =  value % 10

         if(count % 2 === 1){//calculate odd
            lastDigit *= 2 
            if(lastDigit > 9){
                oddSum += parseInt(lastDigit / 10)
                oddSum += lastDigit % 10
            }else{
                oddSum += lastDigit
            }
         }else{ //calculate even
            evenSum += lastDigit
         }

        count++
        value = parseInt(value / 10)//remove last digit
       
    }while(value > 0)

    return (oddSum + evenSum) % 10
}

function printTypeCard(value){

    const length = getLength(value)

    if(length === 0) return "INVALID"
    if(calculateChecksum(value) !== 0) return "INVALID"

    let firstDigits = getFirstDigits(value, length, 1)

    if(length === 13 && firstDigits === 4) return "VISA"
    if(length === 16 && firstDigits === 4) return "VISA"

    firstDigits = getFirstDigits(value, length, 2)
    if(length === 15 && (firstDigits === 34 || firstDigits === 37)) return "AMEX"
    if(length === 16 && (firstDigits >= 51 && firstDigits <= 55)) return "MASTERCARD"

    return "INVALID"
}