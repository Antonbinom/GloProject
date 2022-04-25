import {
	timer
} from "./modules/timer";
import {
	menu
} from "./modules/menu";
import {
	modal
} from "./modules/modal";
import {
	validation
} from "./modules/validation";
import {
	tabs
} from "./modules/tabs";
import {
	slider
} from "./modules/slider";
import {
	calc
} from "./modules/calc";
import {
	sendForm
} from "./modules/sendForm";
import {
	swiper
} from "./modules/swiper";

timer('25 march 2023'); // вызов функции. Передаем дату deadline
menu();
modal();
validation();
tabs();
slider('.portfolio-content', '.portfolio-item');
calc(100);
sendForm({
	formName: '[name = user_form]'
});
swiper();