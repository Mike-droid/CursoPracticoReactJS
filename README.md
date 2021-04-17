# Curso Práctico de React JS

## ¿Qué es React JS?

### Lo que es

React es una librería de JS para construir interfaces de usuario. Esa es su única finalidad. React es declarativo. Está basado en componentes. Puede ser usado en la web, también para crear aplicaciones para Windows, Mac y Linux e incluso apps móviles con React Native.

React fue creado en el 2013 por Facebook. React es usado por AirBNB, Netflix, Uber, Platzi, etc.

### DOM, Virtual DOM y React DOM

El Virtual DOM es una herramienta que incorpora React para darle velocidad a nuestros desarrollos. Lo que significa es que tenemos una copia fiel del DOM.

## Crear una Aplicación con React JS

### Create React App y Tipos de Componentes

Dentro de la carpeta "public" tendremos todos los archivos que irán a producción. La carpeta de "src" contiene toda la aplicación.

Guardamos los componentes dentro de la carpeta 'components'.

Todos los componentes de React inician con mayúscula.

Tenemos 3 principales componentes:

1. Stateful -> Este componente maneja ciclo de vida, eventos y estado
2. Statelss -> Este componente no tiene estado ni ciclo de vida
3. Presentational -> Este es un return explícito, no necesito llamar a `return()` y solo tiene una parte muy particular de HTML, no tienen lógica, no tienen propiedades

### JSX: Javascript + HTML

Es una forma en la que React hace que todo esté dentro del mismo componente.

React usa `className` para dar clases de CSS. Todas las etiquetas deben ser cerradas o de lo contrario habrá errores.

### Props: Comunicación entre Componentes

Así como las funciones reciben parámetros, podemos pasar propiedades a nuestros componentes. No importa si es de tipo clase o presentacional, estas propiedades son sólo de lectura. Si necesitamos manipularlas tenemos que instanciarlas en una nueva variable.

```jsx
const { text } = props //* Destructuración, así es más amigable de leer y escribir
```

### ¿Qué son los métodos del ciclo vida?

Todos los componentes en React pasan por una serie de fases que generalmente se denominan “Ciclo de Vida del componente” es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

#### Montaje

En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

#### Actualización

En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.

#### Desmontaje

En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.

#### Manejo de Errores

Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.

Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

Ahora que entendemos las fases que cumple el ciclo de vida en React vamos a entrar a detalle en cada uno de ellos para ver qué piezas de código se ejecutan y nos ayudarán a crear aplicaciones en React pasando por un ciclo de vida bien estructurado.

#### Montado

##### Constructor()

Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.

###### getDerivedStateFromProps()

Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

##### render()

Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

##### ComponentDidMount()

Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

#### Actualización

##### getDerivedStateFromProps()

Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

##### shouldComponentUpdate()

Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

##### render()

Se llama el método render que representa los cambios en el DOM.

##### componentDidUpdate()

Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

#### Desmontado

##### componentWillUnmount()

Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

#### Manejo de Errores

##### getDerivedStateFromError()

Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

##### componentDidCatch()

Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

Ahora que entendemos cada una de las fases que tiene el ciclo de vida de react, podemos utilizarlas según sea necesario en nuestra aplicación y de esta forma crear las interacciones que necesitemos.

### State - Events

En React, el **estado** es un objeto al cual le podemos definir variables (string, númerico, booleanas, funciones). Vamos a poder acceder al estado en nuestro componente en el momento en que se inicializa.

### Instalación y configuración de entorno

La carpeta public que adentro tiene "index.html" sirve para mandar el proyecto a producción.

package-lock.josn sirve para el versionado de los paquetes que estemos usando.

### Agregando compatibilidad con todos los navegadores usando Babel

Babel es un transpilador de Javascript. Te permite usar sintaxís de ES6+ y transformará tu código a una versión anterior de JS para que todos los navegadores puedan entenderlo.

- Babelcore: Construye nuestras herramientas modernas de JS.
- BabelLoader: Trabaja con webpack así como los preset.

## Configurar un entorno de trabajo profesional

### Webpack: Empaquetando nuestros módulos

Configuraciones en webpack.config.js:

```javascript
const path = require('path')
const HtmlWepackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js' , '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //*Regular expresion
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWepackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}
```

Creamos el nombre del script en package.json:

`"build": "webpack --mode production"`

Una vez ejecutado este comando, webpack creará una carpeta llamada "dist" y dentro tendremos el archivo bundle.js e index.hmtl ambos minimizados.

### Webpack Dev Server: Reporte de errores y Cambios en tiempo real

Después de haber instalado webpack-dev-server, tenemos en package.json: `"start": "webpack serve --mode development --env development"`. Lo que hace es encender el servidor en el puerto 8080 de nuestra computadora para ver los cambios en el navegador.

### Estilos con SASS

Tenemos que agregar las reglas al archivo webpack.config.js para que pueda manejar CSS y sus preprocesadores.

### Configuración final: ESLint y Git Ignore

Creamos un archivo '.eslintrc' que sirve para crear reglas de sintaxís en JS para que todos en un equipo escriban el código correctamente.

El archivo '.gitignore' sirve para no tomar en cuenta archivos en nuestro proyecto para no ser mandados al repositorio remoto.

### Arquitectura de componentes para Platzi Video

[Link del repositorio](https://github.com/platzi/escuela-js/tree/feature/react)

## LLevar un diseño de HTML y CSS a React

### Estructura del Header

Lo más recomendable es crear una carpeta 'containers', dentro estará el archivo 'App.jsx' y ahí insertaremos los componentes. En el archio index.js mandaremos a llamar a App.jsx.

### Estilos del Header

Es importante empezar a separar incluso los estilos por componentes. Tenemos una carpeta para cada estilo de cada componente dentro de la carpeta styles con sus respectivos archivos.

### Estructura y estlos del buscador

Esto realmente más de lo mismo.

### Estructura y Estilos de Carousel y Carousel Item

Más de lo mismo. Sin embargo, algo importante: Ya que un elemento tendrá hijos es importante pasar el props de 'children'.

```javascript
const Categories = ({ children }) => (
  <div className='categories'>
    <h3 className='categories__title'>Mi lista</h3>
    {children}
  </div>
);
```

Así, al momento de escribir el componente en App.jsx este elemento podrá tener otros elementos dentro de él.

Lo mismo pasa aquí:

```javascript
const Carousel = ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container'>
      { children }
    </div>
  </section>
);
```

App.jsx :

```javascript
const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <Categories>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
  </div>
);
```

### Estructura y Estilos del Footer

Más de lo mismo.

### Añadiendo imágenes con Webpack

Instalaremos una manejador de archivos para webpack. `npm i file-loader -D`.

webpack.config.js:

```javascript
{
  test: /\.(png|gif|jpg)$/, //*Cualquier elemento png, gif i jpg será usado dentro de nuestros proyectos
    use: [
      {
        'loader': 'file-loader',
          options: {
            name: 'assets/[hash].[ext]', //*Guardará el archivo en assets, le dará un hash y conservará su extensión.
          },
      },
    ],
},
```

Mandamos a llamar a las imágenes como si fueran variables: `import logo from '../assets/static/logo-platzi-video-BW2.png';`.
Y las traemos a React así: `<img className='header__img' src={logo} alt='Platzi Video' />`.

### Imports, Variables y Fuentes de Google en Sass

Creamos el archivo 'Vars.scss' para tener todos los valores importantes en los estilos.

```scss
@import url(https://fonts.googleapis.com/css?family=Muli&display=swap);

$theme-font: 'Muli', sans-serif;
$main-color: #8f57fd;
```

Utilizaremos estas variables en los demás archivos que sean necesarios, por ejemplo en App.scss:

```scss
@import './Vars.scss';

body {
  margin: 0;
  font-family: $theme-font;
  background: $main-color;
}
```
