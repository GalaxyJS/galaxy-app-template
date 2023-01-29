/** @type Galaxy.View */
const view = Scope.import('galaxy/view');

view.container.node.innerHTML = '';
view.components({
  'galaxy-welcome': Scope.import('ui/components/welcome.component.js')
})
view.blueprint([
  {
    tag: 'galaxy-welcome'
  }
]);
