# Proyecto 2: Sistemas y Tecnologías Web

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.0.2.

## Features

- Despliegue de juegos por categoría
- Ver detalles de un juego específico
- Responsive UI

## Angular CLI

### Development server

Correr `ng serve` para un servidor de desarrollo. Navegar a `http://localhost:4200/`. La aplicación de recargará automáticamente si se cambian alguno de los archivos de fuente.

### Code scaffolding

Correr `ng generate component component-name` para generar un nuevo componente. También se puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Correr `ng build` para construir el proyecto. Los artefactos de construcción se guardarán en el directorio `dist/project_name`.


## RAWG API Reference

### Base URL
`https://api.rawg.io/api`

#### Get all games

```http
  GET https://api.rawg.io/api/games
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key`     | `string` | **Required**. Clave del api|

#### Get details of a game

```http
  GET https://api.rawg.io/api/games/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `key`     | `string` | **Required**. Clave del api       |
| `id`      | `string` | **Required**. Id del juego a traer|

