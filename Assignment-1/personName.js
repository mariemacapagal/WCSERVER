module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

//Macapagal, Ed Marie May D.
//February 1, 2022
//WD-201