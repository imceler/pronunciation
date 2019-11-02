import names from './names'

export const validation = payload => ({
    type: 'VALIDATION',
    payload,
})
export const increasePoints = payload => ({
    type: 'INCREASE_POINTS',
    payload,
})
export const resetPoints = payload => ({
    type: 'RESET_POINTS',
    payload,
})
export const setNextLevel = payload => ({
    type: 'SET_NEXT_LEVEL',
    payload,
})
export const levelUp = payload => ({
    type: 'LEVEL_UP',
    payload,
})