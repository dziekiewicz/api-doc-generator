document.addEventListener('DOMContentLoaded', () => {
  const sectionToggle = [].slice.call(document.querySelectorAll('.section-toggle'));

  sectionToggle.forEach((node) => {
    node.addEventListener('click', (event) => {
      const parent = event.target.parentNode.parentNode.parentNode;
      const endpoints = parent.querySelector('.endpoints');

      if (endpoints.classList.contains('hidden')) {
        endpoints.classList.remove('hidden');
      } else {
        endpoints.classList.add('hidden');
      }
    });
  });

  const endpointsHide = [].slice.call(document.querySelectorAll('.hide-description'));

  endpointsHide.forEach((node) => {
    node.addEventListener('click', (event) => {
      const parent = event.target.parentNode.parentNode.parentNode;
      const endpoints = parent.querySelector('.endpoints');
      const descriptions = parent.querySelectorAll('.description');

      endpoints.classList.remove('hidden');

      descriptions.forEach((descriptionNode) => {
        if (!descriptionNode.classList.contains('hidden')) {
          descriptionNode.classList.add('hidden');
        }
      });
    });
  });

  const descriptionsShow = [].slice.call(document.querySelectorAll('.show-description'));

  descriptionsShow.forEach((node) => {
    node.addEventListener('click', (event) => {
      const parent = event.target.parentNode.parentNode.parentNode;
      const endpoints = parent.querySelector('.endpoints');
      const descriptions = parent.querySelectorAll('.description');

      if (endpoints.classList.contains('hidden')) {
        endpoints.classList.remove('hidden');
      }

      descriptions.forEach((descriptionNode) => {
        if (descriptionNode.classList.contains('hidden')) {
          descriptionNode.classList.remove('hidden');
        }
      });
    });
  });

  const descriptionsToggle = [].slice.call(document.querySelectorAll('.toggle-description'));

  descriptionsToggle.forEach((node) => {
    node.addEventListener('click', (event) => {
      const description = event.target.parentNode.querySelector('.description');

      if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
      } else {
        description.classList.add('hidden');
      }
    });
  });
});
