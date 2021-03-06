
const test = QUnit.test;

//Functions ------------------------------------------
//Function takes in x and y and returns them added together
function add(x, y) {
    return x + y;
}

//Function takes in x and y and returns y subtracted from x
function subtract (x, y) {
    return x - y;
}

//Function takes in x and y and returns x times y
function multiply (x, y) {
    return x * y;
}

//Function takes in x and y and returns x divided by y
function divide (x, y) {
    return x / y;
}

//Function takes in x and checks if it is divisible by 2, returns true if it is and false if not
function isEven (x) {
    return x % 2 === 0;
}

//Example helper function takes upTo as a limit, and pushes each number starting at 1 up to that number
function getNumbers(upTo) {
    const numbers = [];
    for(let i = 1; i <= upTo; i++) {
        numbers.push(i);
    }
    return numbers;
}

//Function that takes upTo as a limit, and pushes a number after it is checked if it is even
function getEvenNumbers(upTo) {
    const numbers = [];
    for(let i = 1; i <= upTo; i++) {
        let checkEven = isEven(i);
        if(checkEven) {
            numbers.push(i);
        }
    }
    return numbers;
}

//Function that takes upTo as a limit, replaces some values on conditions below and adds them to the array
function getFizzBuzzNumbers(upTo) {
    const numbers = [];

    for(let i = 1; i < upTo; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            numbers.push('fizzbuzz');
        } else if(i % 3 === 0) {
            numbers.push('fizz');
        } else if(i % 5 === 0) {
            numbers.push('buzz');
        } else {
            numbers.push(i);
        }
    }
    return numbers;
}

/*-------------------------------------------------------------------
Tests in Order of Github List
*/
test('Addition test 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expected = 7;

    //Act s
    // Call the function you're testing and set the result to a const
    const sum = add(x, y);


    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.equal(sum, expected);
});

test('Subtraction test 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 5;
    const y = 3;
    const expected = 2;

    //Act s
    // Call the function you're testing and set the result to a const
    const result = subtract(x, y);

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.equal(result, expected);
});

test('Multiply test 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    const y = 3;
    const expected = 12;

    //Act s
    // Call the function you're testing and set the result to a const
    const result = multiply(x, y);

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.equal(result, expected);
});


test('Divide test 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 6;
    const y = 2;
    const expected = 3;

    //Act s
    // Call the function you're testing and set the result to a const
    const result = divide(x, y);

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.equal(result, expected);
});

test('Divide test 2', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 7;
    const y = 0;
    const expected = Infinity;

    //Act s
    // Call the function you're testing and set the result to a const
    const result = divide(x, y);

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.equal(result, expected);
});

test('Check even number test 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 6;
    const expected = true;

    //Act s
    // Call the function you're testing and set the result to a const
    const result = isEven(x);

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.equal(result, expected);
});

test('Check even number test 2', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 7;
    const expected = false;

    //Act s
    // Call the function you're testing and set the result to a const
    const result = isEven(x);

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.equal(result, expected);
});

test('Return numbers up to', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const upTo = 5;
    const expected = [1, 2, 3, 4, 5];

    //Act
    const numbers = getNumbers(upTo);
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.deepEqual(numbers, expected);
});

test('Return even numbers up to', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const upTo = 9;
    const expected = [2, 4, 6, 8];

    //Act
    const numbers = getEvenNumbers(upTo);
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.deepEqual(numbers, expected);
});

test('Fizz Bizz Test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const upTo = 16;
    const expected = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'];

    //Act
    const numbers = getFizzBuzzNumbers(upTo);
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    //Forma is always actual, expected
    assert.deepEqual(numbers, expected);
});
