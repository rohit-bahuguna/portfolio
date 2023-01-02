let blogEl = document.querySelector('.blog-display');
let detailedBlog = document.querySelector('.detailedBlog');

const blogDetails = [
	{
		id: 01,
		title:
			'An Introduction to Full Stack Development: From Front-End to Back-End',
		image: 'images/palindrome.jpg',
		text: `Introduction: <br/> <br/>

Full stack development refers to the development of both the front-end and back-end aspects of a web application. A full stack developer is proficient in all stages of web development, from designing the user interface to implementing and maintaining the back-end infrastructure. In this article, we'll explore the various components of full stack development and the skills required to become a full stack developer. <br/><br/>

Front-End Development:  <br/> <br/>

The front-end, or client-side, of a web application is responsible for the visual design and interactive elements that users interact with. This includes the layout, styling, and behavior of the website. Front-end developers use languages such as HTML, CSS, and JavaScript to build and style the user interface.<br/><br/>

HTML : <br/> <br/>
HTML (HyperText Markup Language) is used to structure and organize the content of a web page. It defines the various elements on the page, such as headings, paragraphs, and lists.<br/><br/>

CSS : <br/> <br/>
CSS (Cascading Style Sheets) is used to add style and formatting to a web page. It allows developers to control the look and feel of a website, including the colors, fonts, and layout.<br/><br/>

Javascript : <br/> <br/>
JavaScript is a programming language that is used to add interactive elements to a website. It allows developers to create dynamic effects, such as animations and form validation.<br/><br/>

In addition to these core technologies, front-end developers may also use libraries and frameworks to speed up development and add additional functionality. Some popular options include Bootstrap, React, and Angular.<br/><br/>

Back-End Development:<br/> <br/>

The back-end, or server-side, of a web application is responsible for the underlying infrastructure and logic that powers the front-end. This includes managing data storage, processing user requests, and handling server-side logic. Back-end developers use languages such as Python, Ruby, and Java to build and maintain the back-end of a web application.<br/><br/>

One important aspect of back-end development is the use of databases to store and retrieve data. Common database technologies include MySQL, PostgreSQL, and MongoDB. Back-end developers must be proficient in writing queries to interact with these databases and retrieve the necessary data for the front-end.<br/><br/>

In addition to server-side languages and databases, back-end developers may also use frameworks such as Django, Rails, and Spring to streamline development and provide additional functionality.<br/><br/>

Full Stack Development:<br/><br/>

Full stack development involves both front-end and back-end development skills, as well as an understanding of the entire web development process. Full stack developers are able to design and build a complete web application, from the initial prototype to the final product.<br/><br/>

To become a full stack developer, it is important to have a solid foundation in front-end technologies such as HTML, CSS, and JavaScript, as well as back-end languages such as Python, Ruby, or Java. In addition, full stack developers should have a strong understanding of database design and management, as well as experience with version control systems such as Git.<br/><br/>

Conclusion:<br/><br/>

Full stack development is a challenging but rewarding field that allows developers to work on all aspects of a web application. With a combination of front-end and back-end skills, full stack developers are able to create dynamic and functional web applications that provide a seamless user experience. Whether you're a beginner looking to enter the field or an experienced developer looking to expand your skill set, full stack development is an exciting and in-demand field with plenty of opportunities for growth and advancement.<br/><br/>`
	},
	{
		id: 03,
		title:
			'An Introduction to the MERN Stack: A Powerful Full Stack Development Toolkit and The Benefits ',
		image: 'images/palindrome.jpg',
		text: `Introduction:<br/><br/>

The MERN stack is a popular full stack development toolkit used for building web applications. It consists of four technologies: MongoDB, Express, React, and Node.js. In this article, we'll explore each component of the MERN stack and how they work together to create powerful web applications.<br/><br/>

MongoDB:<br/><br/>

MongoDB is a NoSQL database used for storing and retrieving data. It is a popular choice for modern web applications due to its flexibility and scalability. Unlike traditional SQL databases, which use tables and rows to store data, MongoDB uses a JSON-like format called BSON (Binary JSON) to store data in collections. This allows developers to store data in a more flexible and intuitive way, making it easier to work with large and complex datasets.<br/><br/>

Express:<br/><br/>

Express is a web application framework for Node.js. It is used to build the back-end of web applications and provides a set of tools and APIs for handling server-side logic. Express makes it easy to create routes and handle HTTP requests, as well as integrate with other middleware and libraries.<br/><br/>

React:<br/><br/>

React is a JavaScript library for building user interfaces. It is used to create reusable components that can be easily rendered and updated in response to user interactions or changes in data. React uses a virtual DOM (Document Object Model) to optimize performance and minimize the number of DOM manipulations required to update the UI.<br/><br/>

Node.js:<br/><br/>

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, making it possible to build web applications using only JavaScript. Node.js is known for its high performance and ability to handle large amounts of concurrent connections, making it a popular choice for building real-time applications.<br/><br/>

How the MERN Stack Works:<br/><br/>

The MERN stack is a full stack development toolkit that allows developers to build web applications using a single language (JavaScript) and a set of powerful frameworks and libraries. The front-end of the application is built using React, which handles the UI and user interactions. The back-end is built using Node.js and Express, which handle server-side logic and data storage using MongoDB.<br/><br/>

One of the main benefits of the MERN stack is that it allows for seamless communication between the front-end and back-end of the application. Since both the client and server sides are built using JavaScript, it is easy to pass data and trigger actions between the two. This makes it possible to build dynamic and interactive web applications that can handle a wide range of functionality.<br/><br/>

The Benefits : <br/><br/>

Single Language:<br/><br/>

One of the main benefits of the MERN stack is that it allows developers to use a single language (JavaScript) throughout the entire development process. This can be a major advantage for developers who are familiar with JavaScript, as it reduces the learning curve and makes it easier to switch between front-end and back-end tasks. It also makes it easier for teams to collaborate, as everyone is using the same language.<br/><br/>

Flexible Data Storage:<br/><br/>

MongoDB is a NoSQL database that stores data in a JSON-like format called BSON. This allows developers to store data in a more flexible and intuitive way, making it easier to work with large and complex datasets. MongoDB is also highly scalable, making it a good choice for applications that are expected to grow over time.<br/><br/>

Powerful Back-End Tools:<br/><br/>

Express and Node.js are powerful tools for building the back-end of a web application. Express provides a set of APIs and middleware for handling server-side logic, while Node.js is known for its high performance and ability to handle large amounts of concurrent connections. Together, these tools make it easy to build and maintain the back-end of a web application.<br/><br/>






Conclusion:<br/><br/>

The MERN stack is a powerful full stack development toolkit that allows developers to build web applications using a single language and a set of proven frameworks and libraries. By using React for the front-end, Express and Node.js for the back-end, and MongoDB for data storage, developers can create dynamic and scalable web applications that provide a seamless user experience. Whether you're a beginner looking to enter the field or an experienced developer looking to expand your skill set, the MERN stack is a valuable tool to have in your toolkit.<br/><br/>




`
	},
	{
		id: 03,
		title:
			'An Introduction to JavaScript: The Popular Programming Language for Web Development',
		image: 'images/palindrome.jpg',
		text: `

Introduction:<br/><br/>

JavaScript is a popular programming language that is widely used for building web applications. It is a powerful and flexible language that is used to add interactivity and dynamic behavior to websites. In this article, we'll explore the basics of JavaScript and how it is used in web development.<br/><br/>

Basics of JavaScript:<br/><br/>

JavaScript is a high-level, interpreted programming language that is commonly used to build web applications. It is a dynamic and weakly typed language, which means that variables do not have a fixed data type and can hold different types of data at different times. This allows developers to write code quickly and easily, but can also lead to potential issues if the code is not carefully written.<br/><br/>

JavaScript is often used in conjunction with HTML and CSS to build the front-end of a web application. It is used to add interactivity and dynamic behavior to a website, such as form validation, animations, and asynchronous data loading.<br/><br/>

JavaScript is also used on the back-end of web applications, thanks to the popularity of Node.js. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side. This makes it possible to build web applications using only JavaScript, from the front-end to the back-end.<br/><br/>

Uses of JavaScript:<br/><br/>

JavaScript is a versatile language that is used in a variety of contexts in web development. Some common uses of JavaScript include:<br/><br/>


Mobile app development: <br/><br/>JavaScript can be used to build native mobile apps using frameworks such as React Native. This allows developers to build apps that run natively on iOS and Android using a single codebase.<br/><br/>

Game development:<br/><br/> JavaScript can be used to build games using libraries such as Phaser. This allows developers to create interactive and engaging games that can be played in a web browser.<br/><br/>

Front-End Technologies:<br/><br/>

The front-end of a web application is responsible for the visual design and interactive elements that users interact with. There are a number of frameworks and libraries that are commonly used in front-end development, including:<br/><br/>

React:<br/><br/> React is a popular library for building user interfaces. It allows developers to create reusable components that can be easily rendered and updated in response to user interactions or changes in data.<br/><br/>

Angular:<br/><br/> Angular is a comprehensive framework for building single-page applications (SPAs). It provides a set of tools and libraries for building the front-end of a web application, including a template system, a reactive programming model, and a dependency injection system.<br/><br/>

Vue.js: Vue.js is a progressive framework for building user interfaces. It is designed to be easy to learn and flexible, making it a good choice for smaller projects or for developers who are new to front-end development.<br/><br/>

Back-End Technologies:<br/><br/>

The back-end of a web application is responsible for the underlying infrastructure and logic that powers the front-end. There are a number of frameworks and libraries that are commonly used in back-end development, including:<br/><br/>

Node.js: <br/><br/>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, making it possible to build web applications using only JavaScript. Node.js is known for its high performance and ability to handle large amounts of concurrent connections, making it a popular choice for building real-time applications.<br/><br/>

Express:<br/><br/> Express is a web application framework for Node.js. It is used to build the back-end of web applications and provides a set of tools and APIs for handling server-side logic.<br/><br/>




Conclusion:<br/><br/>

JavaScript is a powerful and popular programming language that is widely used in web development. It is used to build the front-end and back-end of web applications, as well as mobile apps and games. Whether you're a beginner looking to enter the field or an experienced developer looking to expand your skill set, learning JavaScript is a valuable investment that will open up a wide range of opportunities in the tech industry.<br/><br/>



`
	}
];

let html = '';

for (let item of blogDetails) {
	html += `
  <a 
  ><div class="blog-container">
    <h2>
    ${item.title}
    </h2>
    <img src="${item.image}" alt="" />
    <p>${item.text}</p></div
></a>
`;
}

blogEl.innerHTML = html;
