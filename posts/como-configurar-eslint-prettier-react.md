---
title: 'Cómo configurar Eslint y Prettier para React CRA'
description: ''
date: '2021-05-04'
categoryId: 'react'
isFeatured: true
---

## ¿Qué es un Linter?

## ¿Qué es un formateador de código?

## Configuración de Eslint y Prettier en Visual Studio Code

### Instalación de Extensiones

### Instalación de Eslint y Prettier al proyecto Create React App

1. Instalar Eslint al proyecto

```
npm install eslint -D
```

2. Inicializar el asistente de configuración de Eslint:
```
npx eslint --init
-> To check syntax, find problems, and enforce code style
-> Javascript
-> React
-> No typescript
-> A (select all)
-> Use a popular style guide
-> Standard
-> Javascript
-> Yes
```

3. Instalar módulo para evitar conflictos entre Eslint y Prettier
```
npm install -D eslint-config-prettier
```

4. Instalar Prettier
```
npm install -D prettier
```

5. Instalar módulo para obligar a Git a validar el Linter y formatear el código antes de poder hacer un commit
```
npx mrm lint-staged
```

### Configuración de Eslint y Prettier

1. Configuración de Eslint. Crear en la raiz del proyecto el archivo **.eslintrc.js** con la siguiente configuración
```javascript
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["plugin:react/recommended", "standard", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": "off",
	},
}
```

2. Configuración de directorios ignorados por Prettier. Crear en la raíz el archivo **.prettierignore** con el siguiente contenido
```
/node_modules
```

3. Configuración adicional de Prettier. Quitar los punto y comas del final de cada comando. Crear archivo **.prettierrc.json** con el siguiente contenido
```json
{
	"semi":false
}
```

4. Finalmente, para evitar que cada vez que importemos un componente tengamos que poner la ruta relativa, pondremos la ruta absoluta desde la raíz de nuestro proyecto. Crearemos el archivo **jsconfig.json** con el siguiente contenido
```json
{
	"compilerOptions": {
		"baseUrl" : "."
	}
}
```