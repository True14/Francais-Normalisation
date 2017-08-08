const initialState = {
    currentUser:null,
    currentQuestion: undefined,
    nextQuestion: null,
    score:null,
    loading:false
    // questions:[ {
    //     id: 1, word: 'vouloir', answer: 'want' 
    // }, {
    //     id: 2, word: 'la famille', answer: 'family' 
    // }, { 
    //     id: 3, word: 'acheter', answer: 'to buy' 
    // }, { 
    //     id: 4, word: 'la carotte', answer: 'carrot' 
    // }, { 
    //     id: 5, word: 'beaucoup', answer: 'a lot' 
    // }, {
    //      id: 6, word: 'les gens', answer: 'people' 
    // }, {
    //      id: 7, word: 'la queue', answer: 'tail' 
    // }, {
    //      id: 8, word: 'la question', answer: 'question' 
    // }, {
    //      id: 9, word: 'payer', answer: 'pay' 
    // }, {
    //      id: 10, word: 'les maths', answer: 'mathematics' 
    //     }, ]

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
