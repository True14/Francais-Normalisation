import * as Cookies from 'js-cookie';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
    type:FETCH_REQUEST,
});

export const REQUEST_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
export const requestQuestionsSuccess = questions => ({
    type: REQUEST_QUESTIONS_SUCCESS,
    questions
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = error => ({
    type: FETCH_ERROR,
    error
});

// export const NEXT_QUESTION = 'NEXT_QUESTION';
// export const nextQuestion = () => ({
//     type: NEXT_QUESTION
// })

export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const getCurrentUserSuccess = user => ({
    type: GET_CURRENT_USER_SUCCESS,
    user
})

export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const setUserAnswer = answer => ({
  type: SET_USER_ANSWER,
  answer
});

export const CORRECT = 'CORRECT';
export const correct = question => ({
  type: CORRECT,
  question
});

export const TOGGLE_FEEDBACK = 'TOGGLE_FEEDBACK';
export const toggleFeedback = () => ({
  type: TOGGLE_FEEDBACK
})

export const SET_RESULT = 'SET_RESULT';
export const setResult = result => ({
  type: SET_RESULT,
  result
})

export const getQuestions = () => dispatch => {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    dispatch(fetchRequest());
    return fetch('/api/questions', {
      method: 'get',
      headers: {
        'Authorization':`Bearer ${accessToken}`
      }
    }).then(res => {
      return (res.json())
    }).then(res => {
      if (res) {
        dispatch(requestQuestionsSuccess(res))
      }
    })
    .catch(err => dispatch(fetchError(err)))
  }
}

export const getCurrentUser = () => dispatch => {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    dispatch(fetchRequest());
    return fetch('/api/me', {
      method: 'GET',
      headers: {
        'Authorization':`Bearer ${accessToken}`
      }
    }).then(res => {
      if (!res.ok) {
        if (res.status === 401) {
          Cookies.remove('accessToken');
          return;
        }
        throw new Error(res.statusText)
      }
      dispatch(getCurrentUserSuccess(res.body))
    })
    .catch(err => dispatch(fetchError(err)))
  }
}
