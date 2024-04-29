import { ReturnDocument } from "mongodb";

const homePage = (req,res)=>{
    //routes

    const info = {
        title:'Homepage',
    }
  res.render("index", info);
};

const addGet = (req,res)=>{
    const info = {
        title:'Add Page'
    }
    res.render("addPage",info);
};

const addPost = (req,res)=>{
    const info = {
        title:'Add Page'
    }
    res.status(200).json({message: "User added succesfully"});
};

export default{
    homePage, addGet, addPost
}