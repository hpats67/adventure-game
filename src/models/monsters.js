const monsters = {};

monsters.compendium = [
  {
    name: 'Frida Frogg',
    description: 'A giant green frog sits in the room wearing a pink tutu. Occasionally, a very very long tongue flicks out of her mouth and snags a flying insect.',
    weakness: 'torch',
    attack: 10
  },
  {
    name: 'Black Paladin',
    description: 'A still suit of matte black armor holding a two-handed sword that seems to absorb all the light in the room. Though you can\'t see any eyes through the visor slits you can tell you are being watched by someone with cat-like reflexes and a desire to do harm to others.',
    weakness: '',
    attack: 25
  },
  {
    name: 'Killer Kitty',
    description: 'A tiny kitty with eyes that glow with an inner fire. But its meow is soooo cute...',
    weakness: 'catnip sachet',
    attack: 5
  },
  {
    name: 'Brutha Bunny',
    description: 'A horse-sized, flop-eared bunny. However, this bunny is saber-toothed with shoulder-length dreads tipped with steel.',
    weakness: 'golden carrot',
    attack: 45
  },
  {
    name: 'Wicked Witch of the NW',
    description: 'A generic, sterotypical green-skinned witch in black robes, pointy hat and a wart with three coarse hairs growing out of it.',
    weakness: 'bucket of stagnant water',
    attack: 45
  },
  
];

monsters.active = [];
monsters.graveyard =[];

module.exports = monsters;