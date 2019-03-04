export interface RouteTableInterface {
    transportName: String;
    routes: Route[];
}

export interface Route {
    routeName: String;
    routeStops: String;
}
