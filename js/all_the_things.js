
    $.ajax({
        url: "https://tiyspeakers.herokuapp.com/api/v1/speakers"
    }).then(function(data) {


       console.log( _.map(data) );
       $('.name').append(data.name);
       $('.company').append(data.company);
       document.getElementById('pic').innerHTML = '<img src="' + data.pic + '"class="circle">';
    });




window.onload = function() { init() };

// <!-- Sets date using Moment.js -->

          var friday = moment().startOf('week').add('days', 5).format("L");
          var guestFriday = moment().startOf('week').add('days', 5).format("dddd MMMM Do");
          var today = moment().format("ddd MMMM Do");
          // document.getElementById('now').innerHTML = now;
          document.getElementById('today').innerHTML = today;

// <!-- Gets objects from a google doc -->

          var public_spreadsheet_url = '100X6xTACTklr9AOdU1oSAImf2jIfw2CZ9Hc6lck9RNI';

          function init() {
          Tabletop.init( { key: public_spreadsheet_url,
                          callback: showInfo,
                          simpleSheet: true } )
          };

// Shows the info using _underscore

        //   function showInfo(data, tabletop) {
        //
        //     var thisWeekGuest = _.findWhere(data, {'Date': friday});
        //     var picImage = thisWeekGuest.Pic
        //
        //     document.getElementById('name').innerHTML = thisWeekGuest.Name;
        //     document.getElementById('company').innerHTML = thisWeekGuest.Company;
        //     document.getElementById('pic').innerHTML = '<img src="' + picImage + '"class="circle">';
        //     document.getElementById('friday').innerHTML = guestFriday;
        //
        // }
