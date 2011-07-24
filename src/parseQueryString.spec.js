describe("Parse Query String", function() {

  it("should parse query string and return object with parameters", function() {

      var q = 'x=1&y=2&z=hello',
          params = parseQueryString(q);
        
      expect(params.x).toEqual(1);
      expect(params.y).toEqual(2);
      expect(params.z).toEqual('hello');
  });

});