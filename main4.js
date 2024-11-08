const submit = document.querySelector(".submit")
const error = document.querySelector(".pes")
const form = document.querySelector("form")
const input = document.getElementById("email")
const label = document.querySelector("label")


form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate (e){
    e.preventDefault()
    const inputValue = input.value.trim()

    if(inputValue === ""){
        error.style.display = "block"
        label.style.display = "block"
    } else if ( !isEmail(inputValue)) {
        error.style.display = "block"
        label.style.display = "block"
    } else{
        error.style.display = "none"
        label.style.display = "none"
    }
}
function isEmail(inputValue) {
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(inputValue)
}