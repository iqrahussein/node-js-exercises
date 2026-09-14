const posts=[
  {id:1,name:"iqra"},
  {id:2,name:"cali"}
]

exports.getpost=(req,res)=>{
  res.json(posts)
}

exports.getPostInfo=(req,res)=>{
  const post =posts.find(p=>p.id == req.params.id)

  if(!post) return res.status(404).send("user not found");

  res.json(post)
}