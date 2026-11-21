# Práctica 7 - App de Películas con React

## Integrantes
- NOMBRE COMPLETO DEL ALUMNO (trabajo individual)

**Profesor:** Mtro. Zeus Cobián
**Materia:** NOMBRE DE LA MATERIA
**Calendario:** 2026B — Noviembre 2026
**Institución:** CUCEI – Universidad de Guadalajara

## Objetivo
Desarrollar una aplicación web en React usando Vite como entorno de desarrollo, que consuma información de una API de películas (TMDB), muestre un listado y el detalle de cada película, que esté versionada en GitHub y publicada en Netlify.

## Descripción
Aplicación web de una sola página (SPA) que consulta la API de The Movie Database (TMDB) para mostrar un catálogo de películas en tarjetas con su póster y título. Al dar clic en una tarjeta se abre la vista de detalle con el póster, título, géneros, fecha de estreno, calificación y descripción de la película. La navegación entre vistas se hace con React Router sin recargar la página.

## Tecnologías utilizadas
- React
- Vite
- React Router DOM
- API de TMDB (The Movie Database)
- CSS (Grid, Flexbox y media queries)
- Git y GitHub
- Netlify

## Estructura general del proyecto
```
public/
  _redirects            -> redirige todas las rutas a index.html (Netlify)
  escudo-cucei.png      -> escudo usado en el pie de página
src/
  components/
    MovieCard.jsx       -> tarjeta con póster y título de una película
    MovieGrid.jsx       -> obtiene las películas de la API y muestra la cuadrícula
    Footer.jsx          -> pie de página con datos del alumno, profesor y materia
  pages/
    LandingPage.jsx     -> página principal (listado)
    MovieDetails.jsx    -> vista de detalle de una película
  routers/
    AppRouter.jsx       -> definición de rutas con React Router
  services/
    httpClient.js       -> función get() para consumir la API de TMDB
  utils/
    getMovieImg.js      -> arma la URL del póster (w500 + path) o usa un placeholder
  img/
    placeholder.png     -> imagen por defecto cuando una película no tiene póster
  config.js             -> datos que aparecen en el pie de página
  App.jsx
  main.jsx
  index.css
```

## Instalación y ejecución local
1. Clonar el repositorio:
   ```bash
   git clone URL_DEL_REPOSITORIO
   cd practica7-react-peliculas
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear un archivo `.env` en la raíz (puede copiarse de `.env.example`) con la API key de TMDB:
   ```
   VITE_TMDB_API_KEY=TU_API_KEY
   ```
4. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
5. Generar la versión de producción:
   ```bash
   npm run build
   ```

## Rutas utilizadas
| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `LandingPage` | Listado de películas en tarjetas |
| `/movies/:movieId` | `MovieDetails` | Detalle de la película seleccionada |

## API utilizada
**The Movie Database (TMDB)** — https://www.themoviedb.org/

- `GET /discover/movie` → listado de películas para la página principal.
- `GET /movie/{movieId}` → información detallada de una película.
- Imágenes: `https://image.tmdb.org/t/p/w500/{poster_path}`

Todas las peticiones se hacen con `language=es-MX` para obtener la información en español. La API key se guarda en la variable de entorno `VITE_TMDB_API_KEY` y no se escribe directamente en el código.

## Funcionamiento
1. Al entrar a la página principal, `MovieGrid` hace la petición a `/discover/movie` y muestra las películas en una cuadrícula responsiva.
2. Cada `MovieCard` recibe el `movieId`, el título y el póster, y es un enlace a `/movies/:movieId`.
3. `MovieDetails` lee el `movieId` con `useParams()`, consulta `/movie/{movieId}` y muestra póster, título, géneros, fecha, calificación y descripción.
4. El botón "Volver al inicio" y el título del encabezado regresan a la página principal.
5. El archivo `public/_redirects` permite abrir directamente una ruta de detalle en Netlify sin error 404.

## Despliegue
- **GitHub:** LINK_DEL_REPOSITORIO
- **Netlify:** LINK_DE_NETLIFY

Configuración en Netlify:
- Build command: `npm run build`
- Publish directory: `dist`
- Variable de entorno: `VITE_TMDB_API_KEY`

## Conclusiones
Con esta práctica se aplicaron los conceptos básicos de React: componentes, props, los hooks `useState` y `useEffect`, y la navegación entre vistas con React Router usando parámetros de ruta. También se practicó el consumo de una API externa con `fetch`, el manejo de variables de entorno para proteger la API key, el control de versiones con Git y GitHub, y la publicación de una aplicación SPA en Netlify, incluyendo la configuración de redirecciones para que las rutas del lado del cliente funcionen correctamente.
