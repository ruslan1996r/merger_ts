const successMerge = {
  object1: {
    first_name: 'Bob',
    last_name: 'Jones',
    test: 'test',

    email: 'bob@gmail.com',

    address: {
      line_1: '1234 Main St',
      line_2: 'Apt 413',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90048'
    },

    logins: [
      { date: '10/22/2012', ip: '192.168.0.1' },
      { date: '10/21/2012', ip: '192.168.0.1' }
    ],

    photos: [
      'IMG-1985.jpg',
      'IMG-1987.jpg'
    ]
  },
  object2: {
    last_name: 'Jones',
    active: true,
    address: {
      line_1: '2143 South Main St',
      line_2: undefined
    },
    test: undefined,

    logins: { date: '10/23/2012', ip: '192.168.0.1' },

    photos: undefined
  },
  result: {
    first_name: 'Bob',
    last_name: 'Jones',
    email: 'bob@gmail.com',
    address: {
      line_1: '2143 South Main St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90048'
    },
    logins: [
      { date: '10/22/2012', ip: '192.168.0.1' },
      { date: '10/21/2012', ip: '192.168.0.1' },
      { date: '10/23/2012', ip: '192.168.0.1' }
    ],
    photos: [],
    active: true
  }
}

const firstCondition = {
  object1: {
    array: [
      "test"
    ]
  },
  object2: {
    array: "test2"
  },
  result: {
    array: ["test", "test2"]
  }
}

const secondCondition = {
  object1: {
    array: [
      "test"
    ]
  },
  object2: {
    array: null
  },
  result: {
    array: []
  }
}

const thirdCondition = {
  object1: {
    array: [
      "test"
    ]
  },
  object2: {
    array: [
      "test2"
    ]
  },
  result: {
    array: ["test2"]
  }
}

const fourthCondition = {
  object1: {
    test: "test"
  },
  object2: {
    test: undefined
  },
  result: {}
}


export { successMerge, firstCondition, secondCondition, thirdCondition, fourthCondition }
