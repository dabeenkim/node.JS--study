const express = require('express');
const router = express.Router();
const User = require("../schemas/user.js")

router.get("/users", async(req, res) => {
    const users = await User.find();
    const result = [];

if(!users.length){
    return res.status(400).json({
           Message:"회원 목록 조회 실패"
    })
}

for(let i = 0; i < users.length; i++){
    result.push({
        userId:users[i]._id,
        name:users[i].name,
        ID:users[i].ID,
        pw:users[i].pw
    })
}
res.status(200).json({
    result: result
});
})

router.get("/users/:userId", async(req,res) => {
    const {userId} = req.params;
    const userData = await User.findOne({_id: userId});

    if(!userData) {
        return res.status(400).json({
            success:false,
            Message: "회원 상세 조회 실패"
        })
    }
    const result = {
        userId: userData._id,
        name: userData.user,
        ID: userData.ID,
        pw: userData.pw,
    }
    res.status(200).json({result});

})

module.exports = router;