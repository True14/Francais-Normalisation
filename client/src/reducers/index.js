const initialState = {
    currentUser:null,
    currentQuestion: undefined,
    questions:[],
    nextQuestion: null,
    score:null,
    loading:false
}

export const learnReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LESSON':
            return Object.assign ({}, state, {

            })
        case 'REQUEST_LESSON_SUCCESS':
            return Object.assign({}, state, {
                questions:action.questions
            })
        case 'REQUEST_LESSON_ERROR':
            return Object.assign({}, state, {
                error:action.error
            })

        case 'GET_SCORE_SUCCESS':
            return Object.assign({}, state, {
                score:action.score
            })
        default:
            return state
    }
}

export default learnReducer;
