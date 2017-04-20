document.addEventListener("DOMContentLoaded", function() {
  var sectionToggle = [].slice.call(document.querySelectorAll('.section-toggle'));

  sectionToggle.forEach(function (node) {
    node.addEventListener('click', function () {
      var parent = this.parentNode.parentNode.parentNode;
      var endpoints = parent.querySelector('.endpoints');

      if (endpoints.classList.contains('hidden')) {
        endpoints.classList.remove('hidden');
      } else {
        endpoints.classList.add('hidden');
      }
    });
  });

  var endpointsHide = [].slice.call(document.querySelectorAll('.hide-description'));

  endpointsHide.forEach(function (node) {
    node.addEventListener('click', function () {
      var parent = this.parentNode.parentNode.parentNode;
      var endpoints = parent.querySelector('.endpoints');
      var descriptions = parent.querySelectorAll('.description');

      endpoints.classList.remove('hidden');

      descriptions.forEach(function (descriptionNode) {
        if (!descriptionNode.classList.contains('hidden')) {
          descriptionNode.classList.add('hidden');
        }
      });
    });
  });

  var descriptionsShow = [].slice.call(document.querySelectorAll('.show-description'));

  descriptionsShow.forEach(function (node) {
    node.addEventListener('click', function () {
      var parent = this.parentNode.parentNode.parentNode;
      var endpoints = parent.querySelector('.endpoints');
      var descriptions = parent.querySelectorAll('.description');

      if (endpoints.classList.contains('hidden')) {
        endpoints.classList.remove('hidden');
      }

      descriptions.forEach(function (descriptionNode) {
        if (descriptionNode.classList.contains('hidden')) {
          descriptionNode.classList.remove('hidden');
        }
      });
    });
  });

  var descriptionsToggle = [].slice.call(document.querySelectorAll('.toggle-description'));

  descriptionsToggle.forEach(function (node) {
    node.addEventListener('click', function () {
      var description = this.parentNode.querySelector('.description');

      if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
      } else {
        description.classList.add('hidden');
      }
    });
  });
});