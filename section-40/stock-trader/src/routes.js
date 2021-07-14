import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
import Portfolio from './components/portfolio/Portfolio.vue';

export default [
    { name: 'home', path: '/', component: Home },
    { name: 'stocks', path: '/stocks', component: Stocks },
    { name: 'portfolio', path: '/portfolio', component: Portfolio }
];