function NavbarHighlighter(data) {
  this.links = data.links;
  this.navBar = data.navBar;
  this.className = data.className;
  this.actionName = data.actionName;
  this.controllerName = data.controllerName;
  this.actionDataAttribute = data.controllerDataAttribute;
  this.controllerDataAttribute = data.controllerDataAttribute;
}

NavbarHighlighter.prototype.getControllerSelector = function() {
  return '[data-controller=' + this.controllerName + ']';
};

NavbarHighlighter.prototype.getActionSelector = function() {
  return '[data-action=' + this.actionName + ']';
};

NavbarHighlighter.prototype.highlight = function() {
  this.links.removeClass(this.className);
  $(this.getControllerSelector() + this.getActionSelector()).addClass(this.className);
};

$(document).ready(function(){
  var data = {
    links: $('.primary-link'),
    navBar: $('[data-navbar=highlight]'),
    className: 'active-link',
    actionName: $('meta[name=action]').attr('content'),
    controllerName: $('meta[name=controller]').attr('content'),
    actionDataAttribute: 'action',
    controllerDataAttribute: 'controller'
  },

  linkHighlighter = new NavbarHighlighter(data);
  linkHighlighter.highlight();
});
