const express               = require('express'),
      app                   = express(),
      bodyParser            = require('body-parser'),
      mongoose              = require('mongoose'),
      Order                 = require('./models/order-data'),
      User                  = require('./models/user_database'),
      passport              = require('passport'),
      passportLocal         = require('passport-local'),
      Review                = require('./models/reviews'),
      methodOverride        = require('method-override'),
      reviewRouter          = require('./routes/reviews'),
      cookieSession         = require('cookie-session'),
      authRoutes            = require('./routes/routes'),
      passportSetup         = require('./config/passport-setup'),
      keys                  = require('./config/keys'),
      Ac                    = require('./models/ac-service-data'),
      Plumber               = require('./models/plumber-data'),
      Electrical            = require('./models/electrical-data.js'),
      Carpentor             = require('./models/carpentor-data.js');
//      nodemailer            = require('nodemailer'),
//      validateMail          = require('./routes/mailcheck');
const Employee = require('./models/Employee.js');

const nodemailer = require("nodemailer");

mongoose.connect("mongodb://localhost/service",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.static('../'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(methodOverride('_method'));

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

//set up auth routes
app.use('/auth',authRoutes);

//Passport config
app.use(require('express-session')({
    secret: "Testing",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Serving current user details
app.get('/index',(req,res)=>{
//    console.log(req.user);
//    if(!req.user){
//        res.send({user: undefined});
//    } 
//    else{
//        if(req.user.confirmed){
            res.send({user: req.user});
//        } else{
//            res.send({user: undefined});
//        }
//    }
});

//serving services data
app.get('/ac_service', (req, res)=>{
    Ac.find({},(err, items)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send({data: items});
        }
    });
});

app.get('/plumber_service', (req, res)=>{
    Plumber.find({},(err, items)=>{
        if(err){
            console.log(err);
        }
        else{
           
            res.send({data: items});
        }
    });
});

app.get('/electrical_service', (req, res)=>{
    console.log("here");
    Electrical.find({},(err, items)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(items);
            res.send({data: items});
        }
    });
});

app.get('/carpentor_service', (req, res)=>{
    Carpentor.find({},(err, items)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(items)
            res.send({data: items});
        }
    });
});

// checking user logged in or not
const islogged = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/html/login.html');
}

//Register Post
app.post('/register',(req,res)=>{
    User.register(new User({username: req.body.username}), req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            return res.redirect('/html/sign-up.html');
        }
        if(req.body.password === req.body.passwordRepeat){
            passport.authenticate("local")(req, res, ()=>{
//                validateMail(req.body.username).catch(console.error);
                res.redirect('/');
            });
        } else{
//            req.flash("error", "Password did not match or User already exist.")
            return res.redirect('/html/sign-up.html');
        }
    });
});
        
//validating mail
//app.get('/check/:id',(req,res)=>{
//    User.find({username: req.params.id}, (err, user)=>{
//        user.confirmed = true;
//        req.user = user;
//        res.redirect('/');
//    });
//});

//check link clicked or not
//const checkUser = (req, res, next)=>{
//    User.find({username: req.body.name},(err, user)=>{
//        if(err){
//            console.log(err);
//            return res.redirect('/html/login.html');
//        }
//        if(user.confirmed){
//            next();
//        } else{
//            return res.redirect('/html/login.html');
//        }
//    });
//};

//Login Post
app.post('/login', passport.authenticate("local", {
    successRedirect: 'index.html',
    failureRedirect: '/html/login.html'
}));

//logout
app.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/');
});

app.get('/completepayment', (req,res)=>{
    res.redirect('/html/payment-page.html');
});

app.get('/getOrderAmount', (req, res)=>{
    //    console.log(req.user.orders);
        res.send({data: req.user.orders});
    });






//Adding to cart
app.post('/add_cart',islogged,(req, res)=>{
//    console.log(req.query);
    if('Electrical' === req.query.service){
        Electrical.find({_id: req.query.serviceId}, (err, item)=>{
            if(err){
                console.log(err);
            }
            else{
                const service = item[0].services.find((data)=>{
                   return data._id == req.query.id; 
                });
                
                const user = req.user;
                console.log(user);
                const index = user.orders.findIndex(data=>{
                    return data.name == service.name; 
                });
                if(index!=-1){
                    user.orders[index].quantity+=1;
                } else{
                    user.orders.push({
                        name: service.name,
                        price: service.price,
                        image: service.image,
                        quantity: 1
                    });
                }
                user.save(err=>{
                    if(err){
                        console.log(err);
                    }
//                    else{
//                        console.log(user);
//                    }
                });
                // res.redirect('./html/electrical-services.html');
            }
        });
    }
    else if('Plumber' === req.query.service){
        console.log('ServiceID',req.query.serviceId);
        console.log('productId',req.query.id);
        Plumber.find({_id: req.query.serviceId}, (err, item)=>{
            if(err){
                console.log(err);
            }
            else{
                const service = item[0].services.find((data)=>{
                   return data._id == req.query.id; 
                });
                console.log('service',service);

                const user = req.user;
                console.log('user',user);
                const index = user.orders.findIndex((data) => {
                   return data.name == service.name; 
                });

                if(index!=-1){
                    user.orders[index].quantity+=1;
                } else{
                    user.orders.push({
                        name: service.name,
                        price: service.price,
                        image: service.image,
                        quantity: 1
                    });
                }
                user.save(err=>{
                    if(err){
                        console.log(err);
                    }
//                    else{
//                        console.log(user);
//                    }
                });
//                console.log(user);
                // res.redirect('./html/plumber.html');
            }
        });
    }
    else if('Carpentor' === req.query.service){
        Carpentor.find({_id: req.query.serviceId}, (err, item)=>{
            if(err){
                console.log(err);
            }
            else{
                const service = item[0].services.find((data)=>{
                   return data._id == req.query.id; 
                });
                
                const user = req.user;
                const index = user.orders.findIndex(data=>{
                    return data.name == service.name; 
                });
                if(index!=-1){
                    user.orders[index].quantity+=1;
                } else{
                    user.orders.push({
                        name: service.name,
                        price: service.price,
                        image: service.image,
                        quantity: 1
                    });
                }
                user.save(err=>{
                    if(err){
                        console.log(err);
                    }
//                    else{
//                        console.log(user);
//                    }
                });
//                console.log(user);
                // res.redirect('./html/carpentor.html');
            }
        });
    }
    else if('Ac' === req.query.service){
        Ac.find({_id: req.query.serviceId}, (err, item)=>{
            if(err){
                console.log(err);
            }
            else{
                const service = item[0].services.find((data)=>{
                   return data._id == req.query.id; 
                });
                
                const user = req.user;
                const index = user.orders.findIndex(data=>{
                    return data.name == service.name; 
                });
                if(index!=-1){
                    user.orders[index].quantity+=1;
                } else{
                    user.orders.push({
                        name: service.name,
                        price: service.price,
                        image: service.image,
                        quantity: 1
                    });
                }
                user.save(err=>{
                    if(err){
                        console.log(err);
                    }
//                    else{
//                        console.log(user);
//                    }
                });
//                console.log(user);
                // res.redirect('./html/ac-repairs.html');
            }
        });
    }
    res.redirect('../html/myCart.html');
});

//showing mycart
app.get('/mycart', (req, res)=>{
//    console.log(req.user.orders);
    res.send({data: req.user.orders});
});

app.get('/removeCartItems',async (req,res)=>{
    let orderDetails = "";
    let totalAmount = 0;
    for(let one of req.user.orders){
        orderDetails += "<li>" + one.name + "*" + one.quantity + "</li>"; 
        totalAmount += one.price*one.quantity;
    }
    // await Thing.findOneAndUpdate({}, { $set: { name: 'Test2' } });
    let em = await Employee.findOneAndUpdate({isOccupied: false}, { $set: { isOccupied: true } })

    let employeeDetail = "<h4> Name:"+ em.name+"</h4>"+
    "<h4> Contact:"+ em.contact+"</h4>";
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'piyushi10agarwal@gmail.com',
            pass: 'zfuswotjkdcwiyjn'
        }
    });
    await transporter.sendMail({
    from: "harsh.agarwal.2450@gmail.com", // sender address
    to: req.user.username, // list of receivers
    subject: "Order received successfully", // Subject line
    html: "<p> Hello" +   " <br> Your order has been received successfully. Find below the details of the service provider. Please note that you can avail the services till today only. The service provider will reach at your location within 2 hours." + 
    "<ul>"  
    +orderDetails
    +"<li>"+"totalAmount:" +totalAmount+"</li>"
    +"</ul>"
    +"<br>"
    +"<p style='color:red'>*Please find your service employee details below</p>"
    +employeeDetail
    +"<p/>", // html body
      }).then(()=>{
    });
    req.user.orders = [];
    req.user.save();
    res.redirect('../index.html')
});

// Decreasing Cart item quantity
app.post('/decreaseCartItem/:name',(req, res)=>{
    let index;
    for(let i=0;i<req.user.orders.length;i++){
        if(req.user.orders[i].name === req.params.name){
            index=i;
            break;
        }
    }
//    console.log(index);
    if(req.user.orders[index].quantity === 1){
        req.user.orders.splice(index, 1);
    } else{
        req.user.orders[index].quantity = req.user.orders[index].quantity - 1;
    }
    req.user.save();
    res.redirect('../html/myCart.html');
});

// Increasing Cart item quantity
app.post('/increaseCartItem/:name',(req, res)=>{
    let index;
    for(let i=0;i<req.user.orders.length;i++){
        if(req.user.orders[i].name === req.params.name){
            index=i;
            break;
        }
    }
//    console.log(index);    
    req.user.orders[index].quantity = req.user.orders[index].quantity + 1;
    req.user.save();
    res.redirect('../html/myCart.html');
});

//this is for reviews router and we create it in routes folder
app.use('/reviews',reviewRouter);




const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
   console.log("Server has Started.."); 
});