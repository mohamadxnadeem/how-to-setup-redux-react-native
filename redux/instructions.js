// How to setup redux for your react app:


//  Step 1: Install Redux using the following command:
//  npm install react-redux

//  Step 2: Inside your react native project create a folder called redux

//  Step 3: Create a new folder inside your redux folder called reducers

//  Step 4: Create 2 files within the reducers foler called:
//  File 1: cartReducer.js
//  File 2: index.js

// To make things easier on you I have created the folder structure and have added the boiler plate template 
//  so you just need to copy the redux folder and add it to your app.

// Step 5:

// After you have copied the folder then you need to make some changes to your app folder


//  Add these imports:

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../redux/store';

// Configure your redux store:

const store = configureStore();

// Wrap your entire app with this redux component:

<ReduxProvider store={store}>
    {/* Your app */}
</ReduxProvider>

//  If you follwed all the instructions to the T 
// and your app is working then redux has been installed successfully