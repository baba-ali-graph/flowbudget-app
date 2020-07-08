import uuid from 'uuid'

const budgets = [
    {
        _id: uuid.v4(),
        title: 'Budget for Family',
        timestamp: new Date(2020, 4, 12) 
    },
    {
        _id: uuid.v4(),
        title: 'Travelling Budget',
        timestamp: new Date(2020, 5, 23)
    }
]

export default budgets