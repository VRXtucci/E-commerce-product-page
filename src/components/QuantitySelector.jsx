import { useState } from "react"

import Cart from "../assets/images/icon-cart.svg"
import Decrease from "../assets/images/icon-minus.svg"
import Increase from "../assets/images/icon-plus.svg"

const QuantitySelector = ({ onAdd }) => {

  const [quantity, setQuantity] = useState(0)

  const increase = () => setQuantity(quantity + 1)
  const decrease = () => quantity > 0 && setQuantity(quantity - 1)

  return (
    <div className="flex flex-col md:flex-row gap-4">

      <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg md:w-40">
        <button onClick={decrease} className="">
          <img src={Decrease} alt="decrease" />
        </button>
        <span className="font-bold">{quantity}</span>
        <button onClick={increase} className="">
            <img src={Increase} alt="increase" />
        </button>
      </div>

      <button
        onClick={() => onAdd(quantity)}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-3 w-full"
      >
        <img src={Cart} alt="cart" />
        Add to cart
      </button>

    </div>
  )
}

export default QuantitySelector