const capitalizeMixin = {
    filters: {
        capitalize(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    data() {
        return {
            kk: "poniendo kk"
        }
    },
    methods: {
        devuelveVendidos() {
            return this.kk
        }
    },
    created: function () {
        console.log('component hook called')
    },
    destroyed() {
        console.log('console.log')
    },

}

export default capitalizeMixin;