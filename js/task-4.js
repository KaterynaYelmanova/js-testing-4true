const profile2 = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile2.getInfo()); // "Jacob has 300 active hours!"

profile2.changeUsername("Jon");
console.log(profile2.getInfo()); // "Jon has 300 active hours!"

profile2.updatePlayTime(20);
console.log(profile2.getInfo()); // "Jon has 320 active hours!"

profile2.changeUsername("Alex");
console.log(profile2.getInfo()); // "Alex has 320 active hours!"

profile2.updatePlayTime(50);
console.log(profile2.getInfo()); // "Jon has 370 active hours!"
