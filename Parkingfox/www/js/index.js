var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    /* Set the width of the side navigation to 250px */
    openNav: function() {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("pageone").style.marginLeft = "200px";
        document.body.style.backgroundColor = "rgba(0,0,0,10)";
        
    },

    /* Set the width of the side navigation to 0 */
    closeNav: function() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("pageone").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }
    };

