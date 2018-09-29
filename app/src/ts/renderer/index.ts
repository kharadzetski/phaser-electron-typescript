import 'phaser'

import { BootScene } from "@renderer/scenes/bootScene";
import { MainMenuScene } from "@renderer/scenes/mainMenuScene";
import { GameScene } from "@renderer/scenes/gameScene";
import { APP_WIDTH, APP_HEIGHT } from '@shared/constants';

const config: GameConfig = {
  title: "Flappy Bird",
  version: "1.0",
  width: APP_WIDTH,
  height: APP_HEIGHT,
  zoom: 1,
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene, MainMenuScene, GameScene],
  input: {
    keyboard: true,
    mouse: false,
    touch: false,
    gamepad: false
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  render: {
    pixelArt: true,
    antialias: false
  },
  backgroundColor: "#98d687"
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new Game(config);
};
