const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(stations, registerUsers) {
    this.stations = {
      "Penn Station": [],
      "West Baltimore": [],
      "Camden Station": [],
    }
    this.registerUsers = {};
  }
  registerUsers(username, password, age) {
    if (this.registerUsers === username) {
      
    }else throw new Error("User already registered");
  }
  if (age < 18) {
    throw new Error("User too young to register");
  }
  loginUser(username, password) {
    if (this.username === username);
    console.log("User has been logged in"){

    } else {

    throw new Error("User or password is incorrect")
  }
 }
 logUser(name) {
  
 }
}
module.exports = ScooterApp
