export class Bird extends Phaser.GameObjects.Sprite {
  private jumpKey: Phaser.Input.Keyboard.Key;
  private anim: Phaser.Tweens.Tween[];
  private isDead: boolean = false;

  public getDead(): boolean {
    return this.isDead;
  }

  public setDead(dead: boolean): void {
    this.isDead = dead;
  }

  constructor(params: any) {
    super(params.scene, params.x, params.y, params.key, params.frame);

    // image
    this.setScale(3);
    this.setOrigin(0, 0);

    // physics
    params.scene.physics.world.enable(this);
    if (this.body instanceof Phaser.Physics.Arcade.Body) {
      this.body.setGravityY(1000);
      this.body.setSize(17, 12);
    }

    // animations & tweens
    this.anim = [];
    this.anim.push(
      params.scene.tweens.add({
        targets: this,
        duration: 100,
        angle: -20
      })
    );

    // input
    this.jumpKey = params.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    params.scene.add.existing(this);
  }

  update(): void {
    this.handleAngleChange();
    this.handleInput();
    this.isOffTheScreen();
  }

  private handleAngleChange(): void {
    if (this.angle < 20) {
      this.angle += 1;
    }
  }

  private handleInput(): void {
    if (this.jumpKey.isDown) {
      this.flap();
    }
  }

  public flap(): void {
    if (this.body instanceof Phaser.Physics.Arcade.Body) {
      this.body.setVelocityY(-350);
      this.anim[0].restart();
    }
  }

  private isOffTheScreen(): void {
    if (this.y < 0 || this.y + this.height > this.scene.sys.canvas.height) {
      this.isDead = true;
    }
  }
}
