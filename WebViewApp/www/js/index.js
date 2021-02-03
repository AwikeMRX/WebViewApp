
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
 console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
 document.getElementById('deviceready').classList.add('ready');

  //START ONESIGNAL CODE
  //Remove this method to stop OneSignal Debugging
  window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});

  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };


  window.plugins.OneSignal
    .startInit("5e3b1685-28f7-4124-a9e7-871ccaec5303")
    .handleNotificationOpened(notificationOpenedCallback)
    //.iOSSettings(iosSettings)
    .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
    .endInit();

  // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
  window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
    console.log("User accepted notifications: " + accepted);
  });

}

