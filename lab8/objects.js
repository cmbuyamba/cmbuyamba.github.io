const person = {
    firstName: 'Celestin',
    lastName: 'Mbuyamba',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

person.fullName();