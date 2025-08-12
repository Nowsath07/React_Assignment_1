function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Price: ₹{product.price}</p>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Discount: {product.discount}</p>
        <button
          className="btn btn-primary"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
