can.Component.extend({
    tag: "my-counter",
    view: "Count: <span>{{count}}</span>" +
    "<button on:click='increment()'>+1</button>",
    ViewModel: {
        count: {default: 0},
        increment: function () {
            this.count++;
        }
    }
});