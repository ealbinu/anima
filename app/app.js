var vm = new Vue ({
    el: '#app',
    data () {
        return {
            screen: 1,
            ended: false,
            errorSound: null,
            okSound: null,
        }
    },
    methods: {
        
    },
    mounted () {
        this.errorSound = new Howl({
            src: ['app/s/error.mp3'],
        })
        this.okSound = new Howl({
            src: ['app/s/ok.mp3'],
        })
    }
})





