import names from './names'

export const printWord = payload => ({
    type: 'PRINT_WORD',
    payload,
})