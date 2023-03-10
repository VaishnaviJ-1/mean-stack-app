import * as express from "express";
import { Employees } from "./employee";
// import * as mongodb from "mongodb";
// import { collections } from "./database";


export const employeeRouter = express.Router();
employeeRouter.use(express.json());

employeeRouter.get("/", async (_req, res) => {
    try {
        // const employees = await collections.employees.find({}).toArray();
        const employees=Employees;
        
        res.status(200).send(employees);
    } catch (error) {
        res.status(500).send(error.message);
    }
    console.log(Employees);
});

employeeRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        // const query = { _id: new mongodb.ObjectId(id) };
        // const employee = await collections.employees.findOne(query);
        const employee=Employees.find(x=>x._id==id)

        if (employee) {
            res.status(200).send(employee);
        } else {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        }
    } catch (error) {
        res.status(404).send(`Failed to find an employee: ID ${req?.params?.id}`);
    }
    console.log(Employees);
});

employeeRouter.post("/", async (req, res) => {
    try {
        const emp = req.body;
        var employee=emp;
        // const result = await collections.employees.insertOne(employee);
        // collections.employees.insertOne(employee);
       
            let outString: string = '';
            let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
        
            for (let i = 0; i <6; i++) {
        
              outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
        
            }
        
        employee._id=outString;
        const result = Employees.push(employee);
        if (result>0) {
            res.status(201).send(`Created a new employee: ID ${employee._id}.`);
        } else {
            res.status(500).send("Failed to create a new employee.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
    console.log(Employees);
});

employeeRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const employee = req.body;
        // const query = { _id: new mongodb.ObjectId(id) };
        // const result = await collections.employees.updateOne(query, { $set: employee });
        var find =Employees.find(x=>x._id==id);
        find.level=employee.level;
        find.name=employee.name;
        find.position=employee.position;

        if (find) {
            res.status(200).send(`Updated an employee: ID ${id}.`);
        } else if (!employee) {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update an employee: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
    console.log(Employees);
});

employeeRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        // const query = { _id: new mongodb.ObjectId(id) };
        // const result = await collections.employees.deleteOne(query);
        var index =Employees.findIndex(x=>x._id==id);
var deletedCount =Employees.splice(index,1).length;

        if (deletedCount>0) {
            res.status(202).send(`Removed an employee: ID ${id}`);
        } else if (deletedCount==0) {
            res.status(400).send(`Failed to remove an employee: ID ${id}`);
        } else  {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
    console.log(Employees);
});
