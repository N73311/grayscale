# Grayscale

A high-performance image processing application using WebAssembly and Rust, demonstrating client-side image manipulation with near-native performance.

## Overview

Grayscale is a web application that converts images to grayscale entirely in the browser using WebAssembly (WASM) compiled from Rust. It showcases the power of WebAssembly for computationally intensive tasks like image processing, achieving near-native performance without server-side processing. The application features a modern UI built with Tailwind CSS and demonstrates seamless integration between JavaScript, Rust, and WebAssembly.

## Features

- **Client-Side Processing** - All image processing happens in the browser, no server required
- **WebAssembly Performance** - Near-native speed using Rust compiled to WASM
- **Zero Dependencies** - No external image processing services or APIs
- **Instant Results** - Real-time grayscale conversion without network latency
- **Modern UI** - Beautiful interface with animated gradients and Tailwind CSS
- **Type Safety** - Rust's type system ensures memory safety and prevents crashes
- **Base64 Handling** - Efficient encoding/decoding for image data transfer
- **PNG Support** - Optimized for PNG image format processing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Rust and Cargo (latest stable)
- wasm-pack (`cargo install wasm-pack`)
- Modern web browser with WebAssembly support

### Installation

```bash
# Clone the repository
git clone https://github.com/N73311/grayscale.git
cd grayscale

# Install JavaScript dependencies
npm install

# Build the WebAssembly module
wasm-pack build --target web --out-dir pkg
```

### Development

```bash
# Start the development server
npm run dev

# The application will be available at http://localhost:8080
```

### Production Build

```bash
# Build for production
npm run build

# The optimized files will be in the dist/ directory
```

## Project Structure

```
grayscale/
├── src/
│   └── lib.rs              # Rust source code for image processing
├── public/
│   ├── index.html          # Main HTML file with UI
│   └── main.js             # JavaScript glue code
├── pkg/                    # Generated WebAssembly files (after build)
│   ├── wasm_image_processing_bg.wasm
│   ├── wasm_image_processing.js
│   └── wasm_image_processing_bg.js
├── Cargo.toml              # Rust dependencies and configuration
├── package.json            # Node.js dependencies and scripts
└── webpack.config.js       # Webpack configuration for bundling
```

## Architecture

### WebAssembly Module (Rust)

The core image processing logic is written in Rust and compiled to WebAssembly:

```rust
#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    // Decode base64 to bytes
    let base64_to_vector = decode(encoded_file).unwrap();
    
    // Load image from memory
    let mut image = load_from_memory(&base64_to_vector).unwrap();
    
    // Apply grayscale filter
    image = image.grayscale();
    
    // Encode back to base64
    let mut buffer = vec![];
    image.write_to(&mut buffer, Png).unwrap();
    let encoded_img = encode(&buffer);
    
    // Return as data URL
    format!("data:image/png;base64,{}", encoded_img)
}
```

### JavaScript Interface

The JavaScript layer handles file input and WASM module communication:

```javascript
// Import WASM module
const rust = await import('../pkg');

// Process uploaded image
fileReader.onloadend = () => {
    const base64 = fileReader.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/, ''
    );
    
    // Call WASM function
    const imageDataURL = rust.grayscale(base64);
    
    // Display result
    document.getElementById('new-img').setAttribute('src', imageDataURL);
};
```

## Technologies Used

### Rust & WebAssembly
- **Rust** - Systems programming language for WASM module
- **wasm-bindgen** - Facilitates communication between WASM and JavaScript
- **image** - Rust crate for image processing operations
- **base64** - Efficient base64 encoding/decoding

### Frontend
- **Webpack** - Module bundler with WASM support
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5 File API** - For local file handling
- **CSS Animations** - Animated gradient backgrounds

### Build Tools
- **wasm-pack** - Build tool for Rust-generated WebAssembly
- **webpack-dev-server** - Development server with hot reloading
- **@wasm-tool/wasm-pack-plugin** - Webpack plugin for WASM integration

## Performance

- **Zero Network Latency** - All processing happens client-side
- **Native Speed** - WASM runs at near-native performance
- **Memory Efficient** - Rust's ownership system prevents memory leaks
- **Instant Feedback** - Results appear immediately after file selection

## Browser Compatibility

- Chrome 57+ (WebAssembly support)
- Firefox 52+ (WebAssembly support)
- Safari 11+ (WebAssembly support)
- Edge 16+ (WebAssembly support)

## Security Considerations

- All processing happens locally in the browser
- No data is sent to external servers
- Images remain private to the user
- Memory-safe implementation in Rust

## Future Enhancements

- Support for additional image formats (JPEG, WebP)
- More image filters (blur, sharpen, sepia)
- Batch processing capabilities
- Image resizing and cropping
- Download processed images

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Notes

### Building WASM Module

```bash
# Build with debugging symbols
wasm-pack build --dev

# Build optimized for production
wasm-pack build --release

# Build with specific target
wasm-pack build --target web --out-dir pkg
```

### Debugging

- Use `web-sys` console methods for debugging in Rust
- Browser DevTools support WASM debugging
- Source maps are generated for better debugging experience

## License

This project is licensed under the ISC License - see the package.json file for details.

## Acknowledgments

- Rust and WebAssembly community for excellent tooling
- wasm-bindgen for seamless JS/WASM integration
- Tailwind CSS for rapid UI development
- image-rs for robust image processing in Rust