import { fetchProjects } from './data.js';
let displayEl = document.querySelector('.project-display');

window.addEventListener('load', async () => {
	const projects = await fetchProjects();

	projects.map((value, index) => {
		let project = `
    <div class="row-elements ${value.background}">
        <div class="image">
          <img src="${value.image}" alt="Stock profit loss wallpaper" />
        </div>
        <div class="about">
          <h3>${value.heading}</h3>
          <div class="tech-stack">
            <span class="span-${value.tech[0].span}">${value.tech[0]
			.used}</span>
            <span class="span-${value.tech[1].span}">${value.tech[1]
			.used}</span>
            <span class="span-${value.tech[2].span}">${value.tech[2]
			.used}</span>

          </div>
          <div class="code-buttons display">
            <a
              href="${value.url1}"
              target="_blank"
              >Source code</a
            >
            <a
              href="${value.url2}"
              target="_blank"
              >live project</a
            >
          </div>
        </div>
    </div>
`;
		displayEl.insertAdjacentHTML('beforeend', project);
	});
});
