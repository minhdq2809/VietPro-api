var arrLike = []
//var arrsttlike = []

for (var i = 0; i < 100; i++) {
     arrLike[i] = 10
     //arrsttlike[i] = false
     //view[i] = 2
}


const Like = (state = arrLike, action) => {
     switch (action.type) {
          case "INCREASE-LIKE":
               return [...state,action.payload]
          case "REDUCE-LIKE":
               return [...state,action.payload]
          default:
               return state

     }
}

export default Like