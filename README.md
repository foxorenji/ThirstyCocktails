# Thristy Cocktails

## Introduction

**Thirsty Cocktails** is a software project designed to solve problems related to drink & cocktail discovery and preparation. It is built using Angular and Tailwind.js and follows the Model-View-ViewModel (MVVM) design pattern.


## Features

- **Alphabetical List**: The user is able to shift through the drinks/cocktails by moving between the alphabet through arrows on the top-right of the page.
- **Search**: The user is able to search any drink/cocktail by name.
- **Categorization**: A user is able to view cocktails based on their given categories.

## Structure
The project consists of different pages: Landing Page, Home Page and Details Page. The bulk of the logic is in the homepage, even though most of the logic has been moved to its components.

Most of the functionality can be found in the services, that are responsible for:

- **Theme** : Switching between dark - light mode, and setting the theme upon refresh.
- **Storage** : Storing theme preferences in localStorage.
- **Data** : Used to communicate with the BE, in our case CocktailDB.

Some animations and sounds have also been developed and can be found while using the application. Some on them are the sliding theme button and the sound effect when clicking the button on the landing page.

Visual elements are from FontAwesome.
