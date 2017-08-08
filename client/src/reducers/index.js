import Queue from '../queue';
const initialState = {
    currentUser: null,
    currentQuestion: undefined,
    questions:[],
    nextQuestion: null,
    score:null,
    loading:false,
    questionQueue: null,
    userAnswer: ''
}

export const learnReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LESSON':
            return Object.assign ({}, state, {

            })
        case 'REQUEST_LESSON_SUCCESS':
            let queue = new Queue();
            action.questions.forEach(question => {
              queue.enqueue(question);
            })
            console.log(queue);
            let current = queue.dequeue();
            console.log(current);
            return Object.assign({}, state, {
                questions: action.questions,
                questionQueue: queue,
                currentQuestion: current
            })
        case 'REQUEST_LESSON_ERROR':
            return Object.assign({}, state, {
                error:action.error
            })

        case 'GET_CURRENT_USER_SUCCESS':
            return Object.assign({}, state, {
                currentUser: action.user
            })
        case 'SET_USER_ANSWER':
            const userAnswer = action.answer
            return {...state, userAnswer}
        case 'CORRECT':
            const questionQueue = state.questionQueue;
            current = questionQueue.dequeue();
            questionQueue.enqueue(action.question);
            return Object.assign({}, state, {
              currentQuestion: current,
              questionQueue,
              userAnswer: ''
            })

        default:
            return state
    }
}

export default learnReducer;
