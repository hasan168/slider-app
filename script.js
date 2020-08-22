var models = [{
    name: 'Bmw 418d',
    image: 'img/bmw.jpg',
    link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
}, {
    name: 'Mazda CX-3',
    image: 'img/mazda.jpg',
    link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
}, {
    name: 'Volvo S60',
    image: 'img/volvo.jpg',
    link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
}, {
    name: 'Skoda Superb',
    image: 'img/skoda.jpg',
    link: 'http://www.arabalar.com.tr/skoda/superb/2019/1-6-tdi-prestige-dsg'
}, {
    name: 'Honda Civic',
    image: 'img/honda.jpg',
    link: 'http://www.arabalar.com.tr/honda/civic/2019/1-6-elegance '
}];

var index = 1;

document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-img-top').setAttribute('src', models[index].image);
document.querySelector('.card-link').setAttribute('href', models[index].link);

