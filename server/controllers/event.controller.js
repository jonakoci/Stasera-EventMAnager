const Event = require ('../models/event.model')

module.exports.createEvent=(req, res) =>{
    Event.create (req.body)
    .then((event)=>{
        res.json(event)
    })
    .catch((err) => {
          res.status(400).json({ err });
      });
};

module.exports.getOneEvent =(req, res)=>{
    Event.findOne ({_id:req.params.id})
    .then ((event)=>{
      return res.json(event)
    })
    .catch((err) => {
        console.log(err)
        res.json({ err });
      });
};

module.exports.getAllEvents = (req, res) => {
        // Event.find({}).sort({date:-1}) 
        // could be date or id in the sort 
        Event.find()
        .then(events => {
            console.log(events); 
            res.json(events);
        })
        .catch(err => {
            console.log(err)
            res.json({err})
        })
}; 

module.exports.updateEvent = (req, res)=>{
    Event.findOneAndUpdate({_id:req.params.id}, req.body)
    .then((updatedEvent)=>{
        res.json(updatedEvent)
    })
    .catch((err) => {
        res.status(400).json({ err });    
      });
}; 

module.exports.deleteEvent =(req, res)=>{
    Event.deleteOne({_id:req.params.id})
    .then ((deletedRes)=>{
        res.json(deletedRes)
    })
    .catch((err) => {
        res.status(400).json({ err });
      });
  
};