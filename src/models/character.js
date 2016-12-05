module.exports = {

  name: 'Adventurer',
  hp: 100,
  inventory: [{
    type: 'item',
    name: 'yellow banana',
    description: 'Looks pretty tasty.',
    value: 10
  },
  {
    type: 'item',
    name: 'wine',
    description: 'Twinkles red in the torchlight, smells like blackberry and oak',
    value: 5
  },
  {
    type: 'weapon',
    name: 'torch',
    description: 'This seems handy for getting around in dark damp places! Careful not to burn yourself.',
  },
  {
    type: 'weapon',
    name: 'salt shaker',
    description: 'Standard glass shaker, with some salt and rice in it. Might be useful in a fight.',
  },
  {
    type: 'weapon',
    name: 'catnip sachet',
    description: 'Smells a little minty and herby. A kitty would love this.',
  },
  {
    type: 'weapon',
    name: 'golden carrot',
    description: 'A heavy, golden carrot. Definitely not edible, possibly valuable if it\'s real gold.',
  }],
  isDead: false

};
