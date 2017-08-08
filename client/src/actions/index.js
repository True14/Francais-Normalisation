import request from "../../node_modules/superagent/superagent";
import * as Cookies from 'js-cookie';

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

export const GET_SCORE_SUCCESS = 'GET_SCORE_SUCCESS';
export const getScoreSuccess = score => ({
    type:GET_SCORE_SUCCESS,
    score
})

export const GET_SCORE_ERROR = 'GET_SCORE_ERROR';
export const getScoreError = error => ({
    type:GET_SCORE_ERROR,
    error
});

export const GET_SCORE_REQUEST = 'GET_SCORE_REQUEST';
export const getScoreRequest = () => ({
    type:GET_SCORE_REQUEST,
});

export const getLessons = () => dispatch => {
     const accessToken = Cookies.get('accessToken');
    dispatch(requestLesson())
    request 
        .get('/api/questions')
        .set({'Authorization':`Bearer ${accessToken}`})
        .then(res =>{dispatch(requestLessonSuccess(res.body))})
        .catch(err => dispatch(requestLessonError(err)))
}

export const getScore = () => dispatch => {
     const accessToken = Cookies.get('accessToken');
    dispatch(getScoreRequest())
    request 
        .get('/api/me')
        .set({'Authorization':`Bearer ${accessToken}`})
        .then(res =>{dispatch(getScoreSuccess(res))})
        .catch(err => dispatch(getScoreError(err)))
}

export const updateScore = (score) => {
     const accessToken = Cookies.get('accessToken');
    console.log('this is ===>',score)
    let id;
    request
        // .get('/api/me')
        
        // .then(req => req.body.id = id)
        // .set({'id':id})
        .put('/api/score')
        
        .set({'Authorization':`Bearer ${accessToken}`})
        .send({'req.body.score':score})
        .catch(err => console.log(err))
}
// const answerQuestion  