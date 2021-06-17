class TestTestTest {
  async run(urls, data) {  
    sharedStorage.set("key222", "value222", {ignore_if_present: true});
    
    sharedStorage.set("key333", "value333", {});
    
    sharedStorage.set("key444", "value444");

    try {
      sharedStorage.set("key555");
    } catch(err) {
      console.log(err);
      sharedStorage.set("key666", "value666");
    }
    
    sharedStorage.set("key777");
    
    if (data.name == "experimentA") {
      return 1;
    } else {
      return 2; 
    }
  }
}

sharedStorage.set("key999", "value999");

registerURLSelectionOperation("test-operation", TestTestTest);
