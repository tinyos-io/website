// in src/App.js
import React, { Component } from 'react';

import { Admin, Resource, ListGuesser } from 'react-admin';

import shop from './shop';
import configuration from './configuration';
import link from './link';
import product from './product';
import action from './action';
import task from './task'
import report from './report'
import cms from './cms'
import cmsshop from './cmsshop'

import authProvider from '../providers/authProvider';
import dataProvider from '../providers/dataProvider';
import i18nProvider from '../providers/i18nProvider';


const MainApp = () => (
    <Admin

        authProvider={authProvider} 
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}>

        <Resource options={{ label: 'Produits' }} name="product" {...product} />
        <Resource options={{ label: 'Boutiques' }} name="cms" {...cms} />
        <Resource options={{ label: 'Associations' }} name="cmsshop" {...cmsshop} />
        <Resource options={{ label: 'Catégories' }} name="shop" {...shop} />
        <Resource options={{ label: 'Sites' }} name="link" {...link} />
        <Resource options={{ label: 'Filtres' }} name="action" {...action} />
        <Resource options={{ label: 'Notifications' }} name="report" {...report} />
        <Resource options={{ label: 'Tâches Serveur' }} name="task" {...task} />
        <Resource options={{ label: 'Paramètres' }} name="configuration" {...configuration} />

    </Admin>
);


export default MainApp;