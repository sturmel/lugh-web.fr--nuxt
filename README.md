# Lugh Web - Modern Web Solutions

This project is a modern web application built with Nuxt.js, providing a range of digital services including website development, mobile applications, and custom business tools.

## Features

*   **Cutting-edge Technology:** Built with Nuxt.js for a fast and efficient user experience.
*   **Modular Design:** Utilizes Vue.js components for a maintainable and scalable codebase.
*   **Responsive Layout:** Ensures optimal viewing across a variety of devices.
*   **Animations:** Uses GSAP for smooth and engaging animations.
*   **UI Icons:** Uses Nuxt Icon to import icons.
*   **Image Optimization:** Uses Nuxt Image to optimize images.
*   **Particles:** Uses Nuxt Particles to generate particles.

## Technologies Used

*   [Nuxt.js](https://nuxt.com/)
*   [Vue.js](https://vuejs.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [GSAP (GreenSock)](https://greensock.com/)
*   [Nuxt Icon](https://icon.nuxt.dev/)
*   [Nuxt Image](https://image.nuxt.dev/)
*   [Nuxt Eslint](https://eslint.nuxt.com/)
*   [Nuxt Particles](https://github.com/Baroshem/nuxt-particles)

## Development Setup

### Prerequisites

*   Node.js (v20.17 or higher)
*   Yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  Install the dependencies:

    ```bash
    yarn install
    ```

3.  Copy the example environment variables:

    ```bash
    cp .env.docker .env
    ```

    *   Modify the `.env` file as needed.

### Development Server

To start the development server, run:

```bash
yarn run dev

```markdown
# Lugh Web - Modern Web Solutions

This project is a modern web application built with Nuxt.js, providing a range of digital services including website development, mobile applications, and custom business tools.

## Features

*   **Cutting-edge Technology:** Built with Nuxt.js for a fast and efficient user experience.
*   **Modular Design:** Utilizes Vue.js components for a maintainable and scalable codebase.
*   **Responsive Layout:** Ensures optimal viewing across a variety of devices.
*   **Animations:** Uses GSAP for smooth and engaging animations.
*   **UI Icons:** Uses Nuxt Icon to import icons.
*   **Image Optimization:** Uses Nuxt Image to optimize images.
*   **Particles:** Uses Nuxt Particles to generate particles.

## Technologies Used

*   [Nuxt.js](https://nuxt.com/)
*   [Vue.js](https://vuejs.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [GSAP (GreenSock)](https://greensock.com/)
*   [Nuxt Icon](https://icon.nuxt.dev/)
*   [Nuxt Image](https://image.nuxt.dev/)
*   [Nuxt Eslint](https://eslint.nuxt.com/)
*   [Nuxt Particles](https://github.com/Baroshem/nuxt-particles)

## Development Setup

### Prerequisites

*   Node.js (v20.17 or higher)
*   Yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  Install the dependencies:

    ```bash
    yarn install
    ```

3.  Copy the example environment variables:

    ```bash
    cp .env.docker .env
    ```

    *   Modify the `.env` file as needed.

### Development Server

To start the development server, run:

```bash
yarn run dev
```

This will start the application on `http://localhost:3000`.

### Docker

A docker-compose.yml file is provided for containerized development.

1.  Ensure you have Docker and Docker Compose installed.
2.  Run:

    ```bash
    docker-compose up --build
    ```

This will build and start the application within a Docker container.  The application will be accessible on `http://localhost:3000`.

## Contributing

Contributions are welcome! Please read the `CONTRIBUTING.md` file for guidelines on how to contribute to this project.

## License

MIT