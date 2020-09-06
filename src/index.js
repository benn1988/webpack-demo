import {run} from './app/app';
import {ComponentService} from './app/component.service';
import {AlertService} from './app/alert.service';
import "./main.css";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);