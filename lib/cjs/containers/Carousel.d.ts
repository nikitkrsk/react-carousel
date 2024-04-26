import React from 'react';
import './Carousel.css';
interface ICarouselProps {
    /** array of images
     *
     *@required string[]
     */
    images: string[];
    /**
     * Custom class
     *
     * @default 'undefined'
     */
    className?: string;
    /**
     * Function which handles onImageClick
     * @param  {[image]} image:string ['image']
     */
    onImageClick?: (image: string) => void;
}
declare const Carousel: React.FC<ICarouselProps>;
export default Carousel;
