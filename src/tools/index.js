export function isMobile(){
    return window.innerWidth < 567
}

export function formatPrice(currency, price){
    return `${currency} ${price}`    
}

export function computePartialRemaining({amount, items}, ID){
    let sumPrices = 0
    for(let item of items){
        if(item._id !== ID)
            sumPrices += item.price
    }
    return amount - sumPrices
}



export function currFormat(num){
    let formatter = new Intl.NumberFormat()
    formatter.format(num)
    return num
}