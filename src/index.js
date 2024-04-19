import express from "express"

const app = express()

const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})

app.get('/api/jokes', (req,res)=>{
    const jokes = [
		{
			id:1,
			title: 'A joke',
			content: 'This is a joke'
		},
		{
			id:2,
			title: 'Another joke',
			content: 'this is another joke'
		}
	]
    res.send(jokes)
})