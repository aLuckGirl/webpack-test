import _ from 'lodash';
import './style.css'

function component() {
    var element = document.createElement('div');

    element.innerHTML = '哈哈哈哈哈'
    element.classList.add('hello'); //给元素添加一个类名hello

    return element;
}

document.body.appendChild(component());