export function isMobile(){
    return window.innerWidth < 567
}

export function formatPrice(currency, price){
    return `${currency} ${price}`    
}