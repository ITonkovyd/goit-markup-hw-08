const buttons = document.querySelectorAll('.buttons');
const projects = document.querySelectorAll('.project-item');

function clearSelectButton() {
  buttons.forEach(button => button.classList.remove('active-button'));
}

buttons.forEach(list => {
  list.addEventListener('click', e => {
    const typeOfProject = e.target.classList.value
      .split(' ')
      .find(className => className.includes('Button'))
      .replace('Button', '');

    clearSelectButton();
    e.target.classList.add('active-button');

    if (e.target.classList.value.includes('showAllButton')) {
      showAll();
    } else {
      filterProjects(typeOfProject);
    }
  });
});

function filterProjects(typeOfProject) {
  projects.forEach(project => {
    if (!project.classList.value.includes(typeOfProject)) {
      project.classList.add('isFiltered');
    } else {
      project.classList.remove('isFiltered');
    }
  });
}

function showAll() {
  projects.forEach(project => {
    project.classList.remove('isFiltered');
  });
}
