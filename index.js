const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const noOfPeopleDiv = document.getElementById('noOfPeople')
const perpersonTotal = document.getElementById('perpersonTotal')
let noOfPeople = Number(noOfPeopleDiv.innerText)
// function 

const calculateBill = () => {
    let bill = Number(billTotalInput.value)
    let tipPercentage = Number(tipInput.value) / 100

    let tipAmount = tipPercentage * bill
    let finalAmount = tipAmount + bill
    console.log(finalAmount)

    displayAmount = finalAmount / noOfPeople
    perpersonTotal.innerText = '$' + displayAmount.toFixed(2)
}

const increasePeople = () => {

    noOfPeople += 1
    noOfPeopleDiv.innerText = noOfPeople
    calculateBill()
}

const decreasePeople = () => {
    if (noOfPeople <= 1) {
        return
    }
    noOfPeople -= 1
    noOfPeopleDiv.innerText = noOfPeople
    calculateBill()


}