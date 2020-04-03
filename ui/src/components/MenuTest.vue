<template>
  <div class="hello">

    <sidebar-menu relative="true"  hideToggle="true" width="250px" theme="white-theme" :menu="menu" />
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'MenuTest',
  props: {
    msg: String,
    theme: {
      type: String,
      default: ''
    },
    // Sidebar width (expanded)
    width: {
      type: String,
      default: '350px'
    },
    // Hide toggle collapse btn
    hideToggle: {
      type: Boolean,
      default: false
    },
    relative: {
      type: Boolean,
      default: false
    },
  },
  data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Group 1',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'item 1',
//                        icon: {
//                            element: "font-awesome-icon",
//                            attributes: {
//                                icon: "user-secret"
//                            }
//                        }
                    },
                    {
                        href: '/',
                        title: 'Item 1',
                    },

                    {
                        header: true,
                        title: 'Group 2',
                        hiddenOnCollapse: true
                    },

                    {
                        href: '/',
                        title: 'item 1',
                    },

                    {
                        href: '/',
                        title: 'item 2',
                    },

                    {
                        href: '/',
                        title: 'item 3',
                    },

                    {
                        href: '/',
                        title: 'item 1',
                    },

                    {
                        href: '/',
                        title: 'item 2',
                    },

                    {
                        href: '/',
                        title: 'item 3',
                    },

                    {
                        href: '/',
                        title: 'item 1',
                    },

                    {
                        href: '/',
                        title: 'item 2',
                    },

                    {
                        href: '/',
                        title: 'item 3',
                    },
                    {
                        header: true,
                        title: 'Group 3',
                        hiddenOnCollapse: true
                    },

                    {
                        href: '/',
                        title: 'item 1',
                    },
                    {
                        header: true,
                        title: 'Group 4',
                        hiddenOnCollase: true
                    },

                    {
                        href: '/',
                        title: 'item 1',
                    },
                ]
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
