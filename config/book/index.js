export default {
        path: '/book',
        icon: 'book',
        name: 'book',
        routes: [
          {
            path: '/book/first',
            name: 'first',
            component: '../../src/components/bookComponents/book_first.js',
          },
          {
            path: '/book/second',
            name: 'second',
            component: '../../src/components/bookComponents/book_second.js',
          },
          {
            path: '/book/third',
            name: 'third',
            component: '../../src/components/bookComponents/book_third.js',
          }
        ]
  }