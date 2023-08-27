
import {propertyForSaleArr} from "./properties/propertyForSaleArr.js"
import {placeholderPropertyObj} from "./properties/placeholderPropertyObj.js"

function getPropertyHtml(properties = [placeholderPropertyObj]) {
   return properties.map(sale => {
     const totalRome = sale.roomsM2.reduce((total, current) => total + current)
     return sale = `
            <section class="card">
            <img src="${sale.image}">
            <div class="card-right">
                <h2>${sale.propertyLocation}</h2>
                <h3>${sale.priceGBP}</h3>
                <p>${sale.comment}</p>
                <h3>${totalRome} m&sup2</h3>
            </div>
        </section> `
    }).join('')
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)