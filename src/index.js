import { render } from 'react-dom';
import 'normalize.css';
import './styles/main.scss';
import './config/globals';
import Router from './router/router';

render(Router, document.getElementById('app'));
