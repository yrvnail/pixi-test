import * as PIXI from 'pixi.js'
import * as config from './config.js'
export function CreateBackgroundImage(sPath, iWidth, iHeight) {
    const oBackgroundTexture = PIXI.Texture.from(sPath);
    const oBackground = new PIXI.Sprite(oBackgroundTexture);

    oBackground.width = iWidth;
    oBackground.height = iHeight;
    return oBackground;
  } 
  
  export function CreateLogo(sPath, iWidth, iHeight) {
    const oLogoTexture = PIXI.Texture.from(sPath);
    const oLogo = new PIXI.Sprite(oLogoTexture);
    oLogo.vx = config.speed;
    oLogo.vy = config.speed;
    oLogo.x = iWidth;
    oLogo.y = iHeight;

    oLogo.interactive = true;
    oLogo.buttonMode = true;
    oLogo.on('pointerdown', () => {
        // Меняем цвет логотипа при клике
        oLogo.tint = Math.random() * 0xffffff;
    });

    return oLogo;
  }

  export function onTick(oLogo) {
    return () => {
        // Меняем координаты лого
        oLogo.x += oLogo.vx * config.speed;
        oLogo.y += oLogo.vy * config.speed;
      
        // Логика столкновения
        if (oLogo.x < 0 || oLogo.x > window.innerWidth - config.width) {
          oLogo.vx *= -1;
          oLogo.tint += Math.random() * 0x000000;
        }
        if (oLogo.y < 0 || oLogo.y > window.innerHeight - config.height) {
          oLogo.vy *= -1;
          oLogo.tint += Math.random() * 0x000000;
        }
      
        oLogo.width = config.width;
        oLogo.height = config.height;
      }
  }