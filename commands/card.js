module.exports = async (_y, args) => {
  const y = require('../core/base');
  const Card = require('../models/mongoose/card');

  const cards = await Card.find({});

  console.log(cards.length);

  let id = args[0];

  let card = {};
  if (!id) {
    card = cards[
      Math.floor(Math.random() * cards.length)
    ];
    id = card.id;
  }

  if (id.length > 20) {
    id = id.substring(34);
  }

  if (!cards.find(o => o.id === id)) {
    return _y.reply(
      `<a:cross:751443454244159519> | Can't find the player with id#${id}`
    );
  }

  const D = y.Discord;
  const embed = new D.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Get this card using $pack command!')
    .setImage(card.img)
    .setURL(card.img)
  ;
	_y.reply(embed);
};
