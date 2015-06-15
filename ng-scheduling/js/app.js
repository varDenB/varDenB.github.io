// создаём модуль и передаём firebase
angular.module('scheduleApp', ['firebase'])

// создаём основной контроллер и передаём доступ к firebase
.controller('mainController', function($scope, $firebase) {

 // подключаемся к firebase
  var ref = new Firebase("https://popping-torch-2429.firebaseio.com/days");
  var fb = $firebase(ref);

 // функция определения изначальных данных
  $scope.reset = function() {

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0700: {
            time: '7:00am',
            booked: false
          },
          0800: {
            time: '8:00am',
            booked: false
          },
          0900: {
            time: '9:00am',
            booked: false
          },
          0100: {
            time: '10:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0700: {
            time: '7:00am',
            booked: false
          },
          0800: {
            time: '8:00am',
            booked: false
          },
          0900: {
            time: '9:00am',
            booked: false
          },
          0100: {
            time: '10:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          0700: {
            time: '7:00am',
            booked: false
          },
          0800: {
            time: '8:00am',
            booked: false
          },
          0900: {
            time: '9:00am',
            booked: false
          },
          0100: {
            time: '10:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      thursday: {
        name: 'Thursday',
        slots: {
          0700: {
            time: '7:00am',
            booked: false
          },
          0100: {
            time: '10:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          },
          0800: {
            time: '8:00am',
            booked: false
          },
          0900: {
            time: '9:00am',
            booked: false
          }
        }
      },
      friday: {
        name: 'Friday',
        slots: {
          0700: {
            time: '7:00am',
            booked: false
          },
          0800: {
            time: '8:00am',
            booked: false
          },
          0900: {
            time: '9:00am',
            booked: false
          },
          0100: {
            time: '10:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });

  };

 // синхронизация объекта
  var syncObject = fb.$asObject();

 // синхронизация данных
  syncObject.$bindTo($scope, 'days');

});
