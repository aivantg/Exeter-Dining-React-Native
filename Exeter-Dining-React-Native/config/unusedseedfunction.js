
  // seedFirebase = ()=>{
  //   let dishNames = ["Apple Pie", "Chocolate Chip Muffins", "Chicken Nuggets", "Scrambled Eggs", "Pork Sirloin", "Gibbon's Ice Cream", "Cheese Pizza", "Mushroom Gravy", "Mashed Potatoes"]
  //
  //   let dates = ["07-07-2018", "07-08-2018", "07-09-2018", "07-10-2018", "07-11-2018", "07-12-2018", "07-12-2018", "07-12-2018"]
  //   var dishBatch = this.db.batch()
  //   var dishesRef = this.db.collection("dishes")
  //   var menuBatch = this.db.batch()
  //   var menuRef = this.db.collection("menus")
  //   for (dish of dishNames) {
  //     let id = dish.replace(/\s+/g, '')
  //     dishBatch.set(dishesRef.doc(id), { name: dish, rating: 3.3})
  //   }
  //
  //   for (date of dates) {
  //     dishNames = this.shuffle(dishNames)
  //     var dishIds = dishNames.map((dishName)=>{return dishName.replace(/\s+/g, '')})
  //     menuBatch.set(menuRef.doc(date),
  //     { date: moment(date, "MM-DD-YYYY").toDate(),
  //       elm:
  //         {breakfast: dishIds.slice(0, 5),
  //          lunch: dishIds.slice(5, 10),
  //          dinner: dishIds.slice(0, 5),
  //        },
  //       weth:
  //       {breakfast: dishIds.slice(5, 10),
  //        lunch: dishIds.slice(0, 5),
  //        dinner: dishIds.slice(5, 10),
  //       }
  //     })
  //
  //   }
  //   dishBatch.commit()
  //   menuBatch.commit()
  // }
  //
  // shuffle(array) {
  //   var currentIndex = array.length, temporaryValue, randomIndex;
  //
  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //
  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //
  //   return array;
  // }
