const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let element of Object.values(collection)) {
        callback(element)
      }
      return collection;
    },

    map: function(collection, callback) {
      let result = [];
      for (let element of Object.values(collection)){
        result.push(callback(element));
      }
      return result;
    },

    reduce: function(collection, callback, acc) {
      let total;
      let counter;

      if (!!acc) {
        total = acc;
        counter = 0;
      } else {
        total = collection[0];
        counter = 1;
      }

     for (let i = counter; i < collection.length; i++) {
       total = callback(total, collection[i])
     }
      return total
    },
    
    find: function(collection, predicate) {
      for (let element of collection) {
        if (predicate(element)) {
          return element;
        }
      }
    },
    
    filter: function(collection, predicate) {
      let result = [];
      for (let element of collection) {
        if (predicate(element)) {
          result.push(element)
        }
      }
      return result;
    },
    
    size: function(collection) {
      return Object.values(collection).length
    },
    
    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },
    
    last: function(array, n) {
      if (n) {
        return array.slice(n * -1)
      } else {
        return array[array.length -1]
      }
    },
    
    compact: function(array) {
      let result = [];
      for (let element of array) {
        if (!!element) {
          result.push(element);
        }
      }
      return result;
    },
    
    sortBy: function(array, callback) {
      const result = [...array];
      return result.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(array, shallow) {
      let result = [];
      if (!!shallow) {
        result = result.concat(...array)
      } else {
        for (let element of array){
          if (typeof element === "object") {
            result.push(...this.flatten(element, false))
          } else {
            result.push(element)
          }
        }
      }
      return result  
    },
    
    uniq: function(array, isSorted, callback) {
      if (!callback) {
        return [...new Set(array)]
      }else{
        let mod = []
        let solution = [];

        for(let element of array) {
          let result = callback(element)


          if(!mod.some(x => x === result)){
            mod.push(result)
            solution.push(element)
          }
        }
        return solution;
      }
    },
    
    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      let array = Object.entries(object);
      let result = [];
      for (let element of array) {
        if (typeof element[1] === "function") {

          result.push(element[0])
        }
      }
      return result.sort()
    },


  }
})()

fi.libraryMethod()
