new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("Alert");
                console.log("pengf");
            },
            storeValue: function(event) {
                this.value = event.target.value;
            }
        }

    });