const masks = {
    datePattern_1: {
        date: true,
        delimiter: '.',
        datePattern: ['d', 'm', 'Y']     
    },
    datePattern_2: {
        date: true,
        datePattern: ['m', 'y']
    },
    timePattern_1: {
        time: true,
        timePattern: ['h', 'm', 's']
    },
    timePattern_2: {
        time: true,
        timePattern: ['h', 'm']
    },
    numeralPattern_1: {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
    }
}

export {masks}