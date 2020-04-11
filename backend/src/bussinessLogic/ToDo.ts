import { TodoItem } from '../models/TodoItem'
import { ToDoAccess } from '../dataLayer/ToDoAccess'
import { parseUserId } from '../auth/utils'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { TodoUpdate } from '../models/TodoUpdate'

const uuidv4 = require('uuid/v4')
const toDoAccess = new ToDoAccess()

const s3BucketName = process.env.BUCKET_NAME

export async function getAllToDo(jwtToken: string): Promise<TodoItem[]> {
  const userId = parseUserId(jwtToken)
  return toDoAccess.getAllToDo(userId)
}

export function createToDo(
  createTodoRequest: CreateTodoRequest,
  jwtToken: string
): Promise<TodoItem> {
  const userId = parseUserId(jwtToken)
  const id = uuidv4()
  return toDoAccess.createToDo({
    userId: userId,
    todoId: id,
    createdAt: new Date().getTime().toString(),
    done: false,
    attachmentUrl: `https://${s3BucketName}.s3.amazonaws.com/${id}`,
    ...createTodoRequest
  })
}

export function updateToDo(
  updateTodoRequest: UpdateTodoRequest,
  todoId: string,
  jwtToken: string
): Promise<TodoUpdate> {
  const userId = parseUserId(jwtToken)
  return toDoAccess.updateToDo(updateTodoRequest, todoId, userId)
}

export function deleteToDo(todoId: string, jwtToken: string): Promise<string> {
  const userId = parseUserId(jwtToken)
  return toDoAccess.deleteToDo(todoId, userId)
}

export function generateUploadUrl(todoId: string): Promise<string> {
  return toDoAccess.generateUploadUrl(todoId)
}
