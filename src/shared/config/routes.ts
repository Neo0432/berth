/**
 * Every application path lives here. String literals like '/projects/123' must
 * not appear in components: renaming a section would leave them unfindable.
 */
export const ROUTES = {
  home: '/',
  feed: '/feed',
  project: '/projects/:projectId',
  projectWorkspace: '/projects/:projectId/workspace',
  profile: '/u/:username',
  signIn: '/sign-in',
  signUp: '/sign-up',
  notFound: '*',
} as const;

type RouteKey = keyof typeof ROUTES;
type PathParams<T extends string> = T extends `${string}:${infer Param}/${infer Rest}`
  ? Param | PathParams<Rest>
  : T extends `${string}:${infer Param}`
    ? Param
    : never;

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
