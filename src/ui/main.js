import AppWelcome from './components/app-welcome.component.js';

export default (Scope) => {
  const view = Scope.useView();

  view.container.node.innerHTML = '';

  view.components({
    'app-welcome': AppWelcome
  });

  view.blueprint([
    {
      tag: 'app-welcome'
    }
  ]);
}
