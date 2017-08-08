export const REQUEST_LESSON = 'REQUEST_LESSON';
export const requestLesson = () => ({
    type:REQUEST_LESSON,
});

export const REQUEST_LESSON_SUCCESS = 'REQUEST_LESSON_SUCCESS';
export const requestLessonSuccess = questions => ({
    type:REQUEST_LESSON_SUCCESS,
    questions
});

export const REQUEST_LESSON_ERROR = 'REQUEST_LESSON_ERROR';
export const requestLessonError = error => ({
    type:REQUEST_LESSON_ERROR,
    error
});

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const nextQuestion = () => ({
    type:NEXT_QUESTION
})