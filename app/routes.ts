import { type RouteConfig, route, index } from '@react-router/dev/routes';
import { Paths } from './routes.types';

export default [
  index('routes/home.tsx'),
  route(Paths.ABOUT, 'routes/about.tsx'),
  route(Paths.CITY, 'routes/city.tsx'),
  route(Paths.CONTACT, 'routes/contact.tsx'),
  route(Paths.LANDSCAPE, 'routes/landscape.tsx'),
  route(`${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`, 'routes/bw-landscape.tsx'),
  route(`${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`, 'routes/color-landscape.tsx'),
  route(Paths.PRINTS, 'routes/prints.tsx'),
  route(Paths.PROJECTS, 'routes/projects/index.tsx'),
  route(
    `${Paths.PROJECTS}/${Paths.WOMENS_ICE_HOCKEY_CRACOVIA}`,
    'routes/projects/womens-ice-hockey-cracovia.tsx'
  ),
  route(
    `${Paths.PROJECTS}/${Paths.KING_OF_BIEBRZA_RIVER}`,
    'routes/projects/king-of-biebrza-river.tsx'
  ),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
