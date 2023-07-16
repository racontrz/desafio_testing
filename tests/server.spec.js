const request = require("supertest");
const server = require("../index");

describe('Operaciones CRUD de cafes', () => {
   
  it('Get /cafes Obtener status code 200', async () => {
    const response = await request(server).get('/cafes').send();
    const status = response.statusCode;
    expect(status).toBe(200);
    
  });

  it('Delete /cafes/:id status code 404 al intentar eliminar un café con un id que no existe', async () => {
    const eliminarCafe = { 'id': 9 };
    const response = await request(server).delete('/cafes').send(eliminarCafe);
    const statusCode = response.statusCode;
    expect(statusCode).toBe(404);
  })

  it('Post /cafes status code 201 al crear un cafe', async () => {
    const nuevoCafe = { 'id': 9, 'nombre': 'Cortado' }; 
    const response = await request(server).post('/cafes').send(nuevoCafe);
    const status = response.statusCode;
    expect(status).toBe(201);
  })

  it('Put /cafes status code 200 al actualizar un cafe con id que no existe', async () => {
    const actualizarCafe = { 'id': 9 };
    const response = await request(server).put('/cafes/3').send(actualizarCafe);  
    const status = response.statusCode;
    expect(status).toBe(400);
  })
});
