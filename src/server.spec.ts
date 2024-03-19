import router from "./routes"
import express, { Express} from "express"
import request  from 'supertest'
import { sendSuccessResponse } from "./utils"

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

test('should return a welcome message', async () => {
  request(app)
    .get("/")
    .expect(sendSuccessResponse);
})