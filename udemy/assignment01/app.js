new Vue({
    el: "#exercise",
    data: {
        name: "Alexis",
        age: 38,
        link: "https://placeimg.com/100/100"
    },
    methods: {
        changeName: function(event) {
            this.name = event.target.value
        }
    }
});