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

## Uso de una API de desarrollo (Fake API)

### Creando una Fake API

Traemos los datos de un JSON [de este enlace](https://gist.github.com/gndx/d4ca4739450afaa614efe4570ac362ee)

***ADVERTENCIA***: el JSON empieza con 'initalState' en vez de 'initialState', hay que corregir para no tener errores.

Instalaremos json-server para pretender que traemos datos de una API. Tenemos que hacer esto con privilegios de administrador.

`sudo npm i json-server -g`

Ejecutamos `json-server initialState.json` y tendremos un servidor en 'http://localhost:3000/initialState'.

Y así tenemos lista nuestra fake API.

### React Hooks: useEffect y useState

React hooks está disponible desde la versión 16.8 en adelante.

En resumen; useState nos devuelve un array con dos elementos. El 1ro es el valor de nuesro estado. El 2do es una función que nos permite actualizar ese valor. El argumento que le enviamos es por defecto el valor del estado(initial state).

El hook 'useEffect' es una función que nos permite ejecutar código cuando se monta, desmonta o actualiza un componente. El primer argumento que recibe es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra funcion que se ejecuta cuando el componente se desmonte. El segundo argumento es una array donde podemos especificar qué propiedades deben cambiar para que Reacr vuelva a llamar nuestro código. Por defecto, cuando no enviamos un segundo argumento, React ejecutará 'useEffect' cada vez que el componente o componente padre se actualice. Si enviamos un array vacio la función solo se ejecuta al montar o desmontar el componente.

Para poder usar async await en nuestro proyecto, debemos tener así el archivo .babelrc:

```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ],
    "@babel/preset-react"
  ]
}
```

Función asíncrona:

```javascript
const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/initialState');
        const data = await response.json();
        return setVideos(data);
      } catch {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  console.log(videos);
```

### Lectura React Hooks

Los React Hooks son una característica de React que tenemos disponible a partir de la versión 16.8. Nos permiten agregar estado y ciclo de vida a nuestros componentes creados como funciones.

El Hook useState nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.

El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).

```javascript
import React, { useState } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  return <div>{name}</div>;
}
```

El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.

```javascript
import React, { useState, useEffect } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  useEffect(() => {
    document.title = name;
    return () => {
      document.title = 'el componente se desmontó';
    };
  }, [name]);

  return <div>{name}</div>;
}
```

No olvides importar las funciones de los hooks desde la librería de React. También puedes usarlos de esta forma: React.useNombreDelHook.

### Conectando la información de la API

### ### Custom Hooks

Es convención que a nuestros customs hooks les demos un nombre que empiece por 'use'.

Nuestros custom hooks van dentro de una carpeta 'hooks' que a su vez va dentro de 'src'.

### PropTypes

Instalaremos `npm i prop-types`

```javascript
import propTypes from 'prop-types';

//* PropTypes sirve para asegurarnos que la data que se esta consumiendo es la correcta y evitar así un posible error

CarouselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};
```

### Usar React Tools

[Puedes descargar las React Developer Tools aquí](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)

# Curso de React Router y Redux

## ¿Qué es React Router? y Aplicarlo en tus proyectos

### ¿Qué es React Routery cómo instalarlo?

React router es una libreria para react que te permite creas una SPA. Esto hace es que dependiendo la ruta en la que te
encuentres en el navegador, react-router cambia el contenido de la pagina, pero sin recargarla.

Se instala con: `npm i --save react-router-dom`

### Crear nuestro archivos de Rutas

Dentro de la carperta 'src' crearemos una carpeta 'routes' y dentro creamos el archivo App.js.

```javascript
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Route exactpath='/' component={Home} />
  </BrowserRouter>
);

export default App;

```

Lo que antes era "App.jsx" ahora es "Home.jsx"

### Container: Login

Cuando manejamos nuestro entorno de desarrollo local, debemos hacer que pueda manejar las rutas. Hacemos esto en el archivo de webpack.config.js:

```javascript
devServer: {
    historyApiFallback: true,
  }
```

### Container: Register

Con `<Switch></Switch>` nos aseguraremos que cuando encuentre solamente la primera ruta, esa es la única que se va a renderizar.

```javascript
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;

```

Atributos para los Route Objetos:

- path: la ruta en la que se renderizará el componente en forma de cadena de texto
- exact: un booleano para definir si queremos que la ruta tiene o no que ser exacta para renderizar un componente. Eg: /index !== /index/all.
- strict: un booleano para definir si queremos que el último slash sea tomado en cuenta para renderizar un componente. Eg: /index !== /index/.
- sensitive: un booleano para definir si queremos distinguir entre minúsculas y mayúsculas, y tomar esto en cuenta para renderizar un componente. Eg: /index !== /Index
- component: recibe un componente a renderizar. Crea un nuevo elemento de React cada vez. Esto causa que el componente se monte y desmonte cada vez (no actualiza)
- render: recibe un método que retorna un componente. A diferencia de component no remonta el componente.

### Container: 404 Not Found

Podemos usar `<React.Fragment></React.Fragment>` para NO cargar HTML innecesario, por ejemplo en la página con cógido HTTP=404.
Una forma más sencilla es utilizar los 'pico parantesis' y encerramos el HTML en `<> </>`.

`<Route component={NotFound} />` Esta línea se usa para cuando introducimos un url que no existe en nuestro proyecto.

### Componente: Layout

Layout es un component y no un container para evitar que se renderizen componentes que no requieren constante actualización.
Como el header y footer van a ser constantes en todo el sitio, es como dejarlos fijos.

Creamos Layout.jsx:

```javascript
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    { children }
    <Footer />
  </div>
);

export default Layout;

```

Envolvemos el Switch en el Layout:

```javascript
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

```

Y en Home.jsx eliminamos las etiquetas de Home y Footer, además de envolver todo en picoparéntesis (o React Fragments).

### Manejando enlaces y configuraciones

En React usamos `import { Link } from 'react-router-dom';` para sustituir las etiquetas `<a></a>`. Esto porque Link hace la carga
de las rutas más rápida, realmente no hace un refresh de las url, como lo hace la etiqueta ancla. Esto da más velocidad
y una mejor experiencia de usuario.

```javascript
<Linkto="/" rel="canonical">
  <img src={Logo}widht="100" />
</Link>
```

Usar **rel='canonical'** nos ayuda a evitar contenido identico o duplicado que aparezca en varias URL, y mejora el SEO.

Si por ejemplo queremos que al hacer click en algo, nos lleve a una diferente sección de la misma página (Que una imagen nos
lleve al footer haciendo scroll, hacemos lo siguiente:

`$ npm install--save react-router-hash-link`

Luego en tu componente:

`import { HashLink as Link } from'react-router-hash-link';`

Finalmente:

`<Link to="home-page#section-three">Section three</Link>` y en otra etiqueta:

`<div id='#section-three'>Hola</div>`

## ¿Qué es Redux?

### Qué es Redux

Redux es una librería de JS. Está basada en [la arquitectura Flux](https://carlosazaustre.es/como-funciona-flux)

- [Redux en Wikipedia](https://es.wikipedia.org/wiki/Redux_(JavaScript))
- [Página oficial de Redux](https://redux.js.org/)
- [Repositorio de github de Redux](https://github.com/reduxjs/redux)

Redux se basa en 3 principios fundamentales:

1. Es una sola fuente de la verdad.
2. El estado es de sólo lectura.
3. Sólo podemos utilizar funciones puras.

### ¿Qué es Redux? Profundizando en la herramienta

Redux nos permite tener un contenedor predecible del estado en aplicaciones creadas con JavaScript, Nos ayuda a escribir aplicaciones que se comportan de una manera consistente, Esto significa que podemos utilizar esta lógica en aplicaciones del lado del cliente, trabajar del lado del servidor o crear aplicaciones para dispositivos móviles.

Uno de los principales uso que tiene Redux es con React pero puede ser implementado en cualquier librería o proyecto que este construido con JavaScript, lo cual incluye a Angular, Vue o algún otro framework o librería.

Redux nace de la arquitectura Flux, tomando inspiración del lenguaje funcional Elm y es creado por Dan Abramov y Andrew Clark en el 2015, Hoy en día es una de las librerías más utilizadas para el manejo del flujo de la información en aplicaciones.

Una de las principales motivaciones para crear Redux nace en resolver un problema y era el manejo del estado y el flujo de nuestras aplicaciones creadas en JavaScript. Redux propone una forma de manejar el estado donde podamos controlar cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación, teniendo en cuenta esto, Redux intenta de predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuando y como pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.

Redux es una librería muy pequeña que se puede incorporar en cualquier proyecto construido en JavaScript y se basa en tres principios:

1. Única fuente de la verdad: Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.
2. El estado es de solo lectura: La única forma de modificar el estado es emitiendo un acción, este objeto describe lo que va a ocurrir.
3. Los cambios se realizan con funciones puras: Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.

[Documentación oficial de Redux](https://redux.js.org/introduction/getting-started)

### Instalación de Redux

`npm i redux react-redux -D`

Dentro de la carpeta 'src' creamos 2 carpetas, 'actions' y 'reducers'. Cada una de ellas tendrá un archivo index.js.

Recuerden que se tiene que encapsular nuestra aplicación dentro de un provider, porque nada fuera del provider podrá acceder al store.

El `<Provider />` hace que la store de Redux esté disponible para cualquier componente anidado que se haya incluido en la función connect().

Dado que cualquier componente React en una aplicación React Redux se puede conectar, la mayoría de las aplicaciones mostrarán un `<Provider>` en el nivel superior, con el árbol de componentes completo de la aplicación dentro de él.

Normalmente, no puede usar un componente conectado a menos que esté anidado dentro de un `<Provider>`.

### Creando el Store de Redux

- Esta basado en el patrón de diseño Flux
- Toda la data de la aplicación, se encuentra en una estructura previamente definida.
- Toda la informción se encontrará almacenada en un único lugar llamado STORE.
- El STORE jamas se modifica de forma directa.
- Interacciones de usuario y/o código, dispara acciones que describen qué sucedió
- El valor actual de la información de la aplicación se llama - State
- Un nuevo estado es creado, en base a la combinanción del viejo estado y una acción, por una función llamada Reducer.

Creando el Store de Redux

Para crear un Store necesitamos llamar a la función createStore del paquete de redux pasándole los parámetros del reducer y initialState.

Para conectar un componente a Redux vamos a necesitar importar connect de react-redux, connect va a aceptar dos parámetros:

mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.

## Aplicando Redux a nuesta aplicación

### Creando los reducers

[Este vídeo de ED Team ayuda mucho a entender mejor React con Redux](https://youtu.be/HhtqSwUgP1U)

### Finalizando reducers y eliminar favoritos

El método filter crea un nuevo array con todos los elementos que cumplen una condición.

index.js en actions para saber qué acciones son las que haremos:

```javascript
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

```

index.js en reducers para insertar y eliminar elementos:

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload), //!Es importante tomar en cuenta el ID
      };
    default:
      return state;
  }
};

export default reducer;

```

En CarouselItem.jsx es donde ocurrirán estas acciones:

```javascript
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions'; //*No hace falta llamar a un archivo porque tenemos un index

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration } = props;
	const handleSetFavorite = () => {
		props.setFavorite({
			id, cover, title, year, contentRating, duration,
		});
	};
	const handleDeleteFavorite = (itemId) => {
		props.deleteFavorite(itemId);
	};
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

```

### Debugeando nuestro proyecto (agregando validaciones a nuestro componente card)

Hicimos 2 validaciones, no agregar ni elementos infinitos ni el mismo elemento.

Home.jsx:

```javascript
{
  myList.map((item) =>
    <CarouselItem
      key={item.id}
      {...item}
      isList
    />
  )
}
```

CarouselItem.jsx :

```javascript
const { id, cover, title, year, contentRating, duration, isList } = props;

{/*Pasamos isList en las props y hacemos una validación*/}

{
isList ?
  <img
    className='carousel-item__details--img'
    src={removeIcon}
    alt='Remove Icon'
    onClick={() => handleDeleteFavorite(id)}
  /> :
  <img
    className='carousel-item__details--img'
    src={plusIcon}
    alt='Plus Icon'
    onClick={handleSetFavorite}
  />
}
```

Para evitar repetir un mismo elemento, en index.js:

```javascript
//*Dentro del case de add favorite

const exist = state.myList.find((item) => item.id === action.payload.id);
if (exist) return { ...state };
```

### Crear Formulario de Login

Recordar: Usamos hooks con `useState`.

Para obtener los datos de un formulario;

Login.jsx:

```javascript
import React, { useState } from 'react';

const Login = () => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(form); //*Para que no se haga la acción de enviar formulario
    console.log(form);
  };

  return (
  <form
    className='login__container--form'
    onSubmit={handleSubmit}
  >
    <input
      name='email'
      className='input'
      type='text'
      placeholder='Correo'
      onChange={handleInput}
    />
    <input
      name='passwrod'
      className='input'
      type='password'
      placeholder='Contraseña'
      onChange={handleInput}
    />
  </form>
  );
};
```

### Formulario de Login con Redux

Vamos a mandar nuestra información a nuestro estado con Redux. Aquí simulamos un login.

index.js de actions:

```javascript
export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});
```

Login.jsx:

```javascript
import { loginRequest } from '../actions'; //*No haec falta escribir el index porque ya se entiende que se quiere ese archivo al tener ese nombre

const Login = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault(); //*Para que no se haga la acción de enviar formulario
    props.loginRequest(form);
    props.history.push('/'); //*Redirigimos al usuario al home
  };
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

```

index.js de reducers:

```javascript
case actions.loginRequest:
  return {
    ...state,
    user: action.payload,
  };
```

### Creando un Servicio para Gravatar

Es el avatar de la imagen del header.

Podemos usar gravatar [desde su sitio web](https://es.gravatar.com/) o instalarlo con NPM pero esta **no** es la mejor opción. El paquete de NPM contiene muchas funciones que no vamos a utilizar así que es mejor no instalarlo.

Dentro de 'src' creamos la carpeta 'utils' y dentro creamos el archivo gravatar.js

Lo que sí necesitamos es MD5, `npm i md5 -D`. MD5 es un servicio criptográfico para crear un hash a partir de un e-mail.

[Documentación de Mozilla para el método trim](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) (en resumen, elimina los espacios en blanco).

gravatar.js:

```javascript
import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formatEmail = email.trim().toLowerCase();
  const hash = md5(formatEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};

export default gravatar;

```

### Uso de gravatar en nuestro proyecto

Header.jsx:

```javascript
import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user = {} } = props;
  const hasUser = object.keys(user).length > 0 ; //*object.keys() lo usamos como si fuera un array para poder usar el método length
  return (
    {
      hasUser ?
        <img src={gravatar(user.email)} alt={user.email} /> :
        <img src={userIcon} alt='User pic' />
    }
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);

```

### Validación para LogIn LogOut

Básicamente, la función connect recibe dos parámetros:

1. mapStateToProps
2. mapDispatchToProps

En palabras resumidas, la primera solicita datos del store(la base de datos)
y el segundo envía datos y dispara acciones para interactuar con el store.

Así solamente hay un flujo de datos y todo es mas simple.

[Documentación oficial de Verificación de tipos con PropTypes - React](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

[PropTypes en NPM](https://www.npmjs.com/package/prop-types)

index.js de actions:

```javascript
export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
};

export const logoutRequest = (payload) => ({
  type: actions.logoutRequest,
  payload,
});

```

index.js de reducers:

```javascript
case actions.logoutRequest:
  return {
    ...state,
    user: action.payload,
  };

```

Header.jsx

```javascript
import PropTypes from 'prop-types';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0 ; //*Object.keys() lo usamos como si fuera un array para poder usar el método length

  const handleLogout = () => {
    props.logoutRequest({}); //*Al mandar un objeto vacío, se reinicia el estado y ya no hay usuario
  };

  Header.propTypes = {
    user: PropTypes.object,
  };
};

<div className='header__menu'>
  <div className='header__menu--profile'>
    {
      hasUser ?
        <img src={gravatar(user.email)} alt={user.email} /> :
        <img src={userIcon} alt='User pic' />
    }
    <p>Perfil</p>
  </div>
  <ul>
    {
      hasUser ?
        <li><Link to='/'>{user.name}</Link></li> :
        null
    }
    {
      hasUser ?
        <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li> :
        <li><Link to='/login'>Iniciar sesión</Link></li>
    }
  </ul>
</div>

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

```

### Register

Vamos a usar hooks para los inputs.

Register.jsx:

```javascript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;

```

### Register con Redux

index.js de actions:

```javascript
export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
};
```

index.js en reducers:

```javascript
case actions.registerRequest:
  return {
    ...state,
    user: action.payload,
};
```

Register.jsx:

```javascript
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);

```

### Vista general del player

Creamos el archivo Player.jsx dentro de containers:

```javascript
import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = () => {
  return (
    <div className='Player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button'>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Player;

```

[Estilos Player.scss](https://static.platzi.com/media/tmp/class-files/git/escuela-js/escuela-js-0b8424b25f04a305cf0666a8b91ebf74b9f2140e/src/assets/styles/components/Player.scss)

Agregamos una ruta nueva a App.js:

```javascript
import Player from '../containers/Player';

<Route exact path='/player/:id' component={Player} />
```

Modificamos CarouselItem.jsx

```javascript
import { Link } from 'react-router-dom';

<Link to={`/player/${id}`}>
  {/*Creamos una url por cada elemento que iteramos*/}
  <img
    className='carousel-item__details--img'
    src={playIcon}
    alt='Play Icon'
  />
</Link>
```

### Arreglando la funcionalidad del player

Por medio de las props podemos obtener el id del vídeo.

Regresamos a la pantalla anterior con esto en Plyer.jsx:

```javascript
const Player = (props) => {
  const { id } = props.match.params; //*Esto nos lo manda router
  return (
    <button type='button' onClick={() => props.history.goBack()}>
      Regresar
    </button>
  );
};

export default Player;

```

Agregamos publicPath al output del archivo webpack.config.js:

```javascript
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: '/',
}
```

Y reiniciamos el servidor.

### Terminando de detaller nuestro player

### Validaciones

`npm i classnames -S`

### Validaciones de UI

### Debug con Redux Devtools

Tenemos que descargar e instalar las [Redux DevTools en la Chrome Web Store.](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=es)

En el archivo principal index.js:

```javascript
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, initialState, composeEnhacers);
```
