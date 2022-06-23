document.addEventListener('alpine:init', () => {
    Alpine.data('glider', (params = { slidesToShow: 1 }) => ({
        gliderInstance: null,
        init() {
            this.$nextTick(() => {
                this.gliderInstance = new Glider(this.$el, {...params})
            })
        }
    }))
})