# Carousel Component

The Carousel component is a React component that provides a simple carousel functionality for displaying a set of images with navigation controls.

## Installation

To use the Carousel component in your React project, you can install it via npm(NOT PUBLISHED YET):  

```bash
npm install @nikitkrsk/react-carousel
```
## Local Development 

To use it locally add to your package json 

```json
"dependencies": {
  "@nikitkrsk/react-carousel": "path/to/package"
}
```

Or if it's published just do in package

```bash
npm link 
```
and in child project 

```bash 
npm link @nikitkrsk/react-carousel
```

## Usage

Once installed, you can import the Carousel component and use it in your React application like so:

```js
import React from 'react';
import Carousel from '@your-package-name/carousel';

function App() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  const handleImageClick = (image) => {
    console.log('Clicked image:', image);
  };

  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel images={images} onImageClick={handleImageClick} />
    </div>
  );
}

export default App;
```

## props

The Carousel component accepts the following props:

- `images` (required): 
  - Type: `string[]`
  - Description: An array of strings representing the URLs of images to display in the carousel.

- `className`: 
  - Type: `string`
  - Default: `'undefined'`
  - Description: A custom CSS class to apply to the carousel container.

- `onImageClick`: 
  - Type: `(image: string) => void`
  - Description: A function that will be called when an image in the carousel is clicked. It receives the URL of the clicked image as an argument.


## Example 

```js
import React from 'react';
import Carousel from '@your-package-name/carousel';

function App() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  const handleImageClick = (image) => {
    console.log('Clicked image:', image);
  };

  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel images={images} onImageClick={handleImageClick} className="custom-carousel" />
    </div>
  );
}

export default App;
```

## Future Improvements

- Server-side rendering
- Dot mode
- Custom animation
- AutoPlay mode
- Auto play interval
- Mouse drag to slide
- Keyboard control to slide
- Multiple items
- Show / hide arrows
- Custom arrows / control buttons
- Dots
- Show next/previous set of items partially
