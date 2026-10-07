/**
 * Every application path lives here. String literals like '/projects/123' must
 * not appear in components: renaming a section would leave them unfindable.
 */
export const ROUTES = {
  root: '/',
  projects: '/projects',
  project: '/projects/:projectId',
  projectWorkspace: '/projects/:projectId/workspace',
  showcases: '/showcases',
  showcase: '/showcases/:showcaseId',
  profile: '/u/:username',
  signIn: '/sign-in',
  signUp: '/sign-up',
  terms: '/terms',
  privacy: '/privacy',
  guidelines: '/guidelines',
} as const;

type RouteKey = keyof typeof ROUTES;
type PathParams<T extends string> = T extends `${string}:${infer Param}/${infer Rest}`
  ? Param | PathParams<Rest>
  : T extends `${string}:${infer Param}`
    ? Param
    : never;

type StaticRouteKey = {
  [Key in RouteKey]: PathParams<(typeof ROUTES)[Key]> extends never ? Key : never;
}[RouteKey];

export type StaticPath = (typeof ROUTES)[StaticRouteKey];

/**
 * Type-safe parameter interpolation:
 * routeTo('project', { projectId: id }) → '/projects/<id>'
 * Forget a parameter and it will not compile.
 */
export const routeTo = <Key extends RouteKey>(
  key: Key,
  ...params: PathParams<(typeof ROUTES)[Key]> extends never ? [] : [Record<PathParams<(typeof ROUTES)[Key]>, string>]
): string => {
  const [values] = params;

  if (!values) {
    return ROUTES[key];
  }

  return Object.entries<string>(values).reduce<string>(
    (path, [param, value]) => path.replace(`:${param}`, encodeURIComponent(value)),
    ROUTES[key],
  );
};
