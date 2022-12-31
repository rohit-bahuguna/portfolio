let displayEl = document.querySelector('.project-display');

let projects = [
	{
		background: 'green',
		image: 'images/photography.png',
		heading: 'Photography Portfolio',
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
				span: 'bootstrap',
				used: 'BootStrap'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/HTML---CSS-Mini-Project',
		url2: 'https://rohit-bahuguna.github.io/HTML---CSS-Mini-Project/'
	},
	{
		background: 'blue',
		image: 'images/weather.png',
		heading: 'Weather App',
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
				used: 'React JS'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/weather-app-by-rohit',
		url2: 'https://csb-nw0poz.netlify.app/'
	},
	{
		background: 'pink',
		image: 'images/gameVilla.png',
		heading: 'Game Villa',
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
				used: 'JavaScript'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/JS-Mini-Project-Game-villa.git',
		url2: 'https://game-villa-by-rohit-bahuguna.netlify.app/'
	},
	{
		background: 'orange',
		image: 'images/api.png',
		heading: 'E-commerce API',
		tech: [
			{
				span: 'node',
				used: 'Node JS'
			},
			{
				span: 'express',
				used: 'Express'
			},

			{
				span: 'mongo',
				used: 'Mongo DB'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/myStore-Backend.git',
		url2: 'https://mystore-api.up.railway.app/api/v1/product'
	},
	{
		background: 'red',
		image: 'images/myStore.png',
		heading: 'My Store (E-commerce App)',
		tech: [
			{
				span: 'react',
				used: 'React JS'
			},
			{
				span: 'redux',
				used: 'Redux'
			},

			{
				span: 'bootstrap',
				used: 'BootStrap'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/mystore.git',
		url2: 'https://my-store-by-rohitbahuguna.netlify.app'
	},
	{
		background: 'green',
		image: 'images/DoYouKnowMe.jpeg',
		heading: 'Do you know me Quiz CLI App (Mark 1)',
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
		image: 'images/fandomQuiz.png',
		heading: 'CLI Fandom Quiz app (Mark2)',
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
		image: 'images/minions.jpg',
		heading: 'minions speak (Mark6)',
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
		url1: 'https://github.com/rohit-bahuguna/MinionTalk.git',
		url2: 'https://minion-talk-by-rohit-bahuguna.netlify.app/'
	},
	{
		background: 'pink',
		image: 'images/minions.avif',
		heading: ' pending (Mark7)',
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
		image: 'images/knowYourEmoji.jpg',
		heading: 'know your emoji (Mark8)',
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
		image: 'images/food.jpeg',
		heading: 'food Recommendations (mark9)',
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
		url1: 'https://github.com/rohit-bahuguna/food-Recommendations.git',
		url2: 'https://food-recommendation-app-by-rohit.netlify.app'
	},
	{
		background: 'green',
		image: 'images/cash-register.jpeg',
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
				span: 'react',
				used: 'React'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Cash-Register-App.git',
		url2: 'https://cash-register-by-rohit-bahuguna.netlify.app/'
	},
	{
		background: 'pink',
		image: 'images/lucky.png',
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
				span: 'react',
				used: 'React'
			}
		],
		url1: 'https://github.com/rohit-bahuguna/Is-Your-BirthDay-Lucky-.git',
		url2: 'https://is-your-birthday-lucky-by-rohit.netlify.app/'
	},
	{
		background: 'blue',
		image: 'images/triangles.png',
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
		image: 'images/birthday.jpg',
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
		image: 'images/profitloss.jpg',
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
	}
];
let html = '';

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
