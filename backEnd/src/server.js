//arrancamos el SERVIDOR
import app from './app.js'

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`SERVIDOR CORRIENDO EN http://localhost:${PORT}`)
})
