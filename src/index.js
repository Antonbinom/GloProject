import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";

timer('25 march 2022'); // вызов функции. Передаем дату deadline
menu();
modal();
validation();
tabs();
slider('dot', 'dot-active', 'portfolio-item-active');