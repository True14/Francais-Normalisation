import Queue from '../queue';
const initialState = {
    currentUser: null,
    currentQuestion: undefined,
    questions:[],
    nextQuestion: null,
    score:null,
    loading:false,
    questionQueue: null,
    userAnswer: '',
    error: null,
    showFeedback: false,
    result: ''
}

export const learnReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {
              ...state,
              loading: true
            }
        case 'REQUEST_QUESTIONS_SUCCESS':
            let queue = new Queue();
            action.questions.forEach(question => {
              queue.enqueue(question);
            })
            let current = queue.dequeue();
            return {
              ...state,
              questions: action.questions,
              questionQueue: queue,
              currentQuestion: current,
              loading: false,
              error: null
            }
        case 'FETCH_ERROR':
            return {
              ...state,
              loading: false,
              error: action.error
            }
        case 'GET_CURRENT_USER_SUCCESS':
            if (action.user.questions) {
              queue = new Queue();
              action.user.questions.forEach(question => {
                queue.enqueue(question);
              })
              current = queue.dequeue();
            }
            return {
              ...state,
              currentUser: action.user,
              currentQuestion: current,
              questionQueue: queue,
              loading: false,
              error: null
            }
        case 'SET_USER_ANSWER':
            const userAnswer = action.answer
            return {
              ...state,
               userAnswer
             }
        case 'CORRECT':
            queue = state.questionQueue;
            current = state.currentQuestion;
            queue.enqueue(current);
            current = queue.dequeue();
            return {
              ...state,
              currentQuestion: current,
              queue,
              userAnswer: ''
            }
         case 'INCORRECT':
            queue = state.questionQueue;
            current = state.currentQuestion;
            queue.insert(1, current);
            current = queue.dequeue();
            return {
              ...state,
              queue,
              userAnswer: '',
              currentQuestion: current
            }
         case 'SET_RESULT':
            current = state.currentQuestion;
            if (action.result === 'Correct') {
              current.right += 1;
            }else {
              current.wrong += 1;
              current.right = 0;
            }
             return {
               ...state,
               currentQuestion: current,
               result: action.result
             }
         case 'TOGGLE_FEEDBACK':
            return {
              ...state,
              showFeedback: !state.showFeedback
            }
        default:
            return state
    }
}

export default learnReducer;
