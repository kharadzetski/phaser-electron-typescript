export class Pipe extends Phaser.GameObjects.Sprite {
  constructor(params: any) {
    super(params.scene, params.x, params.y, params.key, params.frame);

    // image
    this.setScale(3);
    this.setOrigin(0, 0);

    // physics
    params.scene.physics.world.enable(this);
    
    if (this.body instanceof Phaser.Physics.Arcade.Body) {
      this.body.allowGravity = false;
      this.body.setVelocityX(-200);
      this.body.setSize(20, 20);
    }

    params.scene.add.existing(this);
  }
}
