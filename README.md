# Grayscale

A high-performance image processing application using WebAssembly and Rust for client-side image manipulation.

[View Portfolio](https://zachayers.io) | [Live Demo](https://www.grayscale.zachayers.io)

## About

Grayscale converts images to grayscale entirely in the browser using WebAssembly compiled from Rust, achieving near-native performance without server-side processing. Demonstrates seamless integration between JavaScript, Rust, and WebAssembly with a modern Tailwind CSS interface.

## Built With

- Rust
- WebAssembly (wasm-bindgen)
- JavaScript (ES6+)
- Webpack
- Tailwind CSS
- HTML5 File API

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- Rust (stable toolchain)
- wasm-pack (`cargo install wasm-pack`)

### Installation

```bash
git clone https://github.com/N73311/grayscale.git
cd grayscale
npm install
wasm-pack build --target web --out-dir pkg
```

### Development

```bash
npm run dev
```

Runs development server at `http://localhost:8080`.

### Build

```bash
npm run build
```

Creates optimized production build in `dist/` directory.

## Project Structure

```
grayscale/
├── src/           # Rust source code
├── public/        # HTML and JavaScript
├── pkg/           # Generated WebAssembly
├── Cargo.toml     # Rust dependencies
└── package.json   # Node dependencies
```

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.

## Author

Zachariah Ayers - [zachayers.io](https://zachayers.io)