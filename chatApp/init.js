const mongoose = require("mongoose");
const Chat = require("./models/chats.js");


main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "sneha",
    to: "supriya",
    msg: "Hello!!",
    created_at: new Date(),
},
{
    from: "amit",
    to: "sumit",
    msg: "Happy birthday!!",
    created_at: new Date(),
},
{
    from: "suma",
    to: "kiran",
    msg: "Hello!! Good evening",
    created_at: new Date(),
},
{
    from: "ravi",
    to: "mani",
    msg: "Hello!! Good morning",
    created_at: new Date(),
},
{
    from: "hima",
    to: "ramya",
    msg: "Hello!! Sup?",
    created_at: new Date(),
}
];

Chat.insertMany(allChats);
