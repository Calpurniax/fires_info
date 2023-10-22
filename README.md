# Información de incendios forestales

Este proyecto ha sido creado utilizando la [API de la Junta de Castilla y León](https://analisis.datosabiertos.jcyl.es/pages/home/) para poder consultar los partes realizados sobre incendios forestales

## Implementaciones

El proyecto despliega en una tabla los resultados que devuelve la API sobre incendios, desde el año 2021 y en orden descendente (primero se muestran los más recientes). En la tabla se pueden ver la información sobre cada incendio (hora y fecha de inicio, estado (extinguido/activo/controlado) etc.
Utilizando estos datos presentes en la API se han creado varios filtros, por provincia, por estado, por la causa probable y por el nivel máximo alcanzado. A la hora de interactuar con el filtro de la causa probable, hay que tener en cuenta que este menú desplegable procesa los datos que le llegan desde la API y renderiza un menú, de tal manera que si la búsqueda es muy concreta se mostrarán sólo las causas disponibles para esa búsqueda.

## Estructura

```bash
├── vite.config.js
├── package.json
├── package-lock.json
├── index.html
├── README.md
├── .gitignore
├── .eslintrc.cjs
├── node_modules
├── public
├── src
    ├── assets
    │   └── react.svg    
    ├── components
        ├── table
            ├── Container.jsx
            ├── Filters.jsx
            ├── SelectInput.jsx
            ├── Table.jsx
        ├── Header.jsx   
    ├── pages
          └── landing.jsx
    ├── services
          └── api.js   
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx   
   
```

los componentes de la tabla donde se renderizan los datos están dentro de "components/table".

La llamada a la API se encuentra dentro de la carpeta "services".

## Retos

La API no permite más de 100 resultados por consulta, excepto si importas el CSV, con lo cual el filtro de la causa probable me parece menos completo de lo que pudiera ser.

## Instalación
1. Para arrancar este proyecto, necesitas tener Node y npm instalado. Después clona el repositorio con:
```
git clone https://github.com/Calpurniax/fires_info.git
```
2. Instala las dependencias y librerías:
```
npm install
```
3. Con la terminal dentro de la carpeta del proyecto, utiliza este comando para arrancarlo:
```
npm run dev
```
4. Abre tu navegador, por defecto el proyecto se abre en http://localhost:5173/
5. Disfrútalo y gracias por descargarlo, todo feedback es bienvenido!
