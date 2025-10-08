const router = require('express').Router();
const QuizController = require('../controllers/quizController');

router.post('/', QuizController.createQuiz);
router.get('/', QuizController.getAllQuizzes);
router.get('/:id', QuizController.getQuizById);
router.patch('/:id', QuizController.updateQuiz);
router.delete('/:id', QuizController.deleteQuiz);

module.exports = router;
