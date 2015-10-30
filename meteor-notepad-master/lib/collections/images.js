store = new FS.Store.FileSystem("images")
Images = new FS.Collection("images", {
  stores: [store]
})