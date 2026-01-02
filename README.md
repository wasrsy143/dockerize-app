DOCUMENTATION 12/29/2025 | AURESTILA, NINA MARIE - GROUP LEADER

React App Docker Build
- This document describes the steps used to install dependencies and build a Docker image for a React application using Node.js and Nginx.
  
Prerequisites
1. Node.js and npm installed
2. Docker Desktop installed and running
3. Existing React application
4. Dockerfile configured (Node for build, Nginx for production)

Steps Performed
1. Navigate to Project Directory
cd NEWCRUD
cd my-react-app
2. Install Project Dependencies
npm install
3. Ensures all required npm packages are installed
Result: No vulnerabilities found
4. Build Docker Image
docker build -t my-react-app .
Uses the Dockerfile in the project root
5. Pulls required base images:
node:22-alpine for building the React app
nginx:alpine for serving the production build
6. Running the Docker Container
docker run -d -p 8080:80 my-react-app
7. Runs the Docker container in detached mode
8. Maps port 8080 (host) to port 80 (container)
9. Container ID is generated after successful start
10. Checking Running Containers
docker ps
11. Displays active containers
12. Confirms my-react-app is running
13. Shows container name, status, and port mapping
14. Stopping the Container
docker stop 3c063a0ea1ad

Build completed successfully
<img width="1712" height="917" alt="image" src="https://github.com/user-attachments/assets/9e24baff-c9ca-4d08-8e72-e1498dae0bc5" />

<img width="2166" height="1018" alt="image" src="https://github.com/user-attachments/assets/f5380f93-4dda-4b73-8585-53e9302e5e23" />

<img width="1722" height="815" alt="image" src="https://github.com/user-attachments/assets/3337be44-1ff8-4f45-9bed-89ef543593c2" />

<img width="2240" height="1400" alt="image" src="https://github.com/user-attachments/assets/1cc62817-48f9-4623-b9d8-613c5e7eee0d" />

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


