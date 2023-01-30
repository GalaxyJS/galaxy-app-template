Scope.export = function (componentScope, blueprint, view) {
  const fadeUp = {
    enter: {
      timeline: 'welcome',
      position: '-=.5',
      from: {
        y: '20px',
        opacity: 0
      },
      to: {
        x: 0,
        y: 0,
        opacity: 1,
        duration: .7,
        ease: 'power1.out'
      }
    }
  };

  return {
    tag: 'main',
    children: [
      {
        animations: fadeUp,
        tag: 'h1',
        class: 'main-title',
        text: 'Hello World!'
      },
      {
        animations: fadeUp,
        tag: 'h3',
        class: 'second-title',
        text: 'Welcome to GalaxyJS App Template'
      },
      {
        animations: fadeUp,
        tag: 'p',
        html: 'To learn more about GalaxyJS go to <a href="https://galaxyjs.github.io/learn">Official Doc</a>'
      },
      {
        animations: fadeUp,
        class: 'message',
        tag: 'p',
        html: 'Remove this welcome page by replacing <code>{ tag: "galaxy-welcome" } </code> in <code>main.js</code> with your own code.',
      }
    ]
  }
}
