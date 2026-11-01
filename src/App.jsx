const photoCards = [
  { label: 'Haitian Spaghetti', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
  { label: 'Griyo (Plantains & Pikliz)', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80' },
  { label: 'Red Snapper (Plantains & Pikliz)', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80' },
  { label: 'Oxtail (Rice & Plantains)', image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80' },
  { label: 'Jerk Chicken (Rice)', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80' },
  { label: 'Curry Chicken (Rice)', image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80' },
]

const menuItems = [
  { name: 'Legume (rice)', price: '$20.00' },
  { name: 'Black Rice (chicken sauce)', price: '$20.00' },
  { name: 'Haitian Mac & Cheese', price: '$12.00' },
  { name: 'American Mac & Cheese', price: '$12.00' },
  { name: 'Fried Chicken (3 pieces with fries)', price: '$12.00' },
  { name: 'Red Snapper (plantains & pikliz)', price: '$35.00' },
  { name: 'Griyo (plantains & pikliz)', price: '$29.00' },
  { name: 'Oxtail (rice & plantains)', price: '$25.00' },
  { name: 'Haitian Spaghetti', price: '$15.00' },
  { name: 'Haitian Patty', price: '$10.00' },
  { name: 'Jerk Chicken (rice)', price: '$20.00' },
  { name: 'Curry Chicken (rice)', price: '$20.00' },
  { name: 'Chicken Alfredo', price: '$15.99' },
]

const drinks = [
  { name: 'Bottle Water', price: '$1.50' },
  { name: 'Bottle Soda', price: '$2.00' },
  { name: 'Can Soda', price: '$1.00' },
  { name: 'Extra Pikliz', price: '$1.50' },
  { name: 'Extra Fried Plantains', price: '$5.00' },
]

const halfPlatePrices = ['$10.00', '$10.00', '$6.00', '$6.00', '$6.00', '$17.50', '$10.00', '$12.50', '$7.50', '$5.00', '$10.00', '$10.00', '$7.99']

export default function App() {
  return (
    <div className="menu-page">
      <header className="hero-header">
        <div className="brand-row">
          <div className="brand-badge">👨‍🍳</div>
          <h1 className="main-title">UNIQUE</h1>
          <div className="to-go-box">
            <div className="to-go-text">TO-GO</div>
            <div className="to-go-menu">MENU</div>
          </div>
        </div>

        <div className="headline-row">
          <div className="main-title-wrap">
            <div className="subtitle">HAITIAN CUISINE</div>
            <div className="slogan">Heaven in Your Mouth!</div>
          </div>
          <div className="promo-box-right">
            <div className="takeout-icon">📦</div>
            <div className="promo-copy">
              <span>GOOD FOOD</span>
              <span>GREAT VIBES</span>
              <span>ALWAYS!</span>
            </div>
          </div>
        </div>
      </header>

      <main className="menu-layout">
        <aside className="photo-column">
          {photoCards.map((card, index) => (
            <div className="photo-card" key={`${card.label}-${index}`}>
              <img src={card.image} alt={card.label} />
              <div className="photo-label">{card.label}</div>
            </div>
          ))}
        </aside>

        <section className="menu-column">
          <div className="section-title gold">MENU</div>
          <div className="table-wrap">
            <table>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section-title gold drinks-title">DRINKS &amp; EXTRAS</div>
          <div className="table-wrap">
            <table>
              <tbody>
                {drinks.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bottom-banner">
            <div className="chicken-box">
              <div className="mini-image" />
              <div className="mini-text">3 PCS FRIED CHICKEN WITH FRIES</div>
              <div className="mini-price">$12.00</div>
            </div>

            <div className="hookah-box">
              <div className="hookah-icon">💨</div>
              <div className="hookah-copy">
                <div className="hookah-label">HOOKAH</div>
                <div className="hookah-price">$25</div>
                <div className="hookah-per">PER HOUR</div>
              </div>
            </div>
          </div>
        </section>

        <aside className="side-panel">
          <div className="promo-card">
            <div className="promo-title">HALF PLATE</div>
            <div className="promo-subtitle">FOR HALF PRICE OF EVERY ITEM!</div>
          </div>

          <div className="half-price-box">
            <div className="half-price-title">HALF PLATE PRICES</div>
            <ul>
              {halfPlatePrices.map((price, index) => (
                <li key={`${price}-${index}`}>
                  <span>{price}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

      <footer className="footer-bar">
        <div className="location">
          <div className="pin">📍</div>
          <div className="address">
            1027 Maple Street Suite A<br />
            Carrollton GA 30117
          </div>
        </div>
        <div className="phone-wrap">
          <div className="phone-icon">📞</div>
          <div className="phone">(678) 839-4558</div>
        </div>
        <div className="takeout-note">Take Out Available!</div>
      </footer>
    </div>
  )
}
