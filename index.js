module.exports = {
    requestAccessToken: require('./methods/access_token_request.js'),
    // refreshAccessToken: require('./methods/access_token_refresh.js'),
    
    // revokeAuthorization: require('./methods/authorization_revoke.js'),
    
    // createEvent: require('./methods/event_create.js'),
    // deleteEvent: require('./methods/event_delete.js'),
    // readEvents: require('./methods/event_read.js'),
    
    createNotificationChannel: require('./methods/notification_channel_create.js'),
    // deleteNotificationChannel: require('./methods/notification_channel_delete.js'),
    // listNotificationChannels: require('./methods/notification_channel_list.js'),
    
    listCalendars: require('./methods/calendar_list.js'),
    // profileInformation: require('./methods/profile_information.js'),
    // accountInformation: require('./methods/account_information.js'),
};