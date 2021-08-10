const arrayAnalysis = (() => {
    function largestInArray(array) {
        let largest = array[0];
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] > largest) {
                largest = array[i];
            }
        }
        return largest;
    }

    function smallestInArray(array) {
        let smallest = array[0];
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] < smallest) {
                smallest = array[i];
            }
        }
        return smallest;
    }

    function averageOfArray(array) {
        const sum = array.reduce((prev, curr) => (prev + curr), 0);
        const average = sum / array.length;
        return average;
    }

    function createObject(min, average, max, length) {
        const object = {
            average,
            min,
            max,
            length,
        };
        return object;
    }

    function receive(array) {
        const arrAverage = averageOfArray(array);
        const smallest = smallestInArray(array);
        const largest = largestInArray(array);
        const totalLength = array.length;
        const createdObject = createObject(smallest, arrAverage, largest, totalLength);
        return createdObject;
    }

    return {
        receive,
    };
})();

module.exports = arrayAnalysis;
