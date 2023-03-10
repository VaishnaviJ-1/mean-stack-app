interface Employee {
    name: string;
    position: string;
    level: "junior" | "mid" | "senior";
    // _id?: mongodb.ObjectId;
    _id: number;
}

let Employees:Employee[]=[
    {
        "_id": 21,
        "name": "Vaishnavi",
        "position": "engineer",
        "level": "mid"
      },
      {
        "_id":23,
        "name": "Maya",
        "position": "engineer",
        "level": "mid"
      }
] 
console.log(Employees)