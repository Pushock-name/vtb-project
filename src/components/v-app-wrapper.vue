<template>
    <div class="v-app-wrapper">
        <v-welcome />
        <v-animation />
        <v-card />
        <v-offer />
        <v-footer />
    </div>
</template>

<script>
    import vWelcome from './welcome/v-welcome.vue';
    import vAnimation from './animation/v-animation.vue';
    import vCard from './card/v-card.vue';
    import vOffer from './offer/v-offer.vue'
    import vFooter from './footer/v-footer.vue';

    export default {
        name: 'v-app-wrapper',
        components: {
            vWelcome,
            vAnimation,
            vCard,
            vOffer,
            vFooter
        },
        props: {},
        data () {
            return {}        
        },    
        computed: {},
        methods: {},
        watch: {},
        mounted() {}
    }

</script>

<style>
    .v-app-wrapper {
        background: linear-gradient(90deg, #1437F5 0%, #3983F7 100%);
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        overflow: hidden;
    }
</style>