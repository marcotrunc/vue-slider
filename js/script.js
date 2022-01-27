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
        autoplay: 0,
        myInterval: 0,
        btnText: 'play',
    },
    methods: {
        isActive(index) {
            return this.currentIndex === index ? true : false;
        },
        indexAssignment(index) {
            return this.currentIndex = index;
        },
        prevStep() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.imageUrls.length - 1;
                console.log(this.currentIndex);
            } else {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        nextStep() {
            if (this.currentIndex === this.imageUrls.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.currentIndex + 1;
            }
        },
        startAutoplay() {
            if (this.autoplay === 0) {
                this.myInterval = setInterval(this.nextStep, 3000)
                this.autoplay = 1;
                this.btnText = 'Stop';
                return this.autoplay
            } else {
                this.stopAutoplay();
                this.btnText = 'Play';
            }
            console.log(this.autoplay)
        },
        stopAutoplay() {
            clearInterval(this.myInterval);
            this.autoplay = 0;
        }
    }
});