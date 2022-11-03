const { Task } = require('../../../src/models')

describe('Task Model', () => {
    test('should throw a validation error if title is not present', async () => {
        const newTask = {
            description: 'This task is missing the title key-value pair'
        }

        await expect(new Task(newTask).validate()).rejects.toThrow();
    })

    test('should throw a validation error if title is longer than 150 characters', async () => {
        const newTask = {
            title: ''
        }
        await expect(new Task(newTask).validate()).rejects.toThrow()
    })

})