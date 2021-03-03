enum HomeRoutes {
  home = 'home',
  service = 'service',
  about = 'about',
  contact = 'contact',
}

export type AirlineRoutes = typeof AirlineRoutes;
export const AirlineRoutes = {
  ...HomeRoutes
};
