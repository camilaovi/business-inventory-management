function Hero() {
  return (
    <div className="heroContent">
      <p className="tag">Inventory and sales management</p>

      <h1>Business Inventory Management</h1>

      <p className="description">
        A web platform designed to manage products, inventory, customers,
        and sales from a single place.
      </p>

      {/* Action buttons; functionality will be added in future versions */}
      <div className="actions">
        <button>View products</button>
        <button className="secondaryButton">Create product</button>
      </div>
    </div>
  )
}

export default Hero