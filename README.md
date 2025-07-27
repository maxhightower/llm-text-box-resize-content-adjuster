# Adaptive Text Fitter

This project demonstrates a UI element that adapts the content of your message to best fit the size of a resizable text box—not by changing font size, but by smartly rewriting the text.  


## Features
- **Resizable Text Box:** Drag to resize and see the content adapt.
- **Content-Aware:** The text is rewritten to fit the available space, not just scaled.
- **Modern UI:** Clean, responsive React interface.

## Demo
<!-- ![Demo Screenshot](screenshot.png) --> 
<!-- Add a screenshot if available -->

## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/llm-text-box-resize-content-adjuster.git
   cd llm-text-box-resize-content-adjuster/adaptive-text-fitter
   ```

2. **Install dependencies:**
    <!-- the app is run in Vite -->

   ```sh
   npm install

   npm run dev
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will be available at local host.



## Project Structure

```
llm-text-box-resize-content-adjuster/
├── adaptive-text-fitter/
│   ├── src/
│   │   ├── components/
│   │   │   └── ResizableTextBox.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   ├── package.json
│   └── ...
└── README.md
```
## Usage

- Type your message in the text box.
- Drag the edges or corners to resize the box.
- Watch as the content adapts to fit the new size.
## Customization

- To adjust styles, edit `App.css` or inline styles in `App.jsx`.
- To modify the resizing or text adaptation logic, see `src/components/ResizableTextBox.jsx`.
## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)