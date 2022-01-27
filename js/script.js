console.log('VUE OK', Vue);

Vue.config.devtools = true

const root = new Vue({
    el: '#root',
    data: {
        imageUrls: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ],
        currentIndex: 0,
    }
})