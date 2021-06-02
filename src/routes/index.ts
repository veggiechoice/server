import { Router } from 'express';
import { AdressRouter } from './adress.routes';
import { PlacesRouter } from './places.routes';
import { ProfileRouter } from './profile.routes';
import { SessionRouter } from './session.routes';
import { UserRouter } from './user.routes';
import { BrandsRouter } from './brands.routes';
import { CategoriesRouter } from './categories.routes';
import { ProductsRoutes } from './products.routes';
import { IngredientRouter } from './ingredients.routes';

const Routes = Router();

Routes.use('/users', UserRouter);
Routes.use('/profile', ProfileRouter);
Routes.use('/auth', SessionRouter);
Routes.use('/adress', AdressRouter);
Routes.use('/places', PlacesRouter);
Routes.use('/brands', BrandsRouter);
Routes.use('/products', ProductsRoutes);
Routes.use('/ingredients', IngredientRouter);

Routes.use('/categories', CategoriesRouter);

export { Routes };
