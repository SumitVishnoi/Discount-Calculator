const pr = document.querySelector("#price")
const disc = document.querySelector("#discount")
const btn = document.querySelector("#btn")
const text = document.querySelector("#text")

function discountCalc(discount) {
    return function(price) {
        return price - price * (discount / 100)
    }
}

btn.addEventListener("click", function(e){
    e.preventDefault()
    let discVal = disc.value
    let prVal = pr.value
    let discounter = discountCalc(discVal)
    text.textContent = `₹ ${discounter(prVal)}`
})