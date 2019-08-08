describe("A suite", function() {
  beforeAll(function() {
    scenarioVar = 0;
    globalVar = 0;
    this.sharedVar = 0;
  });
  beforeEach(function() {
    scenarioVar++;
    globalVar++;
    this.sharedVar++
  });
  afterAll(function() {
    console.log("Scenario level variable:" + scenarioVar);
    console.log("Global level variable:" + globalVar);
    console.log("Shared variable:" + this.sharedVar);
  });

  afterEach(function() {
    console.log("Scenario level variable:" + scenarioVar);
    console.log("Global level variable:" + globalVar);
    console.log("Shared variable:" + this.sharedVar);
  });

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("and so is a spec", function() {
    a = true;
    expect(a).toBe(true);
  });

  it("verifies values in setup and teardown", function() {
    expect(scenarioVar).not.toBe(0);
    expect(globalVar).toBe(3);
    expect(this.sharedVar).toBe(1);
  });

  xit("verifies pending spec", function(){
      fail("Anyways its pending");
  });
});