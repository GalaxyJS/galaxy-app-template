import ViewNode = Galaxy.ViewNode;
import Blueprint = Galaxy.Blueprint;

declare namespace Galaxy {

  export type TagName =
    'div'
    | 'nav'
    | 'img'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'input'
    | 'strong'
    | 'table'
    | 'thead'
    | 'tbody'
    | 'tr'
    | 'th'
    | 'td'
    | 'section'
    | 'header'
    | 'footer'
    | string

  export interface AnimationConfig {
    active?: boolean;
    withParent?: boolean;
    timeline?: 'string' | object;
    position?: string | number;
    addTo?: 'string';
    positionInParent?: string | number;
    from?: object;
    to?: object;

  }

  export interface Blueprint {
    _create?: Function;
    _render?: Function;
    _destroy?: Function;
    repeat?: {
      data: string | any;
      as: string
    };
    if?: string | (() => boolean);
    animations?: {
      enter?: Galaxy.AnimationConfig;
      leave?: Galaxy.AnimationConfig;
    };
    tag?: TagName;
    type?: string;
    class?: {
      [key: string]: boolean
    } | string[] | string;
    style?: {
      [key: string]: any
    };
    on?: {
      [key: string]: Function;
    };
    children?: Blueprint | Blueprint[];

    [key: string]: any;
  }

  export class ViewNode {
    node: Node | HTMLElement;
    index: string;

    destroyed: Promise<Galaxy.ViewNode>;

    clean(hasAnimation?: boolean, children?: Galaxy.ViewNode[]): void

    destroy(hasAnimation?: boolean): void
  }

  export interface Route {
    path: string;
    viewports?: {
      main: any,
      [key: string]: any
    };
    hidden?: boolean;
    redirectTo?: string;
  }

  export interface RouterData {
    routes: Route[],
    navs: Route[],
    activeRoute: any,
    activePath: string | null,
    activeModule: any,
    viewports: {
      main: any,
    },
    parameters: object
  }

  export interface RouteTransitionHandler {
    (from: string, to: string, oldRoute: object, newRoute: object): void;
  }

  export class Module {
    scope: Scope;

    init(): void

    start(): void

    destroy(): void
  }
}

declare class Galaxy {
  static boot(mainModule: {
    path: string,
    element: Node
  }): Promise<Galaxy.Module>

  static setupTimeline(name: string, labels: object): void
}

declare class Scope {
  static readonly router?: Galaxy.RouterData;
  static data: object;
  static export: object | Function;

  static import(path: 'galaxy/view' | 'galaxy/router' | string): View | Router | object | Function;

  static importAsText(path: string);
}


declare namespace View {
  export class TimelineControl {
    startKeyframe(timeline: string, delay?: string | number);

    addKeyframe(action: Function, timeline: string, delay?: string | number);
  }
}


declare class View {

  static CREATE_IN_NEXT_FRAME(index: number, action: Function);

  static DESTROY_IN_NEXT_FRAME(index: number, action: Function);

  public container: Galaxy.ViewNode;

  blueprint(structure: Galaxy.Blueprint | Galaxy.Blueprint[]): void

  components(map: { [key: string]: Function }): void

  createNode(blueprint: Blueprint, scopeData: Scope | Object, parent: ViewNode, position: Node | Element | null): ViewNode;

  entering: View.TimelineControl;

  leaving: View.TimelineControl;
}


declare class Router {
  viewports: {
    main: any
    [key: string]: any
  };

  setup(routes: Galaxy.Route[]): void

  start(): void

  onTransition(handler: Galaxy.RouteTransitionHandler): void
}
