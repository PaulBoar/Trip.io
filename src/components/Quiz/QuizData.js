export const quiz = {
 topic: 'Ukraine',
 level: 'Beginner',
 totalQuestions: 4,
 perQuestionScore: 5,
 questions: [
   {
     question:
       'Ukraine is often referred to by which nickname?',
     choices: ['The golden vale of Europe', 'The basket case of Europe', 'The bread basket of Europe', 'The cabbage patch of Europe'],
     type: 'MCQs',
     correctAnswer: 'The bread basket of Europe',
   },
   {
     question:
       `What is Ukraine's currency called? `,
     choices: ['Hryvna', 'Ukrainian ruble', 'Ukrainian zloty', 'None of the above'],
     type: 'MCQs',
     correctAnswer: 'Hryvna',
   },
   {
     question:
       `Ukraine's Chornobyl power plant became the site of one of the world's worst nuclear disasters. To limit it's impact, a special "exlusion zone" has been created. What is it's radius?`,
     choices: [
       '15 km',
       '30 km',
       '80 km',
       '300 km',
     ],
     type: 'MCQs',
     correctAnswer: '30 km',
   },
   {
     question: `What is Kyiv's Arsenalaya subway station's unique claim to fame?`,
     choices: [`It has the world's longest escalator`, 'It is the deepest subway station in the world.', 'It was the first subway station in the world to be designed with easy access for the disabled.', 'It is the only station in the world to be heated by an underground hot spring.'],
     type: 'MCQs',
     correctAnswer: 'It is the deepest subway station in the world.',
   },
 ],
}