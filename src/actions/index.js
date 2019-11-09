export const actionNames = { 
    validation: 'VALIDATION',
    increasePoints: 'INCREASE_POINTS',
    resetPoints: 'RESET_POINTS' ,
    levelUp: 'LEVEL_UP',
    levelAlert:'LEVEL_ALERT',
    addWordToSay: 'ADD_WORD_TO_SAY', 
    resetGame: 'RESET_GAME'
}

export const validation = payload => ({
    type: actionNames.validation,
    payload,
})
export const increasePoints = payload => ({
    type: actionNames.increasePoints,
    payload,
})
export const resetPoints = payload => ({
    type: actionNames.resetPoints,
    payload,
})
export const levelAlert = payload => ({
    type: actionNames.levelAlert,
    payload,
})
export const levelUp = payload => ({
    type: actionNames.levelUp,
    payload,
})
export const addWordToSay = payload => ({
    type: actionNames.addWordToSay,
    payload,
})
export const resetGame = payload => ({
    type: actionNames.resetGame,
    payload,
})
