let displayEl = document.querySelector('.project-display');
let projects = [
	{
		background: 'green',
		image: 'images/maths quiz.jpg',
		heading: 'Maths Quiz CLI App (Mark 1)',
		tech: [
			{
				span: 'js',
				used: 'Javascript'
			},
			{
				span: '',
				used: ''
			},
			{
				span: '',
				used: ''
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'blue',
		image: 'images/HTML quiz.jpg',
		heading: 'HTML Quiz CLI app (Mark2)',
		tech: [
			{
				span: 'js',
				used: 'Javascript'
			},
			{
				span: '',
				used: ''
			},
			{
				span: '',
				used: ''
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'green',
		image: 'images/groot.avif',
		heading: 'Groot Translator (Mark6)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'js',
				used: 'Javascript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'pink',
		image: 'images/minions.avif',
		heading: 'Let Banana Talks (Mark7)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'js',
				used: 'Javascript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'orange',
		image: 'images/emoji.avif',
		heading: 'Emoji Descriptor (Mark8)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'react',
				used: 'React'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'pink',
		image: 'images/movie.jpg',
		heading: 'My Movie Recommendations (mark9)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'react',
				used: 'React'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'green',
		image: 'images/cash register.jpg',
		heading: 'Cash Register App (Mark10)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'js',
				used: 'Javascript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'pink',
		image: 'images/lucky birthday.jpg',
		heading: 'Is Your Birthday Lucky? (Mark11)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'js',
				used: 'Javascript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'blue',
		image: 'images/fun triangles.jpg',
		heading: 'Lets have Fun with Triangles (Mark12)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'js',
				used: 'Javascript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'orange',
		image: 'images/palindrome.jpg',
		heading: 'Is Your Birthday Palindrome? (Mark13)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'js',
				used: 'Javascript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'blue',
		image: 'images/profit loss.jpg',
		heading: 'Check out your Profit/Loss (Mark14)',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'js',
				used: 'Javascript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	},
	{
		background: 'orange',
		image: 'images/color scheme generator.png',
		heading: 'Color Scheme Generator',
		tech: [
			{
				span: 'html',
				used: 'HTML'
			},
			{
				span: 'css',
				used: 'CSS'
			},
			{
				span: 'js',
				used: 'Javascript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Do-you-know-me-CLI-quiz.git',
		url2: 'https://replit.com/@rohitbahuguna2/Do-you-know-me-CLI-quiz?v=1'
	}
];
let html = '';

projects.forEach(value => {
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
	displayEl.insertAdjacentHTML('afterbegin', project);
});
