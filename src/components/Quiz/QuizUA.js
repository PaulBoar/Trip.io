import React, { useState } from 'react';
import { quiz } from './QuizData';

import classes from './QuizUA.module.css';

function Quiz() {
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [showResult, setShowResult] = useState(false);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
	const [result, setResult] = useState({
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
	});

	const { questions } = quiz;
	const { question, choices, correctAnswer } = questions[activeQuestion];

	const nextQuestionHandler = () => {
		setSelectedAnswerIndex(null);
		setResult((prev) =>
			selectedAnswer
				? {
						...prev,
						score: prev.score + 5,
						correctAnswers: prev.correctAnswers + 1,
				  }
				: { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
		);

		if (activeQuestion !== questions.length - 1) {
			setActiveQuestion((prev) => prev + 1);
		} else {
			setShowResult(true);
			setActiveQuestion(0);
		}
	};

	const selectedAnswerHandler = (answer, index) => {
		setSelectedAnswerIndex(index);
		if (answer === correctAnswer) {
			setSelectedAnswer(true);
		} else {
			setSelectedAnswer(false);
		}
	};

	const resetQuizHanlder = () => {
		setSelectedAnswerIndex(null);
		setActiveQuestion(0);
		setSelectedAnswer('');
		setShowResult(false);
		setResult({
			score: 0,
			correctAnswers: 0,
			wrongAnswers: 0,
		});
	};

	const quizContent = (
		<>
			<div>
				<span className={classes['active-questio-no']}>
					0{activeQuestion + 1}
				</span>
				/<span className={classes['total-questions']}>0{questions.length}</span>
			</div>
			<h3>{question}</h3>
			<ul>
				{choices.map((answer, index) => (
					<li
						onClick={() => selectedAnswerHandler(answer, index)}
						key={answer}
						className={
							selectedAnswerIndex === index ? classes['selected-answer'] : null
						}>
						{answer}
					</li>
				))}
			</ul>
			<div className={classes['quiz-btn']}>
				<button onClick={nextQuestionHandler}>Next</button>
			</div>
		</>
	);

	let resultTitle;
	result.correctAnswers >= 3
		? (resultTitle = 'Congratulations! 😎')
		: (resultTitle = 'You shoud visit Ukraine 😉');

	const quizResult = (
		<div className={classes.result}>
			<h3>{resultTitle}</h3>
			<p>
				Total Questions: <span>{questions.length}</span>
			</p>
			<p>
				Total score: <span>{result.score}</span>
			</p>
			<p>
				Correct Answers: <span>{result.correctAnswers}</span>
			</p>
			<p>
				Wrong Answers: <span>{result.wrongAnswers}</span>
			</p>
			<div className={classes['quiz-btn']}>
				<button onClick={resetQuizHanlder}>Try Again</button>
			</div>
		</div>
	);

	return (
		<div className={classes['quiz-container']}>
			{!showResult ? quizContent : quizResult}
		</div>
	);
}

export default Quiz;
