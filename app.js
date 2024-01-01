const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3001;
let items = ['food','cook','eat']

app.use("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get("/", (req, res) => {
  let today = new Date();

  let options={
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  let day= today.toLocaleDateString("en-US", options)


  // let currentday = today.getDay();
  // let day = "";

  // switch (currentday) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //       console.log('Error: Current day is '+currentday)
  // }
  
  //   if(currentday === 6 || currentday === 0){
  //     day ='weekend'
  //     // res.send("yay its the weekend!")
  //   } else {
  //     day='weekday'
  //     // res.sendFile(__dirname+'/index.html')
  //   }
    res.render('list', {kindofday: day, newlistitems: items})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/', function(req,res){
  let item = req.body.newitem
  items.push(item)
  res.redirect('')
})  



















