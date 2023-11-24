export const handleTotalMoney = (list) => {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i].quantity * list[i].price;
    }
    return total;
}