import QuantitySelector from "./QuantitySelector"

const ProductInfo = ({ addToCart }) => {

  return (
    <div className="flex flex-col gap-6">

      <h4 className="text-orange-500 uppercase font-bold tracking-widest">
        Sneaker Company
      </h4>

      <h1 className="text-4xl font-bold">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything
        the weather can offer.
      </p>

      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold">$125.00</span>
        <span className="bg-orange-100 text-orange-500 px-2 rounded font-bold">50%</span>
      </div>

      <span className="text-gray-400 line-through">$250.00</span>

      <QuantitySelector onAdd={addToCart} />
    </div>
  )
}

export default ProductInfo