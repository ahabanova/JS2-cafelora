import './style.css';
import { Layer } from "../Layer/index.js"

export const Drink = (props) => {
    const { id, name, ordered, image, layers } = props
    const element = document.createElement('div')
    element.classList.add('drink')
    element.innerHTML = `
        <div class="drink">
            <div class="drink__product">
            <div class="drink__cup">
                <img src="${image}">
            </div>
            <div class="drink__info">
                <h3>${name}</h3>
                
            </div>
        </div>
        <div class="drink__controls">
            <button class="order-btn">
                Objednat
            </button>
            </div>
        </div>
    `
    const layersElement = element.querySelector('.drink__info')
    layersElement.append(...layers.map((item) => Layer({
        color: item.color,
        label: item.label
    })))

    layersElement.append(document.createElement('div'))
    return element
}