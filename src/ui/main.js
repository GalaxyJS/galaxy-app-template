export default (Scope) => {
  const view = Scope.import('galaxy/view');

  view.container.node.innerHTML = '';

  view.components({
    'app-welcome': Scope.import('ui/components/app-welcome.component.js')
  });

  view.blueprint([
    {
      tag: 'app-welcome'
    }
  ]);
}
