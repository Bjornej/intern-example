define([
	'intern!bdd',
	'intern/chai!should',
	'../src/library'
], function (bdd, should, library) {
    should();
    with (bdd) {
        describe("sum", function () {
            it("should sum two numbers", function () {
                library.diff(3, 2).should.equal(1);
            });
        });
    }

});