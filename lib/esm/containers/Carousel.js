var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useRef, useEffect, useState } from 'react';
import './Carousel.css';
var Carousel = function (props) {
    var _a = useState(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var _b = useState(props.images), displayImage = _b[0], setDisplayImage = _b[1];
    var containerRef = useRef(null);
    useEffect(function () {
        var container = containerRef.current;
        var handleScroll = function () {
            if (!container)
                return;
            var scrollLeft = container.scrollLeft;
            var containerWidth = container.offsetWidth;
            var totalWidth = container.scrollWidth;
            var threshold = 50;
            // Check if user has scrolled to the end and loop back to the beginning
            if (scrollLeft + containerWidth >= totalWidth - threshold) {
                setCurrentIndex(props.images.length + 1);
                setDisplayImage(function (currentImages) { return __spreadArray(__spreadArray([], currentImages, true), props.images, true); });
            }
            else if (scrollLeft === 0) {
                var numImagesToAdd_1 = props.images.length > 1 ? props.images.length : 0;
                setCurrentIndex(function (prevIndex) { return prevIndex + numImagesToAdd_1; }); // Adjust current index
                setDisplayImage(function (currentImages) { return __spreadArray(__spreadArray([], props.images, true), currentImages, true); });
                container.scrollLeft += containerWidth * numImagesToAdd_1; // Scroll back
            }
            else {
                var newIndex = Math.floor((scrollLeft + containerWidth / 2) / containerWidth);
                setCurrentIndex(newIndex);
            }
        };
        container === null || container === void 0 ? void 0 : container.addEventListener('scroll', handleScroll);
        return function () {
            container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', handleScroll);
        };
    }, [displayImage.length]);
    return (React.createElement("div", { className: "carousel-container ".concat(props.className), ref: containerRef }, displayImage.map(function (image, index) { return (React.createElement("img", { key: index, src: image, alt: "image ".concat(index), onClick: function () {
            props.onImageClick !== undefined && props.onImageClick(image);
        }, className: currentIndex === index ? 'carousel-image active' : 'carousel-image' })); })));
};
export default Carousel;
