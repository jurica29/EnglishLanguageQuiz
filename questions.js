//Variable which contains an array consisted of multiple objects where the questions and answers are stored// 
//These arrays are using boolean method correct/false for determining the correct and false answers//
var questions = [
    {
        question: 'Who was William Shakespeare?',
        answersArray: [
            { answer: 'a writer', correct: true },  // Correct
            { answer: 'a linguist', correct: false },
            { answer: 'a teacher', correct: false },
            { answer: 'none of these', correct: false }]
    },

    {
        question: 'Which of these words is not a verb?',
        answersArray: [
            { answer: 'ability', correct: true }, // Correct
            { answer: 'deterge', correct: false },
            { answer: 'fly', correct: false },
            { answer: 'clean', correct: false }]
    },

    {
        question: 'Which of these countries is not an English speaking one?',
        answersArray: [
            { answer: 'DR Congo', correct: true },  // Correct
            { answer: 'Dominica', correct: false },
            { answer: 'Grenada', correct: false },
            { answer: 'Belize', correct: false }]
    },

    {
        question: 'Which of these statements is incorrect?',
        answersArray: [
            { answer: 'John is been speaking English.', correct: true },  // Correct
            { answer: 'Matt is a good learner.', correct: false },
            { answer: 'Jack likes football.', correct: false },
            { answer: 'Mick has been doing well.', correct: false }]
    },

    {
        question: 'What is one of the most famous online dictionaries?',
        answersArray: [
            { answer: 'Merriam Webster', correct: true },  // Correct
            { answer: 'Berriam Bebster', correct: false },
            { answer: 'Ferriam Merster', correct: false },
            { answer: 'Serriam Werster', correct: false }]
    },

    {
        question: 'Finish this proverb: Actions speak...',
        answersArray: [
            { answer: 'louder than words', correct: true },  // Correct
            { answer: 'lower than words', correct: false },
            { answer: 'never before words', correct: false },
            { answer: 'before words', correct: false }]
    },

    {
        question: 'Which of these is past perfect simple tense?',
        answersArray: [
            { answer: 'had worked', correct: true }, // Correct
            { answer: 'has worked', correct: false },
            { answer: 'has been worked', correct: false },
            { answer: 'is being worked', correct: false }]
    },

    {
        question: 'Which of these is present perfect tense?',
        answersArray: [
            { answer: 'has finished', correct: true },  // Correct
            { answer: 'had finished', correct: false },
            { answer: 'was finishing', correct: false },
            { answer: 'is finishing', correct: false }]
    },

    {
        question: 'What kind of word order is regular word order in English?',
        answersArray: [
            { answer: 'Subject-Verb-Object', correct: true },  // Correct
            { answer: 'Verb-Object-Subject', correct: false },
            { answer: 'Adjective-Subject-Verb', correct: false },
            { answer: 'Object-Verb-Subject', correct: false }]
    },

    {
        question: 'What kind of noun is any name?',
        answersArray: [
            { answer: 'Proper', correct: true },  // Correct
            { answer: 'Improper', correct: false },
            { answer: 'Long', correct: false },
            { answer: 'Complex', correct: false }]
    }

];