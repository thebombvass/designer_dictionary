const recieve = function () {
           firebase.database().ref('Users').once('value', function (data) {
               let myData = data.val();
               let newData = []
               for (messages in myData) {
                   let name = myData[messages].user
                   let message = myData[messages].message
                   newData.push(name, message)
               }
               return newData
           })
       }

export recieve()