class Scooter {
  static nextSerial = 1;
  constructor(station, user, serial, charge, isBroken) {
    this.station = station;
    this.user = null;
    this.user = nextSerial;
    this.charge = 100;
    this.isBroken = false;
  }
  dock(station) {
    this.user = null;
    this.station = station;
  }
  rent(user) {
    if (this.charge < 20 === this.isBroken) {

    } else throw new Error("Scooter needs to charge or needs repair"); 
  }
  
}
module.exports = Scooter
