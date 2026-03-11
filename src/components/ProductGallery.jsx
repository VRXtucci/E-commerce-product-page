import { useState } from "react"

import img1 from "../assets/images/image-product-1.jpg"
import img2 from "../assets/images/image-product-2.jpg"
import img3 from "../assets/images/image-product-3.jpg"
import img4 from "../assets/images/image-product-4.jpg"

import Next from "../assets/images/icon-next.svg"
import Previous from "../assets/images/icon-previous.svg"
import Close from "../assets/images/icon-close.svg"

import thumb1 from "../assets/images/image-product-1-thumbnail.jpg"
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg"
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg"
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg"

const ProductGallery = () => {
  const images = [img1, img2, img3, img4]
  const thumbnails = [thumb1, thumb2, thumb3, thumb4]

  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length)
  const prevImage = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length)

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Imagen principal */}
        <img
          src={images[currentImage]}
          alt="product"
          className="rounded-xl w-96 cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        />

        {/* Thumbnails */}
        <div className="hidden md:flex gap-4">
          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt="thumbnail"
              onClick={() => setCurrentImage(index)}
              className={`w-20 rounded-lg cursor-pointer border-2 
                ${currentImage === index ? "border-orange-500 opacity-60" : "border-transparent"}
              `}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">

            {/* Imagen grande */}
            <img
              src={images[currentImage]}
              alt="lightbox"
              className="rounded-xl max-h-[80vh] w-auto"
            />

            {/* Cerrar Lightbox */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition"
            >
              <img src={Close} alt="close" className="w-4 h-4" />
            </button>

            {/* Flecha Previous */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition"
            >
              <img src={Previous} alt="previous" className="w-4 h-4" />
            </button>

            {/* Flecha Next */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition"
            >
              <img src={Next} alt="next" className="w-4 h-4" />
            </button>

            {/* Thumbnails dentro del Lightbox */}
            <div className="flex gap-4 mt-4 justify-center">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt="thumbnail"
                  className={`w-20 rounded-lg cursor-pointer border-2 
                    ${currentImage === index ? "border-orange-500 opacity-60" : "border-transparent"}
                  `}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default ProductGallery