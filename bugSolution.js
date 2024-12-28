```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection.updateOne({ _id: 1 }, { $inc: { field: 1 } }); 
// Or if field value needs to be converted
db.collection.updateOne({ _id: 1 }, {$inc: { field: parseInt('5') }});
```