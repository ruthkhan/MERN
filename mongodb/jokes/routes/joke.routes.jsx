const JokeController = require('../controllers/joke.controller.jsx');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/random', JokeController.findRandomJoke);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}
