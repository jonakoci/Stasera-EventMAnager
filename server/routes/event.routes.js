const EventController = require ("../controllers/event.controller")

module.exports = (app) => {
    app.post ("/newevent", EventController.createEvent); 
    app.get ("/events", EventController.getAllEvents);
    app.get ("/event/:id", EventController.getOneEvent);
    app.put ("/event/:id", EventController.updateEvent);
    app.delete ("/event/:id", EventController.deleteEvent)
};