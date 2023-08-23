const {queryString} = require('./queryString');
describe('Object to query string', () => {
    it('should create a valid query string when an object is provided', function () {
        const obj = {
            name: 'Ada',
            profession: 'developer'
        }

        expect(queryString(obj)).toBe('name=Ada&profession=developer');
    });
})
