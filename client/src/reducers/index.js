import Queue from '../queue';
const initialState = {
  currentUser: null,
  currentQuestion: null,
  questions: [],
  nextQuestion: null,
  score: null,
  loading: false,
  questionQueue: null,
  userAnswer: '',
  error: null,
  showFeedback: false,
  result: '',
  completed: false,
  save: false
}

export const learnReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false
      }
    case 'REQUEST_QUESTIONS_SUCCESS':
      let queue = new Queue();
      action.questions.forEach(question => {
        queue.enqueue(question);
      });
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
      current = null;
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
      let node = state.questionQueue.first;
      queue = new Queue();
      current = state.currentQuestion;
      let completed = false;
      while (node) {
        queue.enqueue(node.data);
        node = node.prev;
      }
      if (current.right < 3) {
        queue.enqueue(current);
      }
      current = queue.dequeue();
      if (!current) {
        completed = true;
      }
      return {
        ...state,
        completed,
        currentQuestion: current,
        questionQueue: queue,
        userAnswer: '',
        save: true
      }
    case 'INCORRECT':
      node = state.questionQueue.first;
      queue = new Queue();
      current = state.currentQuestion;
      while (node) {
        queue.enqueue(node.data);
        node = node.prev;
      }
      queue.insert(1, current);
      current = queue.dequeue();
      return {
        ...state,
        questionQueue: queue,
        userAnswer: '',
        currentQuestion: current,
        save: true
      }
    case 'SET_RESULT':
      current = state.currentQuestion;
      if (action.result === 'Correct') {
        current.right += 1;
      } else {
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
    case 'RESET':
      return {
        ...state,
        completed: false
      }
    case 'SAVE':
      return {
        ...state,
        save: false
      }
    default:
      return state
  }
}

export default learnReducer;
