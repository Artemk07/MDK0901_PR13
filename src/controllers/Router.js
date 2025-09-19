import express from 'express';
import path from 'path';
import bcrypt from 'bcrypt';

import User from '../models/User.js';
import { __dirname } from '../../paths.js';

const router = express.Router();
const saltRounds = 10; 
// 
router.get('/', (req,res)=>{
  if (req.session && req.session.user) {
    res.redirect('/page_one')

  } else {
    res.redirect('/registration')
  }
});
// 
router.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'Registration.html'))
});

router.post('/registration', async (req, res) => {
    const { name, password, role } = req.body;    
    const NewUser = await User.create({firstName: `${name}`, password: `${password}`,RoleId:`${role}`});
    
    req.session.user = {
      id: NewUser.id,
      username: NewUser.firstName,
      role: NewUser.RoleId
    };

    if (req.session.user) {
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
});
// 
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'Authorization.html'))

});
router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    const u = await User.findOne({
      where:{
        firstName: name,
        password: password
      }
    })
    if (u) {
      req.session.user = {
        id: u.id,
        username: u.firstName,
        role: u.RoleId.toString()
      };
      res.redirect('/page_one');
    }else{
      res.redirect('/registration');
    }

});
// 
router.get('/page_one', (req,res)=>{
  if (req.session && req.session.user) {
    switch (req.session.user.role) {
      case "1":
        res.sendFile(path.join(__dirname,'roles\\Programmer.html'))
        break;
      case "2":
        res.sendFile(path.join(__dirname,'roles\\Student.html'))
        break;
      case "3":
        res.sendFile(path.join(__dirname,'roles\\Teacher.html'))
        break;
      default:
        break;}
  } else {
    res.redirect('/')
  }

});

export default router;



    // const u = await User.findOne({
    //   where:{
    //     firstName: name,
    //     password: password
    //   }
    // })