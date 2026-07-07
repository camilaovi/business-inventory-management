import './App.css'

function App() {
  return (
    <main className="app">
      <section className="hero">
        <div className="hero-content">
          <p className="tag">Inventory and sales management</p>

          <h1>Business Inventory Management</h1>

          <p className="description">
            A web platform designed to manage products, inventory, customers,
            and sales from a single place. This project is part of a software
            engineering portfolio focused on full stack development and business
            process optimization.
          </p>

          <div className="hero-actions">
            <button className="primary-button">View products</button>
            <button className="secondary-button">Create product</button>
          </div>
        </div>

        <div className="summary-card">
          <h2>Dashboard summary</h2>

          <div className="summary-grid">
            <article>
              <span>Products</span>
              <strong>128</strong>
            </article>

            <article>
              <span>Sales</span>
              <strong>56</strong>
            </article>

            <article>
              <span>Customers</span>
              <strong>34</strong>
            </article>

            <article>
              <span>Low stock</span>
              <strong>9</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="features">
        <article className="feature-card">
          <h3>Product management</h3>
          <p>
            Register, update, and organize products with information such as
            category, price, available quantity, and production cost.
          </p>
        </article>

        <article className="feature-card">
          <h3>Inventory control</h3>
          <p>
            Monitor available stock, identify low inventory levels, and support
            better decisions for purchasing and production.
          </p>
        </article>

        <article className="feature-card">
          <h3>Sales registration</h3>
          <p>
            Record sales, calculate totals, and update inventory automatically
            after each transaction.
          </p>
        </article>

        <article className="feature-card">
          <h3>Business reports</h3>
          <p>
            Display basic indicators related to sales, customers, products, and
            inventory behavior.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App