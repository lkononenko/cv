<template>
    <i
        class="root"
        :class="isFixedSize ? size : ''"
        :style="!isFixedSize ? {width: size, height:size} : {}"
        v-on="$listeners"
        v-html="require(`!svg-inline-loader!./../assets/icons/icon-${name}.svg`)"
    />
</template>

<script>
    export default {
        name: 'UiIcon',
        props: {
            name: {
                type: String,
                required: true
            },
            size: {
                type: String,
                default: null
            }
        },
        computed: {
            isFixedSize() {
              const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
              return sizes.includes(this.size) ? true : false;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import '../assets/styles/main.scss';

    .root {
        box-sizing: content-box;
        display: inline-block;
        font-size: 0;
        overflow: hidden;
    }

    .xs {
        height: .8rem;
        width: .8rem;
    }

    .sm {
        height: 1rem;
        width: 1rem;
    }

    .md {
        height: 1.2rem;
        width: 1.2rem;
    }

    .lg {
        height: 1.4rem;
        width: 1.4rem;
    }

    .xl {
        height: 1.6rem;
        width: 1.6rem;
    }

    .xxl {
        height: 2.2rem;
        width: 2.2rem;
    }
</style>