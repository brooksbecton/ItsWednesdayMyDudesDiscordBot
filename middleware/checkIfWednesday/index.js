function checkIfWednesday(message) {
  const content = message.content;
  if (
    content.toLocaleLowerCase().indexOf("my dude") > -1 &&
    message.author.username !== "ItsWednesdayMyDudes"
  ) {
    if (content.indexOf("Wednesday") > -1) {
      const isWednesday = new Date().getDay() === 3;

      if (isWednesday) {
        message.reply("It's Wednesday my dude!");
      } else {
        message.reply("It's NOT Wednesday my dude :(");
      }
    }
  }
}

module.exports = checkIfWednesday;
