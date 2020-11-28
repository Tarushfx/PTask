const mongoose = require('mongoose')
const { UserSchema } = require('../models/user.model');


const User = mongoose.model('users', UserSchema);

async function notifAdd(_, { notif }) {
  const data = await User.findOne({_id: notif._id});
  const addednotif = {
    text: notif.text,
    type: notif.type ? notif.type : 0,
    status: notif.status ? notif.status : true
  };
  data.notifications.push(addednotif);
  const savedUser = await User.create(data);
  console.log(savedUser);
  if(savedUser){
    return "Added Notification";
  }
  else {
    return "Something Went Wrong";
  }
}

// mutation notifAdd($notif: NotifAdd!) {
//   NotifAdd(notif: $notif)
// }

async function notifUpdate(_, { notif }){
  const data = await User.findOne({_id: notif._id});
  const notifArray = data.notifications;
  const index = notifArray.findIndex(x => x._id == notif.notif_id);
  const foundNotif = notifArray[index];
  foundNotif.status = notif.status;
  const savedUser = User.create(data);
  if(savedUser){
    return "Updated";
  }
  else {
    return "Something went wrong";
  }
}

// mutation notifAdd($notif: NotifUpdate!){
//   NotifUpdate(notif: $notif)
// }

async function notifRemove(_, { notif }){

}

module.exports = { notifAdd, notifUpdate };