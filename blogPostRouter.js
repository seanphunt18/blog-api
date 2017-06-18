<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const {BlogPosts} = require('./models');

BlogPosts.create(
	'Not Chapter One of The Hobbit', 'This is a dummy blog post. I thought about entering a full chapter of The Hobbit here, but I chickened out.', 'Sean \'Haven\'t Read The Hobbit Since Middle School\' Hunt', '06/12/2017'
	);
BlogPosts.create(
	'Definitely Not Chapter One of Wuthering Heights', 'You see, I\'ve never been too keen on reading, despite my father\'s best efforts to change that. So when I had to read Wuthering Heights in High School, I was a pretty sad panda.', 'Sean \'Great SAT Reading Score\' Hunt', '06/12/2017'
	);

router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});

router.post('/', jsonParser, (req, res) => {
	const requiredFields = ['id', 'title', 'content', 'author', 'publishDate'];
	for (let i=0; i<requiredFields.length; i++) {
    	const field = requiredFields[i];
    	if (!(field in req.body)) {
     		const message = `Missing \`${field}\` in request body`
      		console.error(message);
      		return res.status(400).send(message);
    	}
  	}
  	const item = BlogPosts.create(req.body.id, req.body.title, req.body.content, req.body.author, req.body.publishDate);
  	res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
	BlogPosts.delete(req.params.id);
	console.log(`Deleted blog post \`${req.params.ID}\``);
	res.status(204).end();
});

router.put('/:id', (req, res) => {
	const requiredFields = ['id', 'title', 'content', 'author', 'publishDate'];
	for (let i=0; i<requiredFields.length; i++) {
    	const field = requiredFields[i];
    	if (!(field in req.body)) {
      		const message = `Missing \`${field}\` in request body`
      		console.error(message);
      		return res.status(400).send(message);
    	}
  	}
  	if (req.params.id !== req.body.id) {
    	const message = (
      	`Request path id (${req.params.id}) and request body id `
      	`(${req.body.id}) must match`);
    	console.error(message);
    	return res.status(400).send(message);
  	}
  	console.log(`Updating blog post \`${req.params.id}\``);
  	const updatedItem = BlogPosts.update({
    	id: req.params.id,
    	title: req.body.title,
    	content: req.body.content,
    	author: req.body.author,
    	publishDate: req.body.publishDate
  	});
  	res.status(204).json(updatedItem);
});

=======
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const {BlogPosts} = require('./models');

BlogPosts.create(
	'abc123', 'Not Chapter One of The Hobbit', 'This is a dummy blog post. I thought about entering a full chapter of The Hobbit here, but I chickened out.', 'Sean \'Haven\'t Read The Hobbit Since Middle School\' Hunt', '06/12/2017'
	);
BlogPosts.create(
	'def345', 'Definitely Not Chapter One of Wuthering Heights', 'You see, I\'ve never been too keen on reading, despite my father\'s best efforts to change that. So when I had to read Wuthering Heights in High School, I was a pretty sad panda.', 'Sean \'Great SAT Reading Score\' Hunt', '06/12/2017'
	);

router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});

router.post('/', jsonParser, (req, res) => {
	const requiredFields = ['id', 'title', 'content', 'author', 'publishDate'];
	for (let i=0; i<requiredFields.length; i++) {
    	const field = requiredFields[i];
    	if (!(field in req.body)) {
     		const message = `Missing \`${field}\` in request body`
      		console.error(message);
      		return res.status(400).send(message);
    	}
  	}
  	const item = BlogPosts.create(req.body.id, req.body.title, req.body.content, req.body.author, req.body.publishDate);
  	res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
	BlogPosts.delete(req.params.id);
	console.log(`Deleted shopping list item \`${req.params.ID}\``);
	res.status(204).end();
});

router.put('/:id', (req, res) => {
	const requiredFields = ['id', 'title', 'content', 'author', 'publishDate'];
	for (let i=0; i<requiredFields.length; i++) {
    	const field = requiredFields[i];
    	if (!(field in req.body)) {
      		const message = `Missing \`${field}\` in request body`
      		console.error(message);
      		return res.status(400).send(message);
    	}
  	}
  	if (req.params.id !== req.body.id) {
    	const message = (
      	`Request path id (${req.params.id}) and request body id `
      	`(${req.body.id}) must match`);
    	console.error(message);
    	return res.status(400).send(message);
  	}
  	console.log(`Updating shopping list item \`${req.params.id}\``);
  	const updatedItem = BlogPosts.update({
    	id: req.params.id,
    	title: req.body.title,
    	content: req.body.content,
    	author: req.body.author,
    	publishDate: req.body.publishDate
  	});
  	res.status(204).json(updatedItem);
});

>>>>>>> 330361a6060c4bf484df1505c1187812555de330
module.exports = router;