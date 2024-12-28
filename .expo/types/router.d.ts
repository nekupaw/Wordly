/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/home/add`; params?: Router.UnknownInputParams; } | { pathname: `/home/lessons`; params?: Router.UnknownInputParams; } | { pathname: `/lesson/[id]/overview`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/lesson/[id]/exercises/flashcards`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/home/add`; params?: Router.UnknownOutputParams; } | { pathname: `/home/lessons`; params?: Router.UnknownOutputParams; } | { pathname: `/lesson/[id]/overview`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/lesson/[id]/exercises/flashcards`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/home/add${`?${string}` | `#${string}` | ''}` | `/home/lessons${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/home/add`; params?: Router.UnknownInputParams; } | { pathname: `/home/lessons`; params?: Router.UnknownInputParams; } | `/lesson/${Router.SingleRoutePart<T>}/overview` | `/lesson/${Router.SingleRoutePart<T>}/exercises/flashcards` | { pathname: `/lesson/[id]/overview`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/lesson/[id]/exercises/flashcards`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
