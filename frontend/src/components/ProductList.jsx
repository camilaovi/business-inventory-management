function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Aromatic candle',
      category: 'Candles',
      price: 25000,
      stock: 12,
      status: 'Available',
    },
    {
      id: 2,
      name: 'Concrete tray',
      category: 'Home decor',
      price: 35000,
      stock: 6,
      status: 'Available',
    },
    {
      id: 3,
      name: 'Canvas painting',
      category: 'Art',
      price: 80000,
      stock: 3,
      status: 'Available',
    },
    {
      id: 4,
      name: 'Decorative candle holder',
      category: 'Accessories',
      price: 18000,
      stock: 2,
      status: 'Low stock',
    },
  ]

  return (
    <section className="productsSection">
      <div className="sectionHeader">
        <div>
          <p className="tag">Product module</p>
          <h2>Product management</h2>
        </div>

        <button>Add new product</button>
      </div>

      <div className="productsGrid">
        {products.map((product) => (
          <article className="productCard" key={product.id}>
            <div className="productHeader">
              <h3>{product.name}</h3>
              <span>{product.status}</span>
            </div>

            <p className="productCategory">{product.category}</p>

            <div className="productDetails">
              <div>
                <small>Price</small>
                <strong>${product.price.toLocaleString('es-CO')}</strong>
              </div>

              <div>
                <small>Stock</small>
                <strong>{product.stock}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductList