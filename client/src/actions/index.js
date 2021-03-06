import * as Cookies from 'js-cookie';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = () => ({
  type: FETCH_SUCCESS
})

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

export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const saveSuccess = () => ({
  type: SAVE_SUCCESS
});

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
export const correct = () => ({
  type: CORRECT
});

export const INCORRECT = 'INCORRECT';
export const incorrect = () => ({
  type: INCORRECT
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

export const RESET = 'RESET';
export const reset = () => ({
  type: RESET
})

export const getQuestions = () => dispatch => {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    dispatch(fetchRequest());
    return fetch('/api/questions', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${accessToken}`
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
          'Authorization': `Bearer ${accessToken}`
        }
      }).then(res => {
        if (!res.ok) {
          if (res.status === 401) {
            Cookies.remove('accessToken');
            return;
          }
          throw new Error(res.statusText)
        }
        return res.json();
      })
      .then(res => {
        dispatch(getCurrentUserSuccess(res));
      })
      .catch(err => dispatch(fetchError(err)))
  }
}

export const save = (id, question, queue) => dispatch => {
  const saveQuiz = [];
  if (question !== undefined) {
    saveQuiz.push(question);
  }
  if (queue !== undefined) {
    let current = queue.first;
    while (current) {
      saveQuiz.push(current.data);
      current = current.prev;
    }
  }
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
    dispatch(fetchRequest());
    return fetch('/api/save', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          questions: saveQuiz
        })
      }).then(res => {
        if (!res.ok) {
          if (res.status === 401) {
            Cookies.remove('accessToken');
            return;
          }
          throw new Error(res.statusText)
        }
        dispatch(saveSuccess());
      })
      .catch(err => dispatch(fetchError(err)))
  }
}
