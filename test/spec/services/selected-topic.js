'use strict';

describe('Service: SelectedTopic', function () {

  // load the service's module
  beforeEach(module('chatClientApp'));

  // instantiate service
  var SelectedTopic;
  beforeEach(inject(function (_SelectedTopic_) {
    SelectedTopic = _SelectedTopic_;
  }));

  it('should do something', function () {
    expect(!!SelectedTopic).toBe(true);
  });

});
