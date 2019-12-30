const request = require('supertest')
const app = require('../app')
describe('Post Endpoints', () => {
    it('crear nuevo usuario', async () => {
        const randomStr = Math.random().toString(36).substring(2, 10);
        const res = await request(app)
        .post('/addUser')
        .send({
            username:randomStr,
            email: `${randomStr}@test.com`,
            firstName:randomStr,
            lastName:randomStr
        })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('user');
        
    })

    it('obtener usuarios', async () => {
        const res = await request(app)
        .get('/getUsers')
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('users');
    })

    it('modificar usuario', async () => {
        const randomStr = Math.random().toString(36).substring(2, 10);
        const updateStr = Math.random().toString(36).substring(2, 10);
        const add = await request(app)
        .post('/addUser')
        .send({
            username:randomStr,
            email: `${randomStr}@test.com`,
            firstName:randomStr,
            lastName:randomStr
        })
        expect(add.statusCode).toEqual(200);
        expect(add.body).toHaveProperty('user');
        
        const res = await request(app)
        .put(`/updateUser/${add.body.user._id}`)
        .send({
            username:updateStr,
            email: `${updateStr}@test.com`,
            firstName:updateStr,
            lastName:updateStr
        })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('user');
    })

    it('eliminar usuario', async () => {
        const randomStr = Math.random().toString(36).substring(2, 10);
        const add = await request(app)
        .post('/addUser')
        .send({
            username:randomStr,
            email: `${randomStr}@test.com`,
            firstName:randomStr,
            lastName:randomStr
        })
        expect(add.statusCode).toEqual(200);
        expect(add.body).toHaveProperty('user');
        
        const res = await request(app)
        .delete(`/delUser`)
        .send({
            id:add.body.user._id
        })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    })
})