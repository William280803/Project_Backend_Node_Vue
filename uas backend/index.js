const express = require("express")
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bodyParser = require('body-parser');
const { application } = require("express");
const bcrypt = require('bcrypt');
const saltRounds = 10; 

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const sequelize = new Sequelize('course', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
},
);

const User = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NoHP: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Event = sequelize.define('events',{
    event_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    title :{
        type: DataTypes.STRING,
        allowNull: false
    },
    start :{
        type: DataTypes.STRING,
        allowNull: false
    },
    end :{
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Take = sequelize.define('takes', {
    take_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

const Course = sequelize.define('course_lists', {
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    course_detail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course_price: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const AuthLogin = (req, res, next) => {
    User.findOne({ where: { Email: req.body.Email } })
        .then((results) => {
            if (!results) {
                res.status(502)
                res.json({ "msg": "User Not Found" })
            } else {
                bcrypt.compare(req.body.password, results.password, (err, match) => {
                    if (err) {
                        // handle error
                        return res.status(500).send({ error: err });
                    }
                    if (!match) {
                        res.status(502)
                        res.json({ "msg": "Password False" })
                    } else {
                        let token = jwt.sign({ id: results.user_id }, 'shhh', { expiresIn: '30m' })
                        res.send(token).status(200)
                    }
                });
            }
        })
}



const Auth = (req,res,next) => {
    let token = req.query.jwt
    jwt.verify(token, 'shhh', (err, decoded) => {
        console.log(decoded)
        if( decoded ) {
            req.info = decoded
            next()
        }
        else {
            res.status(502)
            res.json()

        }
    });
}


app.post('/Api/ceknama/:id',(req,res) =>{
    User.findOne({
        where: {
            user_id : req.params.id
        }
    })
    .then((results)=>{
        res.send(results)
    })
})

app.post('/API/CekBiasa',Auth,(req,res) =>{
    console.log(req.info)
    res.send(req.info)
})


app.post("/api/login",AuthLogin,(req,res)=>{
    res.send("Dapat Di Jangkau")
})

app.post("/api/TakedCourse",Auth,(req,res)=>{
    Take.create({
        user_id: req.body.user_id,
        course_id: req.body.course_id
    })
    res.send('done')
})


app.post("/api/addcourse",(req,res)=>{
    Course.create({
        author: req.body.author,
        course_name : req.body.course_name,
        course_detail: req.body.course_detail,
        course_price: req.body.course_price
    }).then((resp)=>{
        res.send()
    })
})

app.post("/api/AddCourse", Auth,(req,res)=>{
    Course.create({
        author: req.body.author,
        course_name : req.body.course_name,
        course_detail: req.body.course_detail,
        course_price: req.body.course_price
    }).then((resp)=>{
        console.log(resp)
    })
})

app.post("/api/register", (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            // handle error
            return res.status(500).send({ error: err });
        }
        User.create({
            Email: req.body.Email,
            username: req.body.username,
            password: hash,
            NoHP: req.body.NoHP,
            role: "Member"
        })
        res.send()
    });
});

app.post('/Api/Tambah/Event',Auth,(req,res)=>{
    Event.create({
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    }).then((res1)=>{
        res.send(res1)
    })
})


app.get('/Tampil/Course',Auth,(req, res) => {
    Course.findAll().then(course => {
        console.log(req.info)
        res.send({
            info:req.info,
            data:course
        });
    });
})

app.get('/Tampil/Event',Auth,(req,res)=>{
    sequelize.query("SELECT title, start, end FROM events ORDER BY title ASC, start DESC", { type: sequelize.QueryTypes.SELECT })
    .then(event =>{
        res.send({
            info:req.info,
            data:event
        })
    })
})

app.get('/Tampil/Take/:id',Auth,(req, res) => {
    sequelize.query(`SELECT takes.take_id , users.username, course_lists.author , course_lists.course_name FROM takes INNER JOIN users ON users.user_id=takes.user_id INNER JOIN course_lists ON course_lists.course_id=takes.course_id WHERE users.user_id = ${req.params.id}`, { type: sequelize.QueryTypes.SELECT })
    .then((results)=>{
        res.send({info:req.info,data:results})
    })
    .catch((err)=>{
        res.send(err)
    })
});


app.get('/Tampil/Course/:id',Auth,(req, res) => {
    Course.findAll({where: {course_id: req.params.id}}).then(course => {
        console.log(req.info)
        res.send({
            info:req.info,
            data:course
        });
    });
})



app.get('/Tampil/User/:id', Auth ,(req, res) => {
    User.findAll({where: {user_id:req.params.id}})
    .then(user => {
        res.send(user);
    });
})

app.put('/Api/Ganti/Nama/:id/:name',Auth,(req,res) =>{
    User.update({username: req.params.name},{where: {user_id: req.params.id}})
    .then((res1)=>{
        console.log(res1)
        res.send(res1)
    })
}) 

app.put('/Api/Ganti/Email/:id/:email',Auth,(req,res) =>{
    User.update({Email: req.params.email},{where: {user_id: req.params.id}})
    .then((res1)=>{
        console.log(res1)
        res.send(res1)
    })
}) 

app.put('/Api/Ganti/NoHP/:id/:nohp',Auth,(req,res) =>{
    User.update({NoHP: req.params.nohp},{where: {user_id: req.params.id}})
    .then((res1)=>{
        console.log(res1)
        res.send(res1)
    })
}) 


app.put('/Api/Ganti/Course/:id',Auth,(req,res) =>{
    Course.update({
        course_name : req.body.course_name,
        author : req.body.author,
        course_price: req.body.course_price,
        course_detail : req.body.course_detail
    },{where : {course_id : req.params.id}}).then((resp)=>{
        res.send(resp)
    })
})

app.delete('/Api/Hapus/Course/:id',Auth, (req, res) => {
    const courseId = req.params.id;
    Course.destroy({
      where: {
        course_id: courseId
      }
    }).then(() => {
      res.json({ message: "Course deleted successfully" });
    }).catch((error) => {
      res.status(500).json({ message: "Error deleting course", error });
    });
  });
  

app.listen(3000, () => {
    console.log("Port Running at port localhost:" + 3000)
})