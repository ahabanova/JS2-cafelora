import './style.css';
import { Drink } from './components/Drink/index.js'

export const Menu = () => {
  const element = document.createElement('section')
  element.classList.add('menu')
  element.id = 'menu'
  element.innerHTML = `
      <div class="container">
      <h2>Naše nabídka</h2>
      <p class="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div class="drinks-list">
      </div>

      <div class="order-detail">
        <a href="/objednavka">Detail objednávky</a>
      </div>
      </div>
    `

  const drinksElement = element.querySelector('.drinks-list');
  drinksElement.append(
    Drink({
      id: 'romano',
      name: 'Romano',
      ordered: false,
      image: 'https://cafelora.kodim.app/assets/cups/romano.png',
      layers: [
        {
          color: '#fbdf5b',
          label: 'citrón',
        },
        {
          color: '#613916',
          label: 'espresso',
        },
      ]
    })
  );

  return element
}