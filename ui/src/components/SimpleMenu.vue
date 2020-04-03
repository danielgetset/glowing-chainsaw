<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vue-simple-menu :raw-menu-data="menu"></vue-simple-menu>
  </div>
</template>

<script>


export default {
  name: 'SimpleMenu',
  props: {
    msg: String
  },
  data() {
            return {
                menu:
                {
                    item1: {
                        id: 'item1',
                        name: 'Item 1',
                        // Item can be as link
                        uri: '//rg.ru'
                      },
                      item2: {
                        id: 'item1',
                        name: 'Item 1',
                        uri: '//rg.ru',
                        // Item can have as child items list
                        list: {
                          item1_1: {
                            id: 'item1_1',
                            name: 'Item 1_1',
                            // List items may be endless
                            list: {
                              item1_1_1: {
                                id: 'item1_1_1',
                                name: 'Item 1_1_1',
                                uri: '//rg.ru'
                              }
                            }
                          }
                        }
                      }
                    }
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
