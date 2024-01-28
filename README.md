# This project uses Vite + React + TailwindCSS

## 1. Setting VS Code
- Install extension Tailwind CSS IntelliSense
- Copy this config to your VS.Code json setting (this will enable tailwind intelligent)
```json
    "editor.wordWrap": "on",
    "tailwindCSS.includeLanguages": {
        "html": "html",
        "javascript": "javascript",
        "css": "css"
    },
    "files.associations": {
        "*.css": "tailwindcss"
    },
    "tailwindCSS.classAttributes": [
        "class",
        "className",
        "ngClass",
        "cx",
        "utilities"
    ],
```

## 2. Preview build
- Install extension Live Server
- Remove previous build if need
- At root folder run: `npm run build`
- `cd dist && code .`
- Click `Go Live` button, then open `http://127.0.0.1:5500`
Note: Must be `http://127.0.0.1:5500` not `http://127.0.0.1:5500/index.html` for `react-router-dom` works correctly

## 3. Build docker image
  At root folder
  `docker build -t fe .`
  `docker run -dp 80:80 fe`
  then open `http://localhost`

## 4. Note
- Every config, custom class, ... will set in `tailwind.config.js`

