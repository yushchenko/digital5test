describe("Fibonacci Sequence", function() {

  it("should calculate fibs in different ways", function() {

      var fibs = [0,1,1,2,3,5,8],
          n, max = fibs.length,

          toTest = [fibSimple, fibMayBeBetter, fibMemoization],
          k, len = toTest.length;

      for (k = 0; k < len; k += 1) {
          for (n = 0; n < max; n += 1) {
              expect(toTest[k](n)).toEqual(fibs[n]);
          }
      }
  });

});