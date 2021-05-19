# Pokémon Finder

## CONTENIDO

- Installation
- Starting the project
- Using the page
- Design Decisions

## INSTALACION

Antes de iniciar la instalacion es necesario tener instalado los siguientes sofwares:

- Node.JS

  - Version: v10.16.3 (or higher)
  - Instalacion: https://nodejs.org/es/download/

- NPM

  - Version: v6.14.5 (or higher)
  - Instalacion: se instala junto con Node.js

- Vue

  - Version: 4.5.16 (or higher)
  - Instalacion: "npm install -g @vue/cli".

Una vez instalados todos los requerimientos solo basta con ejecutar "NPM i" en un terminal en la carpeta del proyecto.

## INICIAR EL PROYECTO

Para iniciar el proyecto se debe ejecutar el comando "NPM run serve" en un terminal dentro de la carpeta del proyecto

## LA PAGINA

Cuando ya se inició el proyecto en la web "localhost:8080" se vera la siguiente página:

![login](https://github.com/mariano9478/ensolvers/blob/mainhttps://github.com/mariano9478/Ixpandit/blob/main/src/assets/readme.jpg)

Lo que nos permite la página es buscar Pokémons usando un input text con auto completado. Una vez que se hace click en el boto "search" aparecerá en la sección "Resultado de la búsqueda" la imagen del Pokémon y su nombre. Cuando se realicen más búsquedas se mostrarán todos los Pokémons anteriormente buscados en la sección "Historial" con un máximo de 10.

## DESICIONES

Al momento de iniciar el proyecto busque hacerlo de la manera más rápida, eficiente y ágil. Es por esto que utilice Vue.js la cual permite crear webs de forma dinámica y manejar las llamadas a la api y los datos de manera sencilla. La mayor duda que tuve fue sobre el punto que dice "Como mínimo se tiene que poder buscar Pokémons por nombre parcial" porque después de leer la documentación, la api solo permite hacer búsquedas por nombres completos. Entonces la única forma de poder buscar por nombres incompletos era comparar el input del usuario con la lista de Pokémons para filtrar los que contengan la cadena de caracteres que el usuario ingreso y a partir de eso realizar una búsqueda por esos Pokémons. después de la entrevista me di cuenta de que para Ixpandit era muy importante la experiencia del usuario y hacer la búsqueda de esta manera no me parecía lo más cómodo por lo que opte por hacer un selector de Pokémons en el cual se puede buscar. Es decir, cuando el usuario escribe "Pika" se mostrará en un select todos los Pokémons que contengan "Pika" en su nombre haciendo más fácil y rápido buscar el Pokémon que se quiere.

Para hacer los test unitarios use Jest, aunque solo hay una función lógica en el proyecto. Esta es la encargada de buscar la lista de Pokémons para llenar el select. Esta es una función recursiva que solicita batches de 100 hasta completar el total de Pokémons. Lo hice de esta manera porque no se si pueden salir más Pokémons a futuro o eliminarse. además solicitar 1000 records hacia muy lenta la petición.
