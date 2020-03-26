
const test = QUnit.test;

function add(x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function isEven (x) {
    return x % 2 === 0;
}

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