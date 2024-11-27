# Desafío Alura Geek

¡Bienvenidos y bienvenidas al desafío de **Alura Geek**! Este proyecto está diseñado para poner a prueba y mejorar tus habilidades de programación, utilizando **JavaScript**, **HTML** y **CSS**. Durante el desafío, se aplicó conceptos avanzados como **programación asíncrona**, **solicitudes HTTP**, **validación de formularios**, **manipulación del DOM** y más.

## Descripción

La aplicación de **Alura Geek** es una plataforma para gestionar productos Geek. Los usuarios pueden agregar productos mediante un formulario, listar los productos en tarjetas dinámicas y eliminar productos de la lista. Todo esto se maneja con una programación moderna y asíncrona para optimizar la experiencia de usuario.

## Diseño en Figma

Puedes ver el diseño del proyecto en Figma a través del siguiente enlace: [Figma - Alura Geek](https://www.figma.com/design/LPmCD64YroO2vHt8DynI1g/AluraGeek---new-(Copy)?node-id=0-1&t=XJdu25KDBf3T2Wls-1).


### Características principales:

- **Formulario de productos**: Permite agregar un producto Geek con nombre, precio y URL de imagen.
- **Validación de formulario**: Asegura que los datos ingresados sean correctos antes de enviarlos.
- **Listado de productos**: Muestra todos los productos añadidos en tarjetas de presentación.
- **Eliminar productos**: Los usuarios pueden eliminar productos de la lista.
- **Responsive Design**: El diseño es completamente responsivo para dispositivos móviles.

## Tecnologías utilizadas

- **HTML**: Para la estructura de la página web.
- **CSS**: Para los estilos y diseño responsivo.
- **JavaScript**: Para la lógica de la aplicación, incluyendo la manipulación del DOM, eventos, y validación de formularios.
- **SweetAlert2**: Para mostrar alertas y notificaciones de manera interactiva.
- **Fetch API**: Para realizar solicitudes HTTP asíncronas a la API de productos (en caso de tener backend).
- **Node.js**: Usado para simular un servidor REST con **json-server**, lo que permite gestionar los productos de forma simulada a través de una API local.
- **json-server**: Herramienta que permite crear rápidamente una API RESTful utilizando un archivo JSON como base de datos.

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/YossecSA/Alura-Geek.git 

2. **Instala las dependencias**:
    ```bash
    npm install

3. **Ejecutar el servidor local**:
    ```bash
    npm run start
    
Este comando iniciará json-server en un servidor local (por defecto en http://localhost:3000) para simular una API RESTful con la que tu aplicación puede interactuar.
