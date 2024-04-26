import React, { useRef, useEffect, useState } from 'react'
import './Carousel.css'

interface ICarouselProps {
  /** array of images
   *
   *@required string[]
   */
  images: string[]

  /**
   * Custom class
   *
   * @default 'undefined'
   */
  className?: string

  /**
   * Function which handles onImageClick
   * @param  {[image]} image:string ['image']
   */
  onImageClick?: (image: string) => void
}

const Carousel: React.FC<ICarouselProps> = (props: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [displayImage, setDisplayImage] = useState(props.images)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    const handleScroll = () => {
      if (!container) return

      const scrollLeft: number = container.scrollLeft
      const containerWidth: number = container.offsetWidth
      const totalWidth: number = container.scrollWidth
      const threshold: number = 50

      // Check if user has scrolled to the end and loop back to the beginning
      if (scrollLeft + containerWidth >= totalWidth - threshold) {
        setCurrentIndex(props.images.length + 1)
        setDisplayImage(currentImages => [...currentImages, ...props.images])
      } else if (scrollLeft === 0) {
        const numImagesToAdd = props.images.length > 1 ? props.images.length : 0
        setCurrentIndex(prevIndex => prevIndex + numImagesToAdd) // Adjust current index
        setDisplayImage(currentImages => [
          ...props.images, // Add new images to the left
          ...currentImages
        ])
        container.scrollLeft += containerWidth * numImagesToAdd // Scroll back
      } else {
        const newIndex: number = Math.floor(
          (scrollLeft + containerWidth / 2) / containerWidth
        )
        setCurrentIndex(newIndex)
      }
    }

    container?.addEventListener('scroll', handleScroll)
    return () => {
      container?.removeEventListener('scroll', handleScroll)
    }
  }, [displayImage.length])

  return (
    <div className={`carousel-container ${props.className}`} ref={containerRef}>
      {displayImage.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image ${index}`}
          onClick={() => {
            props.onImageClick !== undefined && props.onImageClick(image)
          }}
          className={
            currentIndex === index ? 'carousel-image active' : 'carousel-image'
          }
        />
      ))}
    </div>
  )
}

export default Carousel
