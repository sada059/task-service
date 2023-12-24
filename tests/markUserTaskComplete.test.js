const request = require('supertest');
const app = require('../app');

describe('Mark a task as complete', () => {
  it('should mark a task as complete', async () => {
    const taskId = '658825e5e4c15c29543cbe3d';

    const response = await request(app)
      .patch(`/tasks/${taskId}/complete`)
      .send();

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Task marked as complete');
  });

  it('should return a 404 error for non-existent task ID', async () => {
    const nonExistentTaskId = '658825e5e4c15c29543cbe3q';

    const response = await request(app)
      .patch(`/tasks/${nonExistentTaskId}/complete`)
      .send();

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Task not found');
  });
});
