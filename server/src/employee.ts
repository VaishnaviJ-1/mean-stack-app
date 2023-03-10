// import * as mongodb from "mongodb";

 interface Employee {
    name: string;
    position: string;
    level: "junior" | "mid" | "senior";
    // _id?: mongodb.ObjectId;
    _id: string;
};

export let Employees:Employee[]=[
    {
        "_id": '21',
        "name": "Vaishnavi",
        "position": "engineer",
        "level": "mid"
      },
      {
        "_id":"23",
        "name": "Maya",
        "position": "engineer",
        "level": "mid"
      }
] 

var post=Employees.push({
  "_id":"24",
  "name": "Maya",
  "position": "engineer",
  "level": "mid"
})

console.log(Employees);
// var foundItem = Employees.find(x => x._id == 23);
// var index =Employees.findIndex(x=>x._id==23);
// Employees.splice(index,1)
// Employees.push(foundItem)

