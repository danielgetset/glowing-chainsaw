export default {
  item1: {
    id: "item1",
    name: "Item 1",

    // Item can be as link
    uri: "//rg.ru"
  },
  item2: {
    id: "item1",
    name: "Item 1",
    uri: "//rg.ru",

    // Item can have as child items list
    list: {
      item1_1: {
        id: "item1_1",
        name: "Item 1_1",

        // List items may be endless
        list: {
          item1_1_1: {
            id: "item1_1_1",
            name: "Item 1_1_1",
            uri: "//rg.ru"
          }
        }
      }
    }
  }
};
