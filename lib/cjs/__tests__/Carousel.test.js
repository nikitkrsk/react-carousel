"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var Carousel_1 = __importDefault(require("../containers/Carousel"));
describe('Carousel component', function () {
    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    it('renders with default props', function () {
        var container = (0, react_2.render)(react_1.default.createElement(Carousel_1.default, { images: images })).container;
        expect(container).toBeInTheDocument();
    });
    it('renders images correctly', function () {
        var getByAltText = (0, react_2.render)(react_1.default.createElement(Carousel_1.default, { images: images })).getByAltText;
        images.forEach(function (image, index) {
            expect(getByAltText("image ".concat(index))).toHaveAttribute('src', image);
        });
    });
    it('calls onImageClick prop when an image is clicked', function () {
        var mockOnImageClick = jest.fn();
        var getByAltText = (0, react_2.render)(react_1.default.createElement(Carousel_1.default, { images: images, onImageClick: mockOnImageClick })).getByAltText;
        images.forEach(function (image, index) {
            react_2.fireEvent.click(getByAltText("image ".concat(index)));
            expect(mockOnImageClick).toHaveBeenCalledWith(image);
        });
    });
});
