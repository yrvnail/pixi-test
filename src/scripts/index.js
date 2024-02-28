import * as PIXI from 'pixi.js';
import * as utils from './utils.js'
import * as config from './config.js'


// Создаем основной контейнер для отображения нашей заставки
const oMainApp = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000,
  antialias: true
});

globalThis.__PIXI_APP__ = oMainApp;

const oBackgroundImage = utils.CreateBackgroundImage("scene/background.jpg", oMainApp.screen.width, oMainApp.screen.height);
const oLogo = utils.CreateLogo("sprites/dvd_logo.svg", window.innerWidth / 2, window.innerHeight / 2);

// Добавляем основной контейнер на страницу
document.body.appendChild(oMainApp.view);

//Добавляем фон на страницу
oMainApp.stage.addChild(oBackgroundImage);
oMainApp.stage.addChild(oLogo);

// Ticker
const ticker = new PIXI.Ticker();

ticker.add(utils.onTick(oLogo), PIXI.UPDATE_PRIORITY.LOW);
ticker.start();