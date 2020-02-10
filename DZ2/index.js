const opt = {
  birthday: new Date("November 8, 1999"),
  getFullDays() {
    return Math.floor(
      (new Date().getTime() - this.birthday.getTime()) / (1000 * 60 * 60 * 24)
    );
  },
  getBirthday() {
    return this.birthday;
  },
  getAddDays() {
    let newDate = new Date(this.birthday);
    newDate = newDate.setDate(this.birthday.getDate() + 10000);
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long"
    };

    const temp = new Date(newDate).toLocaleString("ru", options);
    const string = temp.split(" ");
    return (
      string[3] +
      " " +
      string[4] +
      " " +
      string[2] +
      " " +
      string[1] +
      " " +
      string[0].slice(0, -1)
    );
  }
};

console.log(opt.getBirthday());
console.log(opt.getFullDays());
console.log(opt.getAddDays());