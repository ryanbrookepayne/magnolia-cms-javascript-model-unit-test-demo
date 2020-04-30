const Model = require('../../templates/components/cowComponent').__get__('Model');

describe('feedCows', () => {
  it('should return reduced list', () => {
    const model = new Model();

    expect(model.feedCows()).toEqual('Cows have been fed');
  });
});
